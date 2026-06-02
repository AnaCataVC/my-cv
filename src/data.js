export const cvData = {
  config: {
    // Primary interface language ("es" or "en"), default is english.
    lang: "en",

    // Page color mode. Options: 
    // "light" (always light), 
    // "dark" (always dark), 
    // "toggle" (shows the button to switch themes)
    themeMode: "dark"
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
      text: "employed @ best company ever"
    },
    email: "hello@example.com",
    location: "Remote, Earth",
    // Social media links. Supported platforms:
    // "LinkedIn", "GitHub", "Instagram", "YouTube", "Twitter", "X", "Facebook", "Twitch", "TikTok", "Medium", "Behance", "Dribbble", "Website", "Portfolio", "Link"
    // Case-insensitive. Unsupported platforms will not be rendered.
    socials: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/",
      },
      {
        platform: "GitHub",
        url: "https://github.com/",
      }
    ],
    // A highlighted hero phrase / summary for the About section (optional)
    aboutSummary: "This is a demo page. Use this section to highlight something importan about yourself.",
    // Detailed description for the About section
    about: "Here is a beautiful CV of a fake person. Scroll down, to the bottom of the page, to see the author, an actual person. In this paragraph you should write about your skills, experience and goals. Keep it concise: not too long, but not too short either."
  },

  experience: [
    {
      company: "Tech Innovations Inc.",
      role: "Frontend Developer",
      period: "2023 - Present",
      description: "Led the migration to a modern frontend stack using React and Tailwind CSS. Improved performance metrics by 40%.",
      tags: ["React", "Tailwind", "TypeScript"]
    },
    {
      company: "Creative Agency",
      role: "Web Designer",
      period: "2021 - 2023",
      description: "Designed and developed highly interactive marketing sites for various clients.",
      tags: ["Figma", "HTML", "CSS", "Vanilla JS"]
    }
  ],

  education: [
    {
      institution: "University of Technology",
      degree: "B.S. in Computer Science",
      period: "2017 - 2021",
      description: "Graduated with honors. Minor in Graphic Design."
    }
  ],

  internships: [
    {
      company: "Tech Startup",
      role: "Frontend Intern",
      period: "Summer 2020",
      description: "Assisted in building UI components using React and styled-components.",
      tags: ["React", "JavaScript"]
    }
  ],

  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
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
    }
  ],

  projects: [
    {
      title: "Portfolio Template",
      description: "A customizable portfolio template built with Vite, Alpine.js, and Tailwind CSS.",
      url: "https://github.com/",
      tags: ["Vite", "Alpine.js", "Tailwind"]
    }
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "React",
    "Alpine.js",
    "Git",
    "Figma"
  ]
};
