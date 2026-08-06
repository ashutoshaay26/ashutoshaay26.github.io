// Structured site content, migrated from the previous Jekyll site and lightly refreshed.

export interface Update {
  date: string; // display date
  html: string; // may contain links
}

export interface Role {
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  location?: string;
  points: string[];
  kind: 'work' | 'education';
}

export interface Research {
  title: string;
  blurb: string;
  link?: { label: string; href: string };
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  excerpt: string;
  tags: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
}

export interface Talk {
  title: string;
  venue: string;
  date: string;
  location: string;
  points: string[];
  link?: { label: string; href: string };
}

export interface Award {
  title: string;
  detail: string;
  year: string;
}

export interface InterestGroup {
  heading: string;
  intro?: string;
  items: string[];
}

// Newest first.
export const updates: Update[] = [
  {
    date: 'Apr 2024',
    html: 'Invited as a guest speaker at Ahmedabad University to deliver <em>“Charting a Path: Navigating the AI and Machine Learning Landscape”</em>. <a href="https://docs.google.com/presentation/d/1IGthC98qFfnQFREPQG5_0nNlzZuqBGQy3Q-87GCEIXI/edit?usp=sharing">Slides</a>.',
  },
  {
    date: 'Oct 2023',
    html: 'Joined <a href="https://www.godaddy.com/ai-for-small-businesses/">GoDaddy AI</a> as a Senior Machine Learning Scientist.',
  },
  {
    date: 'May 2021',
    html: 'Joined <a href="https://www.amazon.science/">Amazon Science</a> as a Machine Learning Scientist.',
  },
  {
    date: 'Feb 2021',
    html: 'Presented <em>“Relational Boosted Bandits”</em> (AAAI’21) at the 9th RBCDSAI workshop on Recent Progress in Data Science and AI. <a href="https://youtu.be/XW33atz_2SQ?t=5748">Recorded talk</a>.',
  },
  {
    date: 'Dec 2020',
    html: '<em>“Relational Boosted Bandits”</em> accepted as a full paper at <a href="https://aaai.org/Conferences/AAAI-21/aaai21call/">AAAI 2021</a>. <a href="https://arxiv.org/pdf/2012.09220.pdf">Pre-print</a>.',
  },
  {
    date: 'Aug 2020',
    html: 'Selected for the <a href="https://sites.google.com/view/aisummerschool2020/home">Google AI Summer School</a> — one of 150 recipients among thousands of applicants.',
  },
];

export const experience: Role[] = [
  {
    title: 'Senior Machine Learning Scientist',
    org: 'GoDaddy',
    orgUrl: 'https://www.godaddy.com/ai-for-small-businesses/',
    period: 'Oct 2023 – Present',
    location: 'India',
    kind: 'work',
    points: [
      'Work on dynamic pricing and build Generative AI products for millions of entrepreneurs to fuel their business growth and productivity.',
    ],
  },
  {
    title: 'Machine Learning Applied Scientist',
    org: 'Amazon Science',
    orgUrl: 'https://www.amazon.science/',
    period: 'May 2021 – Oct 2023',
    location: 'Bangalore, India',
    kind: 'work',
    points: [
      'Part of the Advertising Trust team.',
      'Built large-scale ML systems for ad moderation, catering to ~1 million ads per day.',
    ],
  },
  {
    title: 'MS by Research, Computer Science',
    org: 'IIT Madras',
    orgUrl: 'https://www.cse.iitm.ac.in/',
    period: 'Jul 2018 – 2021',
    location: 'Chennai, India',
    kind: 'education',
    points: [
      'Advised by Prof. Balaraman Ravindran (IIT Madras) and Prof. Sriraam Natarajan (UT Dallas), at the intersection of Reinforcement Learning and Statistical Relational Learning.',
      'Thesis published as a long paper at AAAI’21.',
    ],
  },
  {
    title: 'Machine Learning R&D Intern',
    org: 'ezDI',
    orgUrl: 'https://www.ezdi.com/',
    period: 'May 2017 – Jun 2018',
    location: 'India',
    kind: 'work',
    points: [
      'Applied machine learning in healthcare; part of an undergraduate deep-learning research group at Ahmedabad University.',
    ],
  },
  {
    title: 'B.Tech, Information & Communication Technology',
    org: 'Ahmedabad University (SEAS)',
    orgUrl: 'https://ahduni.edu.in/seas/',
    period: '2014 – 2018',
    location: 'Ahmedabad, India',
    kind: 'education',
    points: [
      'Advised by Prof. Ratnik Gandhi and Prof. Sanjay Chaudhary.',
    ],
  },
];

export const activities: string[] = [
  'Lab Instructor — Reinforcement Learning Crash Course Workshop for DRDO scientists, IITM Research Park (Dec 2019).',
  'Lab Coordinator — Summer School “Learning in Data Science: Models, Algorithms and Tools”, SEAS, Ahmedabad University (May 2017).',
];

export const research: Research[] = [
  {
    title: 'Relational Contextual Bandits in real-world user interactions',
    blurb:
      'Contextual bandit algorithms have become essential in real-world user-interaction problems, but they represent context as attribute–value pairs, making them infeasible for inherently relational domains like social networks. We propose Relational Boosted Bandits (RB2), a contextual bandits algorithm for relational domains based on relational boosted trees. RB2 learns interpretable and explainable models thanks to the descriptive nature of relational representation, and is effective on link prediction, relational classification, and recommendation.',
    link: { label: 'AAAI’21 paper', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/17439' },
  },
  {
    title: 'Correlated discrete data generation using adversarial training',
    blurb:
      'GANs have shown great promise for synthetic image generation, inpainting, and style transfer, but generating discrete data remains a challenge. This work presents an adversarial-training-based correlated discrete data (CDD) generation model, with a detailed approach for conditional CDD generation. Evaluated on a job-seeking candidate skill-set dataset and MNIST, the model outperforms prior work by leveraging the inherent correlation in the data.',
    link: { label: 'Project page', href: 'https://sites.google.com/view/seasau' },
  },
  {
    title: 'Human Capital Management recommendation system',
    blurb:
      'Finding meaningful work and the right talent is a classic Human Capital Management problem. This project builds a stateless, scalable, micro-service architecture for automated HCM, using ML to cluster and categorize job postings and candidate profiles. NLP handles feature extraction while a semantic-web ranking algorithm produces accurate recommendations.',
  },
];

export const publications: Publication[] = [
  {
    title: 'Relational Boosted Bandits',
    venue: 'AAAI',
    year: 2021,
    excerpt:
      'A contextual bandits algorithm for relational domains based on relational boosted trees, enabling interpretable and explainable models for link prediction, relational classification, and recommendation.',
    tags: ['Contextual Bandits', 'Relational Learning', 'Reinforcement Learning', 'Gradient Boosting'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/pdf/2012.09220.pdf' },
      { label: 'Code', href: 'https://github.com/ashutoshaay26/Relational-Boosted-Bandits' },
    ],
    featured: true,
  },
  {
    title: 'A Service-Oriented Human Capital Management Recommendation Platform',
    venue: 'IEEE International System Conference (SysCon)',
    year: 2019,
    excerpt:
      'A stateless, scalable, micro-service-based architecture that pushes towards automation of Human Capital Management through ML- and statistics-driven recommendation of jobs and candidates.',
    tags: ['Machine Learning', 'Recommendation', 'Human Capital Management'],
    links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/document/8836842' }],
    featured: true,
  },
  {
    title: 'Correlated discrete data generation using adversarial training',
    venue: '2nd Workshop on Data Science for HCM, co-located with ECML-PKDD',
    year: 2018,
    excerpt:
      'An adversarial-training-based model for generating correlated discrete data, with an approach for conditional generation, evaluated on a private skill-set dataset and MNIST.',
    tags: ['Deep Learning', 'GANs', 'Autoencoders', 'Correlational Neural Networks'],
    links: [{ label: 'Paper', href: 'https://arxiv.org/abs/1804.00925' }],
  },
];

export const talks: Talk[] = [
  {
    title: 'Introduction to Clustering',
    venue: 'VIT Mathematical Chapter, Vellore Institute of Technology',
    date: 'Feb 2021',
    location: 'Virtual',
    points: [
      'Theory session on ML paradigms and an introduction to clustering.',
      'In-depth walkthrough of the K-Means algorithm with smart initialization, implemented from scratch with step-by-step visualization.',
    ],
    link: { label: 'Notebook', href: 'https://github.com/ashutoshaay26/VITMAS_Kmeans' },
  },
  {
    title: 'Hands-on Machine Learning',
    venue: 'Programming Club, Ahmedabad University',
    date: 'Feb 2021',
    location: 'Virtual',
    points: [
      'Lab sessions with Python tutorials giving attendees hands-on experience across ML and data-science algorithms.',
      'Applied Logistic Regression and Decision Trees on real-world datasets, emphasizing data pre-processing and evaluation.',
    ],
    link: { label: 'Notebook', href: 'https://github.com/ashutoshaay26/AU_Hands-on-ML' },
  },
  {
    title: 'Introduction to Machine Learning',
    venue: 'Summer School — Learning in Data Science: Models, Algorithms and Tools',
    date: 'Jul 2017',
    location: 'Ahmedabad, India',
    points: [
      'Conducted lab and theory sessions on core ML algorithms: stochastic gradient descent, multivariate & logistic regression, and k-nearest neighbours.',
    ],
    link: { label: 'Summer school', href: 'https://sites.google.com/view/seasschool2017/home?authuser=0' },
  },
];

export const awards: Award[] = [
  {
    title: 'Google AI Research Summer School',
    detail:
      'Selected as one of 150 recipients among thousands of applicants, hosted by Google Research India.',
    year: '2020',
  },
  {
    title: 'IEEE Xtreme',
    detail: 'Secured 25th rank across India in the 24-hour algorithmic programming competition.',
    year: '2016',
  },
  {
    title: 'University Programming Contest — Runners-up',
    detail:
      'Secured 2nd position in a contest between Ahmedabad University and the Informatics Institute of Technology, Sri Lanka.',
    year: '2016',
  },
  {
    title: 'CodeOverSeas — 4th position',
    detail:
      'Programming contest jointly held by Ahmedabad University, India and the Informatics Institute of Technology, Sri Lanka.',
    year: '2016',
  },
  {
    title: 'Network Science Course',
    detail:
      'Completed a short-term course by Dr. Chintan Vaishnav, Academic Director of the MIT Tata Center for Technology and Design.',
    year: '2015',
  },
  {
    title: 'IEEE Project Selection',
    detail: 'Four course projects selected for the annual exhibition by the IEEE branch of Ahmedabad University.',
    year: '2015–2017',
  },
  {
    title: 'Indian Oil Scholarship',
    detail: 'Selected for the Indian Oil Corporation Student Scholarship for academic excellence.',
    year: '2014',
  },
  {
    title: 'GSEB Merit Scholarship',
    detail: 'Awarded the GSEB Merit Scholarship for professional studies.',
    year: '2014',
  },
];

export const personal: InterestGroup[] = [
  {
    heading: 'Outside of work',
    items: [
      'Walking or running, cardio and breathwork — clears the mind',
      'Catching up on world trends and long-form writing',
      'Going on drives and catching up with friends',
      'Time with family',
      'Studying long-term investing and hunting for the next multi-baggers',
      'Cricket, badminton, tennis, and the occasional computer game',
      'Networking with people across domains',
      'Sleep — a favourite hobby',
    ],
  },
  {
    heading: 'People & ideas that shaped me',
    items: [
      'My parents and high-school science teachers',
      'My university friend circle — “Gutless SEAS”',
      'The IIT Madras journey and Prof. B. Ravindran',
      'Naval Ravikant — on finance, psychology, and how the world works',
      'Charlie Munger — mental models',
      'Indian mythology — Ramayana, Mahabharata, Chanakya Niti, and the history of Bharat',
    ],
  },
  {
    heading: 'Music',
    intro:
      'Jazz, metal, Sufi, Indian fusion, Indian classical, Gujarati folk, and Bhajan. Cello, violin, and drums are my favourite instruments.',
    items: [
      'Hans Zimmer',
      'A. R. Rahman',
      'Ludovico Einaudi',
      'Arijit Singh',
      'Shankar–Ehsaan–Loy',
      'Amit Trivedi',
      'Papon',
      'Estas Tonne',
      'Krishna Das',
    ],
  },
  {
    heading: 'Films',
    intro: 'Thrillers, documentaries, action, and horror.',
    items: [
      'The Dark Knight Trilogy',
      'Taxi Driver',
      '12 Angry Men',
      'The Godfather Trilogy',
      'Grave of the Fireflies',
      'The Last Samurai',
      'Arrival',
      'Interstellar',
      'Swades',
      'Tumbbad',
      'Gangs of Wasseypur',
      'Anand',
    ],
  },
  {
    heading: 'Reading',
    intro: 'Reading helps me hold my attention span in a cheap-dopamine world. Themes I keep returning to:',
    items: [
      'Human psychology',
      'Personal improvement',
      'Longevity',
      'Finance & investing',
      'Vedanta',
      'Indian mythology',
      'Microeconomics',
    ],
  },
  {
    heading: 'Travelled & lived',
    intro:
      'I love travelling and backpacking, and I prefer the mountains for resetting. Places so far:',
    items: [
      'Rishikesh',
      'Himachal Pradesh',
      'Sikkim',
      'Darjeeling',
      'Jammu & Kashmir',
      'Udaipur',
      'Jaipur',
      'Ranthambore',
      'Mussoorie',
      'Mumbai',
      'Chennai',
      'Ooty',
      'Delhi NCR',
      'Bangalore',
      'Gujarat',
    ],
  },
];
