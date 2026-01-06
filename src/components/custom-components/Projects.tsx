import Container from "./Container";
import Tilt from "react-parallax-tilt";
import { projects } from "@/services/projectsServices";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "0px 0px -200px 0px" }}
    >
      <Container>
        <div className="text-center md:text-start">
          <p className="uppercase text-teal-300">Selected Works</p>
          <h2 className="text-6xl font-extrabold text-gray-200 mb-20">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <a href={project.url} target="_blank" key={idx}>
                <Tilt
                  tiltReverse={true}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  transitionSpeed={10000}
                >
                  <Card className="bg-neutral-800/20 border-slate-800 overflow-hidden pt-0 cursor-pointer group">
                    <CardHeader className="p-0">
                      <img
                        src={project.img}
                        alt={project.prjectName}
                        className="overflow-hidden object-cover"
                      />
                    </CardHeader>
                    <CardContent>
                      <h3 className="text-white font-semibold text-xl group-hover:text-teal-300 duration-500">
                        {project.prjectName}
                      </h3>
                      <h4 className="text-gray-300 mb-3 ">
                        {project.description}
                      </h4>
                    </CardContent>
                    <CardFooter className="justify-end">
                      <p className="text-teal-300">View Project</p>
                      <ArrowRight
                        className="group-hover:-rotate-45 duration-500"
                        color="#5eead4"
                      />
                    </CardFooter>
                  </Card>
                </Tilt>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Projects;
