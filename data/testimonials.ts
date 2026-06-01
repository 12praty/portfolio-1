export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "An exceptional developer who consistently delivers high-quality code. Their attention to detail and ability to solve complex problems made them invaluable to our team.",
    author: "[TESTIMONIAL_AUTHOR_1]",
    role: "[THEIR_ROLE]",
    company: "[THEIR_COMPANY]",
  },
  {
    quote:
      "Working with them was a game-changer for our project. They brought fresh ideas, clean architecture, and a relentless focus on user experience that elevated our entire product.",
    author: "[TESTIMONIAL_AUTHOR_2]",
    role: "[THEIR_ROLE]",
    company: "[THEIR_COMPANY]",
  },
  {
    quote:
      "One of the most talented engineers I've had the pleasure of collaborating with. Their technical skills are matched only by their ability to communicate complex ideas clearly.",
    author: "[TESTIMONIAL_AUTHOR_3]",
    role: "[THEIR_ROLE]",
    company: "[THEIR_COMPANY]",
  },
];
