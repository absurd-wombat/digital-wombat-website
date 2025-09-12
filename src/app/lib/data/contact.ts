export interface ContactInfo {
  title: string;
  value: string;
  svg: string;
}

export const contactInfo: ContactInfo[] = [
  {
    title: "Email",
    value: "hello@absurdwombat.com",
    svg: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
  {
    title: "Hours",
    value: "Mon-Fri 9AM-6PM",
    svg: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
];
