import solarSystem from "@/assets/solarSystem.png";
import trejdegruppen from "@/assets/tredjegruppenAB.png";
import portfolio from "@/assets/portfolio.png";
export interface IProject {
  img: string;
  prjectName: string;
  description: string;
  url: string;
}
export const projects: IProject[] = [
  {
    img: trejdegruppen,
    prjectName: "Tredje Gruppen AB",
    description: "Built a shipping company website",
    url: "https://tredje-gruppen-ab.vercel.app/",
  },
  {
    img: solarSystem,
    prjectName: "Solar System",
    description: "Built the solar system with help of three.js framework",
    url: "https://3-d-solar-system-smoky.vercel.app/",
  },
  {
    img: "portfolio",
    prjectName: "Portfolio",
    description: "My own portfolio",
    url: "no",
  },
];
