import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "../custom-components/Container";
const Footer = () => {
  return (
    <footer className="bg-neutral-800/20">
      <Container className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/mohammed-abdu-9809041a2/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-200 hover:text-teal-300"
              size="lg"
            />
          </a>
          <a href="https://github.com/Mohammedaabdu" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-200 hover:text-teal-300"
              size="lg"
            />
          </a>
        </div>
        <p className="text-gray-200 font-jetbrains">
          © 2026 Mohammed. Built with <span className="text-teal-300">❤︎</span>{" "}
          & code.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
