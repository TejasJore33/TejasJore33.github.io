/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES IN THIS FILE.
 *  Edit the values below — no JSX changes needed.
 *  Empty strings / empty arrays hide the matching part of the page.
 *  Icons come from https://lucide.dev/icons (import any you like).
 * ─────────────────────────────────────────────────────────────
 */
import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  KeyRound,
  Layout,
  Mail,
  MessageCircle,
  Plug,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, type IconType } from '../components/icons'

/* ---------- Types ---------- */
export type Stat = { value: number; suffix?: string; label: string }
export type Service = { title: string; text: string; icon: IconType }
export type SkillGroup = { title: string; icon: IconType; items: string[] }
export type Job = { role: string; company: string; location: string; period: string; points: string[] }
export type Education = { degree: string; school: string; period: string }
export type Certification = { name: string; issuer: string; year: string }
export type ProjectLink = { label: string; href: string }
export type Project = {
  title: string
  category: string
  blurb: string
  description: string
  tags: string[]
  /** Path under /public (e.g. "/projects/shop.jpg") or full URL. Leave empty for a gradient placeholder. */
  image?: string
  links: ProjectLink[]
}
export type Step = { title: string; text: string }
export type PipelineStage = { label: string; icon: IconType }
export type Feature = { title: string; text: string; icon: IconType }
export type Faq = { q: string; a: string }
export type ContactChannel = { label: string; value: string; href: string; icon: IconType }

const gh = (repo: string) => `https://github.com/TejasJore33/${repo}`

/* ---------- Profile ---------- */
export const profile = {
  name: 'Tejas Jore',
  initials: 'TJ',
  role: 'Full-Stack Developer',
  location: '', // e.g. "Pune, India" — empty hides it
  available: true, // shows the green "Open to opportunities" badge
  headline: 'I build web apps and the APIs behind them.',
  summary:
    'Full-stack JavaScript & TypeScript developer working across React front ends, NestJS / Node.js back ends, databases and third-party integrations.',
  about: [
    "I'm Tejas, a full-stack developer who likes owning a feature from the database schema to the last pixel. Most of my work is in JavaScript and TypeScript — React on the front end, NestJS and Node.js on the back end.",
    "Lately I've been building the backend for a matrimonial platform: authentication with JWT and Google OAuth, real-time chat over Socket.IO, payments with Razorpay, SMS via Twilio, media uploads and push notifications — all on NestJS with Prisma.",
  ],
  email: '', // add your email to show the Email contact tile + button
  whatsapp: '', // country code + number, digits only (e.g. "919876543210")
  githubUsername: 'TejasJore33',
  linkedinUrl: '', // e.g. "https://www.linkedin.com/in/your-profile/"
  resumeUrl: '', // optional: e.g. "/resume.pdf" (put the file in /public)
}

/** Shown in the hero "code editor" card. */
export const codeCard = {
  fileName: 'about-me.ts',
  stack: ['TypeScript', 'React', 'NestJS', 'Prisma'],
  comment: 'shipping features end to end',
}

/* ---------- Hero ---------- */
export const heroStats: Stat[] = [
  { value: 9, label: 'Public repositories' },
  { value: 4, suffix: '+', label: 'Years on GitHub' },
  { value: 8, suffix: '+', label: 'Third-party integrations' },
  { value: 2, label: 'Live deployments' },
]

export const techTicker = [
  'JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'NestJS', 'Express', 'Prisma',
  'MongoDB', 'Socket.IO', 'JWT', 'Google OAuth', 'Razorpay', 'Twilio', 'Cloudinary',
  'Firebase', 'Vercel', 'Git',
]

/* ---------- About ---------- */
export const services: Service[] = [
  { title: 'Web Apps', text: 'Responsive React front ends with routing, state and clean UI.', icon: Layout },
  { title: 'APIs & Backend', text: 'Typed NestJS / Node.js APIs with Prisma, validation and auth.', icon: Server },
  { title: 'Real-time & Integrations', text: 'Chat over WebSockets, payments, SMS, email, media and push.', icon: Plug },
  { title: 'Deploy', text: 'Shipping to Vercel and GitHub Pages with automated builds.', icon: Rocket },
]

/* ---------- Skills ---------- */
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: Code2, items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { title: 'Frontend', icon: Layout, items: ['React', 'React Router', 'Vite', 'Bootstrap', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Socket.IO'] },
  { title: 'Data', icon: Database, items: ['Prisma', 'MongoDB', 'SQL'] },
  { title: 'Auth & Security', icon: KeyRound, items: ['JWT', 'Passport', 'Google OAuth', 'bcrypt'] },
  { title: 'Integrations', icon: Plug, items: ['Razorpay', 'Twilio', 'Cloudinary', 'Firebase', 'AWS SDK', 'Nodemailer'] },
  { title: 'Deploy', icon: Cloud, items: ['Vercel', 'GitHub Pages', 'GitHub Actions'] },
  { title: 'Tools', icon: Terminal, items: ['Git', 'GitHub', 'npm', 'VS Code', 'Postman'] },
]

/* ---------- Experience (section hides itself when all three lists are empty) ---------- */
export const experience: Job[] = []
export const education: Education[] = []
export const certifications: Certification[] = []

export const hasExperience = experience.length + education.length + certifications.length > 0

/* ---------- Navigation ---------- */
export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  ...(hasExperience ? [{ id: 'experience', label: 'Experience' }] : []),
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

/* ---------- Projects ---------- */
export const projects: Project[] = [
  {
    title: 'Matrimonial Platform API',
    category: 'Backend',
    blurb: 'Full backend for a matchmaking platform.',
    description:
      'NestJS + Prisma API with JWT and Google OAuth login, real-time chat over Socket.IO, Razorpay payments, Twilio SMS, Cloudinary/AWS media uploads, Firebase push notifications, email and QR codes.',
    tags: ['TypeScript', 'NestJS', 'Prisma', 'Socket.IO', 'Razorpay'],
    links: [{ label: 'GitHub', href: gh('matrimonial-backend') }],
  },
  {
    title: 'Aalandi Survey',
    category: 'Web app',
    blurb: 'Survey web app, live on Vercel.',
    description: 'A multi-page React survey application with client-side routing, built with Create React App and deployed on Vercel.',
    tags: ['React', 'React Router', 'JavaScript', 'CSS'],
    links: [
      { label: 'Live site', href: 'https://aalandi-survey.vercel.app' },
      { label: 'GitHub', href: gh('aalandi-survey') },
    ],
  },
  {
    title: 'React Projects',
    category: 'Frontend',
    blurb: 'React apps and UI experiments.',
    description: 'A collection of React components and small apps, deployed on Vercel.',
    tags: ['React', 'JavaScript', 'CSS'],
    links: [
      { label: 'Live site', href: 'https://react-gamma-three-61.vercel.app' },
      { label: 'GitHub', href: gh('React') },
    ],
  },
  {
    title: 'MEAN Modern',
    category: 'Full stack',
    blurb: 'Working with the MEAN stack.',
    description: 'A MongoDB, Express, Angular and Node.js project exploring a modern MEAN-stack setup.',
    tags: ['MongoDB', 'Express', 'Node.js', 'JavaScript'],
    links: [{ label: 'GitHub', href: gh('MEAN-MODERN') }],
  },
  {
    title: 'Frontend Projects',
    category: 'Frontend',
    blurb: 'Vanilla HTML, CSS and JavaScript builds.',
    description: 'Small front-end projects built without frameworks to practise layout, DOM scripting and styling.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'GitHub', href: gh('Frontend-Projects') }],
  },
  {
    title: 'JavaScript Practice',
    category: 'Learning',
    blurb: 'Core JavaScript, exercise by exercise.',
    description: 'A large set of JavaScript exercises and mini-programs covering the language fundamentals in depth.',
    tags: ['JavaScript', 'HTML'],
    links: [{ label: 'GitHub', href: gh('javascript') }],
  },
]

/* ---------- Process ---------- */
export const processSteps: Step[] = [
  { title: 'Understand', text: 'Clarify the goal, the users and the constraints before writing code.' },
  { title: 'Model', text: 'Design the data model and API contracts first.' },
  { title: 'Build', text: 'Small, typed, reviewable steps — back end and front end together.' },
  { title: 'Ship', text: 'Automated builds and deploys so releases are routine.' },
  { title: 'Improve', text: 'Fix, refactor and add features based on real usage.' },
]

/* ---------- Deployment & DevOps ---------- */
export const pipeline: PipelineStage[] = [
  { label: 'Code', icon: Code2 },
  { label: 'GitHub', icon: GitBranch },
  { label: 'Build (CI)', icon: Zap },
  { label: 'Vercel / Pages', icon: Cloud },
  { label: 'Live', icon: Globe },
]

export const devopsFeatures: Feature[] = [
  { title: 'Automated deploys', text: 'Push to main and the site builds and deploys itself — this portfolio included.', icon: GitBranch },
  { title: 'Secure auth', text: 'Hashed passwords, JWT sessions and OAuth sign-in in my backends.', icon: ShieldCheck },
  { title: 'Fast hosting', text: 'Static front ends served from global CDNs on Vercel and GitHub Pages.', icon: Globe },
]

/* ---------- Why me ---------- */
export const whyMe = {
  headline: 'Front end, back end, and the glue in between.',
  text: 'I work across the whole stack, so features ship end to end — from the Prisma schema and NestJS endpoints to the React screen that uses them.',
  stats: [] as Stat[], // optional: add numbers here to show counters
  points: [
    { title: 'End-to-end ownership', text: 'Database, API, UI and deploy — one person, no hand-offs.' },
    { title: 'Typed, structured code', text: 'TypeScript and NestJS modules keep large backends maintainable.' },
    { title: 'Real-time features', text: 'Live chat and updates with Socket.IO.' },
    { title: 'Real-world integrations', text: 'Payments, SMS, email, media storage and push notifications.' },
    { title: 'Always learning', text: 'Steadily building and publishing projects on GitHub since 2022.' },
  ],
}

/* ---------- FAQ ---------- */
export const faqs: Faq[] = [
  {
    q: 'What do you work with?',
    a: 'Mainly JavaScript and TypeScript: React on the front end, NestJS and Node.js on the back end, with Prisma or MongoDB for data.',
  },
  {
    q: 'What are you building right now?',
    a: 'The backend for a matrimonial platform — auth, real-time chat, payments, SMS and notifications on NestJS + Prisma.',
  },
  {
    q: 'Are you open to new opportunities?',
    a: 'Yes — I’m open to developer roles and interesting projects. Reach out using the links below.',
  },
  {
    q: 'Where can I see your code?',
    a: 'Everything public is on my GitHub — the links on each project card go straight to the repositories.',
  },
]

/* ---------- Contact (entries with an empty link are hidden) ---------- */
export const contactChannels: ContactChannel[] = [
  { label: 'Email', value: profile.email, href: profile.email ? `mailto:${profile.email}` : '', icon: Mail },
  { label: 'WhatsApp', value: 'Chat with me', href: profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : '', icon: MessageCircle },
  { label: 'LinkedIn', value: 'Connect', href: profile.linkedinUrl, icon: LinkedinIcon },
  { label: 'GitHub', value: `@${profile.githubUsername}`, href: `https://github.com/${profile.githubUsername}`, icon: GithubIcon },
].filter((c) => c.href)

/* ---------- Section numbering (computed, so hidden sections leave no gaps) ---------- */
const sectionOrder = [
  'about', 'skills', ...(hasExperience ? ['experience'] : []), 'projects', 'github',
  'process', 'devops', 'why-me', 'faq', 'contact',
]
export const sectionNumber = (id: string) => String(sectionOrder.indexOf(id) + 1).padStart(2, '0')
