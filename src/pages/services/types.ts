export interface ServiceSection {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  sections: ServiceSection[];
  faqs?: ServiceFAQ[];
}