export interface SocialLink {
  label: string;
  href: string;
  /** inline SVG path data rendered inside a 24x24 viewBox */
  icon: string;
}

export const profile = {
  name: 'Ashutosh Kakadiya',
  firstName: 'Ashutosh',
  role: 'Senior Machine Learning Scientist',
  employer: 'GoDaddy',
  employerUrl: 'https://www.godaddy.com/ai-for-small-businesses/',
  location: 'Ahmedabad, India',
  email: 'ashutoshkakadiya11@gmail.com',
  photo: '/images/profile.jpg',
  resumeUrl: '/files/Ashutosh_Kakadiya_Resume.pdf',
  scholar: 'https://scholar.google.co.in/citations?hl=en&user=oF_bmIMAAAAJ',
  // Short line under the name in the hero.
  tagline:
    'Building Generative AI products and dynamic pricing systems for millions of entrepreneurs.',
  // Longer intro used on the home page.
  intro:
    'I work at the intersection of machine learning research and large-scale products — reinforcement learning, deep learning, and generative AI applied to real problems in personalization, finance, and automation.',
  quotes: [
    'Life is a Picture, But We Live in a Pixel.',
    'All cards on the table, face up, all the time.',
  ],
};

export const socials: SocialLink[] = [
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.co.in/citations?hl=en&user=oF_bmIMAAAAJ',
    icon: 'M12 2 1 8l11 6 9-4.9V16h2V8L12 2zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.6z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ashutoshaay26',
    icon: 'M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.71-.23.71-.5v-1.76c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.07 1.61 1.09 1.61 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.67-1.4-2.33-.27-4.78-1.17-4.78-5.18 0-1.15.41-2.08 1.09-2.82-.11-.27-.47-1.34.1-2.8 0 0 .88-.28 2.9 1.07a10 10 0 0 1 5.28 0c2-1.35 2.89-1.07 2.89-1.07.57 1.46.21 2.53.1 2.8.68.74 1.09 1.67 1.09 2.82 0 4.02-2.46 4.9-4.8 5.16.38.33.71.97.71 1.96v2.9c0 .28.19.61.72.5A10.5 10.5 0 0 0 12 1.5z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ashutosh-kakadiya-3964a5a7',
    icon: 'M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05 4 0 4.75 2.64 4.75 6.07V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9V9z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/ashutoshaay26/',
    icon: 'M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.21 8.7 3.2 9.05 3.2 12s.01 3.3.07 4.54c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.54s-.01-3.3-.07-4.54c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.68-1.06 2.86 2.86 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06zm0 1.8A3.14 3.14 0 1 0 12 15.14 3.14 3.14 0 0 0 12 8.86zm5.15-3.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z',
  },
  {
    label: 'Email',
    href: 'mailto:ashutoshkakadiya11@gmail.com',
    icon: 'M3 5h18c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1zm1.4 2L12 12l7.6-5H4.4zM20 8.25l-8 5.25-8-5.25V17h16V8.25z',
  },
];
