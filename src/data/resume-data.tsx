import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Hunter Macias",
  initials: "HM",
  location: "Seattle, Washington",
  locationLink: "https://www.google.com/maps/place/Seattle,+WA8",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 5 years of experience in developing full-stack applications",
  avatarUrl: "https://avatars.githubusercontent.com/u/47125492?v=4",
  personalWebsiteUrl: "https://huntercodes.netlify.app",
  contact: {
    email: "huntermacias20@gmail.com",
    tel: "559-458-8379",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/huntermacias",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/huntermacias/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/huntermacias_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of San Francisco",
      degree: "Computer Science",
      start: "2018",
      end: "2023 (completed coursework towards degree)",
    },
  ],
  work: [
    {
      company: "TheCoderSchool",
      link: "https://www.thecoderschool.com/",
      badges: ["Remote", "Part-time"],
      title: "Lead Instructor",
      logo: ParabolLogo,
      start: "2020",
      end: "Present",
      description:
        [
          "In my role as a Coding Instructor, I am responsible for delivering personalized, one-on-one coding instruction to a diverse group of students. My teaching encompasses a wide array of programming languages and technologies, including Python, HTML, CSS, JavaScript, and React, ensuring that I am well-versed in the skills most relevant to today's tech landscape. I take pride in developing flexible and dynamic lesson plans, which I craft myself without a formal curriculum. This approach allows me to tailor each session to the individual student's skill level, learning style, and interests, fostering engagement and relevance. My focus extends beyond mere language proficiency; I emphasize the development of critical thinking and problem-solving skills that are essential in the tech industry. As a mentor, I guide my students through their coding journey, inspiring a passion for technology and a commitment to continuous learning and improvement."
        ],
    },
    {
      company: "MissionBit",
      link: "https://missionbit.org/",
      badges: ["Remote", "Part-time"],
      title: "Coding Instructor + Curriculum Developer",
      logo: ParabolLogo,
      start: "2020",
      end: "2022",
      description:
        [
          'Spearheaded the development and implementation of an innovative Python programming curriculum, successfully integrating comprehensive theoretical concepts with practical applications tailored for diverse learning needs.',
          'Developed and implemented a Python programming curriculum for 100+ students, successfully integrating comprehensive theoretical concepts with practical applications tailored for diverse learning needs.',
          'Collaborated with educational specialists to continually evolve teaching methodologies, integrating industry-relevant content and cutting-edge pedagogical techniques.',
          'Conducted extensive courses in Web Design and Unity, showcasing a versatile skill set in multiple programming domains and a deep understanding of varied technologies and frameworks.'
        ],
    },
    {
      company: "Candor",
      link: "https://candor.co/",
      badges: ["Remote"],
      title: "Web Developer → Internship",
      logo: ClevertechLogo,
      start: "2022",
      end: "2022",
      description:
        ['Took figma designs and turned them into a fully functional website using React, Next.js, and Tailwind CSS.'],
    },
    {
      company: "Firebird",
      link: "https://www.leadbird.io",
      badges: ['Contracted Developer', 'Remote'],
      title: "Full Stack Developer → Contracted Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "Developed a comprehensive full-stack application leveraging React, Next.js, and Tailwind CSS, focused on parsing LinkedIn data to identify and generate high-quality leads for the sales team. Worked in close collaboration with the business team to design and deliver a product strategically tailored to enhance lead generation, ensuring alignment with client needs and business objectives.",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Python",
    "WebRTC",
  ],
  projects: [
    {
      title: "Notionary",
      techStack: ["Side Project", "Stripe", "SaaS", "Drizzle ORM", "Supabase", "Sockets"],
      description:
        "Developed a Notion inspired web application using Next.js, Supabase, and Stripe. The platform offers features such as user authentication, subscription payments, and real-time collaboration, fostering an engaging and interactive community experience.",
      logo: MonitoLogo,
      link: {
        label: "https://notionary.vercel.app/",
        href: "https://notionary.vercel.app/",
      },
    },
    {
      title: "Video-Sharing Social Network",
      techStack: ["Side Project", "TypeScript", "Next.js", "Sanity Management"],
      description:
        "Developed an interactive web application using Next.js and Sanity.io, designed to create a shared space for users to connect with friends and family through video content. The platform offers features such as video sharing, commenting, liking, and user search, fostering an engaging and interactive community experience.",
      logo: MonitoLogo,
      link: {
        label: "shareme.dev",
        href: "https://symphonious-kitten-397f94.netlify.app/",
      },
    },
    {
      title: "Similarity Scout",
      techStack: ["Side Project", "Typescript", "Animations", "Radix UI"],
      description:
        "API Service that compares the similarity of two pieces of text",
      logo: JarockiMeLogo,
      link: {
        label: "SimilarityScout",
        href: "https://similarityscout.netlify.app/",
      },
    },
    {
      "title": "Python Documentation Portal",
      "techStack": ["Web Development", "Typescript", "Documentation"],
      "description": "Developed and taught comprehensive courses in Unity3D/C#, web design (HTML, CSS, JavaScript), and initiated MissionBit's first Python curriculum, showcasing versatility and technical expertise. Managed classroom dynamics and integrated industry professionals into the educational process, enhancing student exposure to real-world tech environments. Guided students through the end-to-end project cycle, culminating in their presentation at MissionBit's Demo Day, fostering skills in project management and public speaking. Demonstrated adaptability by transitioning between diverse teaching subjects and consistently receiving positive feedback for course content and instructional methods.",
      "logo": "PyDocsLogo", // Replace with actual logo variable or path
      "link": {
        "label": "Explore Pygame Docs",
        "href": "https://pydocs-aoc.vercel.app"
      }
    },
    {
      title: "Comprehensive Job Search Mobile App",
      techStack: ["Side Project", "React Native", "RapidAPI"],
      description:
        "A powerful job search tool leveraging RapidAPI for comprehensive job listings. Features modern UX/UI design and robust search functionality to match users with their ideal job roles.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://expo.dev/@huntermacias/job-search-app?serviceType=classic&distribution=expo-go",
      },
    },
    {
      title: "NFT Marketplace React Native App",
      techStack: ["Side Project", "React Native", "TailwindCSS"],
      description: "Created an NFT Marketplace mobile app using React Native. Integrated modern UI/UX principles with efficient backend handling for a seamless digital asset trading experience.",
      logo: YearProgressLogo,
      link: {
        label: "https://pro-nef-x.netlify.app/",
        href: "https://pro-nef-x.netlify.app/",
      },
    },
    {
      title: "Web3 Crypto Lottery App",
      techStack: [
        "Side Project",
        "Smart Contracts",
        "Solidity",
        "Blockchain",
        "Next.js",
      ],
      description:
        "Designed a cryptocurrency lottery application leveraging Next.js and Solidity smart contracts. Featured Metamask integration for secure blockchain transactions.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://lottery-draw.netlify.app/",
      },
    },
    {
      title: "CureChat",
      techStack: [
        "Side Project",
        "React.js",
        "Twilio",
        "Stream",
        "SSA",
      ],
      description: "With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete messages, specialized commands, and much more",
      logo: ConsultlyLogo,
      link: {
        label: "https://curechat.netlify.app/",
        href: "https://curechat.netlify.app/",
      },
    },
    {
      title: "Blockchain-Powered Crowdfunding Platform",
      techStack: [
        "Side Project",
        "Smart Contracts",
        "Solidity",
        "Web3",
      
      ],
      description:
        "A blockchain-based crowdfunding platform, featuring Metamask integration, smart contract interactions, and Ethereum transactions. It's a comprehensive demonstration of creating and participating in blockchain-enabled campaigns.",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://cool-cactus-84bc7e.netlify.app/",
      },
    },
    {
      title: "NFT Marketplace: OpenSea",
      techStack: ["Side Project", "Next.js", "Web3"],
      description:
        "An NFT marketplace mimicking OpenSea, showcasing a variety of blockchain use cases. It stands out with features like multi-test support and comprehensive NFT trading functionalities.",
      logo: MobileVikingsLogo,
      link: {
        label: "https://opensea-hm.netlify.app",
        href: "https://opensea-hm.netlify.app",
      },
    },
    {
      title: "Kobe Bryant's Legacy: A Data Visualization",
      techStack: ["Side Project", "D3.js", "Data Visualization"],
      description:
        "Interactive Data Visualization with D3.js",
      logo: Howdy,
      link: {
        label: "https://huntermacias.github.io/data-vis-basketball/index.html",
        href: "https://huntermacias.github.io/data-vis-basketball/index.html",
      },
    },
    {
      title: "AI-Powered ChatGPT Messaging Platform",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "ChatGPT Messenger revolutionizes communication with AI-driven conversations, leveraging NLP and ML for personalized user interactions. It's a seamless blend of technology and user experience",
      logo: TastyCloudLogo,
      link: {
        label: "https://chatgpt-messenger-three.vercel.app/",
        href: "https://chatgpt-messenger-three.vercel.app/",
      },
    },
    {
      title: "Las Vegas Raiders Fan Blog",
      techStack: ["Side Project", "Sanity", "React.js"],
      description:
        "The ultimate resource for Las Vegas Raiders fans, featuring game recaps, player profiles, draft predictions, and the latest updates. It's a one-stop destination for all things Raiders.",
      logo: AmbitLogo,
      link: {
        label: "https://www.raidersrundown.com",
        href: "https://www.raidersrundown.com",
      },
    },
    {
      title: "3D Interactive Developer Portfolio",
      techStack: ["Side Project", "Three.js", "Framer Motion"],
      description:
        "Personal Portfolio Creation with Three.js & Framer Motion",
      logo: BimLogo,
      link: {
        label: "https://huntercodes.netlify.app/",
        href: "https://huntercodes.netlify.app/",
      },
    },
    {
      title: "Evently: Event Management Mobile App",
      techStack: ["Side Project", "TailwindCSS", "Next.js", "Server Actions"],
      description:
        "Evently is a comprehensive event management app, featuring a robust backend and a modern UI/UX design. It's a one-stop solution for event organizers and attendees alike.",
      logo: CDGOLogo,
      link: {
        label: "https://meetix.vercel.app/",
        href: "https://meetix.vercel.app/",
      },
    },
  ],
} as const;
