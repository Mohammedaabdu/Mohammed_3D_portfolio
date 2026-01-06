import { motion } from "motion/react";
import Container from "./Container";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const MotionButton = motion(Button);

const Contact = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const formref = useRef<HTMLFormElement>(null);
  const formSchema = z.object({
    user: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(50, { message: "Name cannot be longer than 50 characters" }),
    email: z.email({ message: "Email is incorrect" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters" })
      .max(1000, { message: "Message can be at most 1000 characters" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(_values: z.infer<typeof formSchema>) {
    if (!formref.current) return;
    try {
      setButtonDisabled(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formref.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      form.reset();
      toast.success("Email sent successfully!");
      setButtonDisabled(false);
    } catch (error) {
      toast.success("Something went wrong.");
    }
  }

  return (
    <>
      <Toaster richColors position="top-center" />

      {/* <div className="fixed left-1/2 top-1/2 ">
        <Spinner className="size-8 text-teal-300" />
      </div> */}
      <motion.section id="contact" className="my-15">
        <Container>
          <div className="text-center md:text-start mb-12">
            <p className="uppercase text-teal-300">Get in touch</p>
            <h2 className="text-6xl font-extrabold text-gray-200">Contact</h2>
          </div>
          <Card className="bg-neutral-800/20 border-slate-800 max-w-3xl mx-auto py-12">
            <CardHeader className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="rounded-full bg-teal-200/20 w-14 h-14 flex items-center justify-center">
                <Send className="mr-1 mt-1" color="#5eead4" size="36px" />
              </div>
              <p className="uppercase text-teal-300 font-jetbrains font-medium">
                Contact
              </p>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's build something amazing
              </h3>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                I'm currently available for freelance projects and open to
                full-time opportunities. Drop me a line!
              </p>
            </CardHeader>
            <CardContent className="text-white">
              <Form {...form}>
                <form
                  ref={formref}
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2 flex flex-col items-center"
                >
                  <FormField
                    control={form.control}
                    name="user"
                    render={({ field }) => (
                      <FormItem className="w-full max-w-sm">
                        <FormControl>
                          <Input
                            type="text"
                            className="bg-neutral-900 border-neutral-700 text-white focus-visible:ring-teal-400"
                            placeholder="Name Namesson"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full max-w-sm">
                        <FormControl>
                          <Input
                            type="email"
                            className="bg-neutral-900 border-neutral-700 text-white focus-visible:ring-teal-400"
                            placeholder="example@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="w-full max-w-sm">
                        <FormControl>
                          <Textarea
                            className="resize-none h-32 max-w-sm bg-neutral-900 border-neutral-700 text-white focus-visible:ring-teal-400 "
                            placeholder="Tell me about your project..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <MotionButton
                    disabled={isButtonDisabled}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.15, ease: "easeOut" },
                    }}
                    whileTap={{
                      scale: 0.9,
                      y: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    }}
                    className="bg-teal-300/60 w-full max-w-sm cursor-pointer hover:bg-teal-300 transition-none"
                    type="submit"
                  >
                    Submit
                  </MotionButton>
                </form>
              </Form>
            </CardContent>
          </Card>
        </Container>
      </motion.section>
    </>
  );
};

export default Contact;
