import cpmc from "../assets/images/cpmcimg.jpeg";
import gdsc from "../assets/images/gdscimg.png";
import nuance from "../assets/images/nuanceimg.jpg";
import ribin from "../assets/images/ribinimg.png";
// TODO: Add Monash University logo to src/assets/images/monashimg.png
// TODO: Add Smollan Group logo to src/assets/images/smollanimg.png

const workExperience = [
  {
    logo: null, // TODO: replace with monashimg when available
    companyName: "Monash University",
    role: "Teaching Associate",
    servingDate: "Jul 2025 – Present",
    location: "Melbourne, Australia",
  },
  {
    logo: null, // TODO: replace with smollanimg when available
    companyName: "Smollan Group (Google-Partnered)",
    role: "Flutter Tech Lead",
    servingDate: "Jul 2024 – Mar 2025",
    location: "Mumbai, India",
  },
  {
    logo: ribin,
    companyName: "CloserTech Private Limited",
    role: "React Native Developer",
    servingDate: "Aug 2023 – Jul 2024",
    location: "Mumbai, India",
  },
  {
    logo: nuance,
    companyName: "Nuance Communications (Microsoft)",
    role: "SDE Intern",
    servingDate: "May 2023 – Jul 2023",
    location: "Pune, India",
  },
];

const leadershipExperience = [
  {
    logo: gdsc,
    companyName: "Google Developer Students Club (GDSC)",
    role: "Android Specialist",
    servingDate: "Aug 2022 – Jun 2023",
  },
  {
    logo: cpmc,
    companyName: "Competitive Programming & Mentorship Club",
    role: "Co-Founder | Vice-Captain",
    servingDate: "May 2022 – Jan 2023",
  },
];

const education = [
  {
    institution: "Monash University",
    degree: "Master of Information Technology",
    period: "Mar 2025 – Nov 2026 (Expected)",
    location: "Melbourne, Australia",
    grade: "WAM: 81 | CGPA: 3.75/4",
    note: "Teaching Associate",
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "B.E. in Information Technology",
    period: "Jan 2021 – Jun 2024",
    location: "Pune, India",
    grade: "CGPA: 8.9/10",
    note: "",
  },
];

const Experience = [workExperience, leadershipExperience, education];

export default Experience;
