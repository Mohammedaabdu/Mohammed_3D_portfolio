import afry from "@/assets/AFRY.png";
import cgi from "@/assets/CGI.png";
import kau from "@/assets/KAU.jpg";

export interface IExpirence {
  role: string;
  company: string;
  description: string[];
  date: string;
  logo: string;
}
export const expirences: IExpirence[] = [
  {
    role: "Fullstack Developer",
    company: "AFRY",
    description: [
      "Contributed to the development of AFRY Pulse, a production monitoring system that enhances productivity and efficiency by visualizing production processes and measuring overall equipment effectiveness (OEE).",
      "Implemented services using clean architecture principles and worked with technologies such as C#, Entity Framework and SQL queries.",
      "Enhanced the front-end UI/UX using HTML, TypeScript, CSS, Aurelia frontend-framework and libraries such as Kendo UI and jQuery.",
      "Collaborated with architects as needed and managed all development responsibilities as the sole programmer.",
    ],
    date: "Jan 2024 – Feb 2025",
    logo: afry,
  },
  {
    role: "Fullstack Developer",
    company: "CGI",
    description: [
      "Contributed to the development of Heroma, an HR- and payroll management system, by integrating the system from WPF to web",
      "Handled technologies such as C#, HTML, TypeScript, CSS, SQL, DB2, DevExtreme, and jQuery.",
      "As the sole developer in Sweden, I handled critical bugs locally due to GDPR restrictions on the team in India. Worked in two-week sprints for task planning.",
      "Enhanced system and query performance.",
      "Collaborated with customer support, architects,and UI/UX teams",
    ],
    date: "Jun 2022 – Dec 2023",
    logo: cgi,
  },
  {
    role: "Master of Science in Computer Engineering",
    company: "Karlstad University",
    description: [
      "Studies in programming (Java, C, C#, Python), Linux, data structures, algorithms, data communication, and data security.",
    ],
    date: "Aug 2017 – Jun 2022",
    logo: kau,
  },
];
