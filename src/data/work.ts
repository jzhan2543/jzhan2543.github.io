export interface WorkItem {
  date: string;
  title: string;
  description: string;
  href?: string;
}

export const work: WorkItem[] = [
  {
    date: "2024-2026",
    title: "Touchless Expense Management",
    description:
      "ML-driven real-time audit pipeline for expense reporting, built with Microsoft on AmEx commercial card data.",
  },
  {
    date: "2024-2026",
    title: "Entity Matching",
    description:
      "Logistic-regression matcher boosting daily match rate by 15% across millions of records on prem and GCP.",
  },
  {
    date: "2023",
    title: "10K Summarization",
    description:
      "Extractive BERT + Lex Rank pipeline surfacing key passages from SEC filings for analyst review.",
  },
  {
    date: "2021-2022",
    title: "APSML",
    description:
      "Account-payable standardization ML classifier at 97% accuracy. Saved $1M+ annually in vendor routing costs.",
  },
  {
    date: "2019-2021",
    title: "Mapscout",
    description:
      "Interactive map resource connecting users with public-service information.",
    href: "https://mapscout.io",
  },
];
