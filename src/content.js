/* ============================================================
   PORTFOLIO CONTENT: edit this one file to change the site.
   ============================================================ */
import goldefiImg from './assets/work/goldefi.jpg'
import mbtiImg from './assets/work/mbti.jpg'
import crtImg from './assets/work/crt.jpg'
import riceImg from './assets/work/rice.jpg'

export const content = {
  person: {
    name: 'Dennis Jojo Kuriakose',
    nameLines: ['Dennis Jojo', 'Kuriakose'], // how the hero splits the name
    role: 'Data Science',
    tagline: 'Making data make sense.',
    location: 'Melbourne, Australia',
    available: true,
  },

  links: {
    email: 'dennisjojok@gmail.com',
    github: 'https://github.com/atmozki',
    linkedin: 'https://www.linkedin.com/in/dennisjk/',
    resume: './resume.html', // the PDF-style resume page (print it for an actual PDF)
    // display URL shown on the resume sheet; update alongside VITE_SITE_URL in .env
    site: 'dennisjojok.com',
  },

  heroIntro:
    'Data science graduate from Deakin University in Melbourne, with a computer ' +
    'science engineering degree and a habit of taking things apart to see how ' +
    'they work. Looking for my first data role.',

  /* skills strip that scrolls between hero and about */
  marquee: [
    'Machine Learning',
    'Statistical Modelling',
    'Python',
    'SQL',
    'Data Visualisation',
    'Deep Learning',
    'Linux',
  ],

  about: {
    /* the big serif lead sentence */
    lead:
      'I like the whole journey of data: from a messy export, to a model, to a chart that makes someone go “oh.”',
    paragraphs: [
      'I just finished my Master of Data Science at Deakin University in Melbourne, ' +
        'after a B.Tech in Computer Science Engineering (with a minor in Robotics & ' +
        'Automation) back home in Kerala, India. The mix means I can write the code, ' +
        'reason about the statistics, and explain the result in plain language.',
      'Along the way I built a machine-learning web app that guesses your ' +
        'MBTI type from text, and co-authored a research paper during my ' +
        'undergrad. I worked retail and warehouse jobs through my masters ' +
        'and still do, so I know how to show up and do the unglamorous parts well.',
    ],
    /* hairline definition rows beside the text */
    facts: [
      { label: 'Location', value: 'Melbourne, AU' },
      { label: 'Education', value: 'M.DataSc, Deakin University' },
      { label: 'Languages', value: 'English · Hindi · Malayalam' },
      { label: 'Status', value: 'Open to data roles' },
    ],
    skills: [
      { group: 'Data & ML', items: ['Python', 'R', 'SQL', 'pandas', 'scikit-learn', 'Statistical modelling'] },
      { group: 'Engineering', items: ['C / C++', 'React', 'HTML & CSS', 'Git & GitHub', 'AWS (foundational)'] },
      { group: 'Environment', items: ['Linux', 'Shell scripting', 'Jupyter', 'Streamlit'] },
    ],
  },

  /* selected work: rows link to `href`.
     Order matters: strongest data-science signal first. */
  works: [
    {
      title: 'MBTI Personality Predictor',
      kind: 'Machine learning',
      year: '2023',
      desc: 'Streamlit web app that predicts your MBTI personality type from free text, at ~70% accuracy.',
      tags: ['Python', 'ML', 'Streamlit'],
      href: 'https://github.com/atmozki/Personality-Predictor',
      cta: 'View the code',
      img: mbtiImg,
    },
    {
      title: 'GoldeFi: Unified Gold Protocol',
      kind: 'Published research',
      year: '2023',
      desc: 'Co-authored paper on a unified gold-backed DeFi protocol, published in IRJMETS.',
      tags: ['Research', 'Blockchain', 'Co-author'],
      href: 'https://www.doi.org/10.56726/IRJMETS42226',
      cta: 'Read the paper',
      img: goldefiImg,
    },
    {
      title: 'CRT Terminal Portfolio',
      kind: 'Web experiment',
      year: '2023',
      desc: 'A portfolio concept styled as a retro CRT terminal, scanlines and phosphor glow included.',
      tags: ['JavaScript', 'CSS', 'Retro UI'],
      href: 'https://github.com/atmozki/CRT-terminal-portfolio',
      cta: 'View the code',
      img: crtImg,
    },
    {
      title: 'bspwm Rice & Dotfiles',
      kind: 'Linux craft',
      year: '2022–23',
      desc: 'My Linux desktop, configured down to the pixel with bspwm, polybar and picom.',
      tags: ['Linux', 'Shell', 'bspwm'],
      href: 'https://github.com/atmozki/bspwmrice',
      cta: 'View the configs',
      img: riceImg,
    },
  ],

  education: [
    {
      degree: 'Master of Data Science',
      school: 'Deakin University',
      place: 'Melbourne, Australia',
      period: '2024–2026',
    },
    {
      degree: 'B.Tech, Computer Science & Engineering',
      school: 'Saintgits College of Engineering, APJ Abdul Kalam Technological University',
      place: 'Kerala, India',
      period: '2019–2023',
      note: 'Minor in Robotics & Automation · First Class',
    },
  ],

  certifications: [
    { name: 'Fundamentals of Deep Learning', org: 'NVIDIA Deep Learning Institute', year: '2021' },
    { name: 'AWS Foundational & Architecting', org: 'Ethnus', year: '2023' },
    { name: 'Problem Solving Through Programming in C', org: 'IIT Kharagpur (NPTEL)', year: '2021' },
    { name: 'IELTS, overall band 8.0', org: 'British Council', year: '2023' },
  ],

  contact: {
    heading: 'Let’s make data make sense.',
    blurb:
      'I’m looking for graduate data science and analyst roles, and I’m always up for talking shop. My inbox is open.',
  },

  /* ---- resume page (resume.html) ---- */
  resume: {
    summary:
      'Data science graduate (Deakin University, 2026) with a computer science ' +
      'engineering degree, hands-on machine learning projects in Python, and a ' +
      'co-authored research paper. Seeking a graduate data science or data ' +
      'analyst role in Melbourne.',
    experience: [
      {
        role: 'Team Member, Fresh Convenience',
        org: 'Woolworths',
        place: 'Melbourne',
        period: '2025–present',
        points: [
          'Stock and customer service duties in a high-volume supermarket.',
        ],
      },
      {
        role: 'Retail & Warehouse Roles',
        org: 'Various employers',
        place: 'Melbourne',
        period: '2024–2025',
        points: [
          'Retail associate, production assistant and crew roles held while completing my masters.',
        ],
      },
    ],
    languages: ['English (fluent)', 'Hindi (fluent)', 'Malayalam (fluent)'],
  },
}
