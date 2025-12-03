export const profile = {
  name: 'Kathirdhasan',
  title: 'Full‑Stack Developer',
  location: 'Chennai, India',
  summary:
    ' Java & Python Full-Stack Developer — passionate about building scalable web apps, clean interfaces, and powerful backend systems.',
  links: {
    resume: 'https://drive.google.com/file/d/1T2FP4iATXzz-GA6p0vL64v86urWSwvMr/view?usp=sharing',
    github: 'https://github.com/kathirdhasan007',
    linkedin: 'https://www.linkedin.com/in/kathirdhasan07',
    email: 'kathirdhasan007@gmail.com'
  }
};

export const projects = [
  {
    title: 'QuickServe',
    description: 'Full stack food ordering app with Spring Boot backend and React frontend, secured with JWT authentication.',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT'],
    link: 'https://github.com/kathirdhasan007/QuickeServer',
    role: 'Full Stack Developer',
    highlight: 'Role-based access, admin-only menu management, and robust order pipeline'
  },
  {
    title: 'Movie Booking System',
    description: 'Full stack movie ticket booking platform with Django backend and React frontend, supporting secure payments and seat selection.',
    stack: ['Python', 'Django', 'React', 'Postgres'],
    link: 'https://github.com/kathirdhasan007/Movie_booking_system',
    role: 'Full Stack Developer',
    highlight: 'Interactive seat maps, user authentication, and booking confirmation emails'
  },
  {
    title: 'Train Booking System',
    description: 'Backend system for train ticket booking with Java, focusing on reservation logic and secure authentication.',
    stack: ['Java', 'Spring Boot', 'MySQL'],
    link: 'https://github.com/kathirdhasan007/TrainBookingSystem',
    role: 'Backend Developer',
    highlight: 'PNR generation, seat allocation, and cancellation workflows'
  }
  
];

export const experience = [
  {
    role: 'Freelance Backend Developer',
    company: 'Independent',
    period: '2024 — Present',
    details: [
      'Designed REST APIs with clean contracts, pagination, and robust auth.',
      'Refactored legacy SQL to prepared statements and indexes for 4x query speed.',
      'Built CI checks to enforce style and flaky test detection.'
    ],
    tech: ['Java', 'Spring Boot', 'Python', 'Docker']
  },
  {
    role: 'Open Source Contributor',
    company: 'Various',
    period: '2023 — Present',
    details: [
      'Raised quality PRs: perf improvements, test coverage, and docs.',
      'Implemented modular React components with accessibility in mind.'
    ],
    tech: ['React', 'TypeScript', 'Node.js']
  }
];