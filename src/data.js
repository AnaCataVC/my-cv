export const cvData = {
  config: {
    // Primary interface language ("es" or "en"), default is English.
    lang: "en",

    // Page color mode. Options: 
    // "light" (always light), 
    // "dark" (always dark), 
    // "toggle" (shows the button to switch themes)
    themeMode: "toggle"
  },

  personalInfo: {
    name: "Catalina C",
    title: "Software Developer",

    // Path to your photo. Can be an absolute web URL or relative like "./placeholder-photo.png"
    // Leave it as an empty string ("") if you want to hide the profile photo.
    photoPath: "./placeholder-photo.png",

    status: {
      // Status indicator options:
      // "open-to-work" (green dot - available for full-time employment)
      // "freelancer"   (blue dot - available for freelance projects/consulting)
      // "current-role" (purple dot - currently employed, e.g., "Engineer @ Company")
      // "hidden"       (hides this indicator completely)
      type: "current-role",
      text: "Employed @ Best Company Ever"
    },
    email: "hello@example.com",
    location: "Remote, Earth",
    // Social media and contact links. Supported platforms:
    // "LinkedIn", "Instagram", "YouTube", "Twitter", "X", "Facebook", "Twitch", "TikTok", "Medium"
    // Case-insensitive. Unsupported platforms will not be rendered.
    socials: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/",
      }
    ],
    // Portfolio and work links. Supported platforms:
    // "GitHub", "Behance", "Dribbble", "Website", "Portfolio", "Link"
    // Case-insensitive. Unsupported platforms will not be rendered.
    portfolio: [
      {
        platform: "GitHub",
        url: "https://github.com/",
      }
    ],
    // A highlighted hero phrase / summary for the About section (optional)
    aboutSummary: "This is a demo page. Use this section to highlight something important about yourself.",
    // Detailed description for the About section
    about: "Here is a beautiful CV of a fake person. Scroll down to the bottom of the page to see the author, an actual person. In this paragraph you should write about your skills, experience and goals. Keep it concise: not too long, but not too short either."
  },

  experience: [
    {
      company: "Tech Innovations Inc.",
      role: "Frontend Developer",
      period: "2023 - Present",
      description: "Led the migration of a legacy frontend architecture to a modern stack using React, TypeScript, and Tailwind CSS, improving Lighthouse performance scores by 45%. Established clean coding standards, conducted peer code reviews, and implemented responsive design patterns across all core platforms. Collaborated with UX designers to develop a reusable component library, cutting page build times in half.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Redux", "Webpack"]
    },
    {
      company: "Creative Agency",
      role: "Web Designer",
      period: "2021 - 2023",
      description: "Designed and developed highly interactive marketing sites and e-commerce platforms for national clients. Translated Figma mockups into pixel-perfect, accessible HTML/CSS and vanilla JavaScript. Optimized assets and scripts to ensure high-performance animations and fast load times across mobile and desktop devices.",
      tags: ["Figma", "HTML5", "CSS3", "JavaScript (ES6)", "Vanilla JS"]
    },
    {
      company: "Global Solutions Ltd.",
      role: "Junior Web Developer",
      period: "2019 - 2021",
      description: "Assisted in maintaining corporate websites, developed interactive HTML email newsletters, and optimized CSS layouts for cross-browser compatibility. Worked closely with senior developers to implement UI features and improve site speed by 25%.",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    }
  ],

  education: [
    {
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
      period: "2017 - 2021",
      description: "Graduated Magna Cum Laude. Specialized in Software Engineering. Recipient of the Academic Excellence Scholarship. Active member of the Computer Science Student Association and design workshop tutor."
    }
  ],

  internships: [
    {
      company: "Innovate Labs",
      role: "Frontend Intern",
      period: "Summer 2020",
      description: "Collaborated within an agile team of 5 developers to build and test responsive UI components using React and styled-components. Contributed to documentation and improved unit test coverage by 15% using Jest.",
      tags: ["React", "JavaScript", "Styled Components", "Jest"]
    }
  ],

  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "#"
    },
    {
      title: "Professional Scrum Developer",
      issuer: "Scrum.org",
      date: "2022",
      url: "#"
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Coursera",
      date: "2021",
      url: "#"
    }
  ],

  publications: [
    {
      title: "Modern Web Architectures",
      publisher: "Tech Magazine",
      date: "Jan 2024",
      description: "An overview of how SSG and SPA patterns are merging.",
      url: "#"
    },
    {
      title: "Responsive Typography in Modern Web Design",
      publisher: "Design Weekly",
      date: "Nov 2022",
      description: "Best practices for utilizing fluid type and variable fonts for optimal reading experiences across diverse screen sizes.",
      url: "#"
    }
  ],

  projects: [
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template built with Vite, Alpine.js, and Tailwind CSS.",
      url: "https://github.com/",
      tags: ["Vite", "Alpine.js", "Tailwind"]
    },
    {
      title: "DevFlow - Developer Task Manager",
      description: "A collaborative Kanban-style task management web application built with React, Node.js, and MongoDB. Features real-time updates via Socket.io, drag-and-drop task manipulation, and GitHub OAuth integration.",
      url: "https://github.com/",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"]
    },
    {
      title: "OptiStore E-Commerce Dashboard",
      description: "A high-performance sales analytics dashboard built with Next.js and Chart.js. Integrates with Stripe API to display real-time transaction volume, subscription metrics, and customer churn analysis.",
      url: "https://github.com/",
      tags: ["Next.js", "React", "Chart.js", "Stripe API", "Tailwind CSS"]
    }
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Node.js",
    "Redux",
    "Jest",
    "MongoDB",
    "SQL",
    "Git",
    "Figma",
    "Responsive Design"
  ]
};

