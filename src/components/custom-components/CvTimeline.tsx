import Container from "./Container";
import type { IExpirence } from "@/services/expirencesService";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "../ui/card";
interface CvTimelineProps {
  items: IExpirence[];
}

const CvTimeline = ({ items }: CvTimelineProps) => {
  return (
    <section id="expirence">
      <Container>
        <div className="text-center md:text-start">
          <p className="uppercase text-teal-300">What I have done so far</p>
          <h2 className="text-6xl font-extrabold text-gray-200">Expirence</h2>
        </div>
        <div className="relative max-w-4xl mt-20 mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-linear-to-b from-teal-600 via-teal-400 to-violet-500 md:-translate-x-1/2 md:left-1/2" />

          {items.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex mb-20 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row `}
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-12 h-12 rounded-full overflow-hidden md:-translate-x-1/2  md:left-1/2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-cover"
                  />
                </div>

                {/* Card */}
                <Card
                  className={
                    "w-full md:w-[45%] ml-16 md:ml-0 p-6 bg-neutral-800/20 border-slate-800"
                  }
                >
                  <CardHeader>
                    <p className="text-sm text-gray-300">{exp.date}</p>
                    <h3 className="text-white font-semibold text-xl">
                      {exp.role}
                    </h3>
                    <h4 className="text-gray-300 mb-3">{exp.company}</h4>
                  </CardHeader>
                  <CardContent>
                    <ul
                      className={`text-gray-400 space-y-1 ${
                        isLeft ? "list-disc ml-4" : "list-disc mr-4"
                      }`}
                    >
                      {exp.description.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CvTimeline;
