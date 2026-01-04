import Contact from "../custom-components/Contact";
import CvTimeline from "../custom-components/CvTimeline";
import Projects from "../custom-components/Projects";
import Hero from "./Hero";
import { expirences } from "@/services/expirencesService";
const Main = () => {
  return (
    <main className="grow">
      <Hero></Hero>
      <CvTimeline items={expirences}></CvTimeline>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
};

export default Main;
