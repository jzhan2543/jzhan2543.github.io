export interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  location: string;
}

export const experience: ExperienceItem[] = [
  {
    date: "2021-now",
    company: "American Express",
    role: "AI Engineer II — GCST AICOE",
    location: "New York",
  },
  {
    date: "2019",
    company: "Zuora",
    role: "Software Engineering Intern",
    location: "Atlanta",
  },
  {
    date: "2018",
    company: "Elavon",
    role: "Quality Assurance Intern",
    location: "Atlanta",
  },
];
