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
  /** Code lives in a private repository (shows a "Private code" label). */
  private?: boolean
  /** Your role when it was a team project, e.g. "Contributor". */
  role?: string
}
export type MiniProject = { title: string; text: string; href?: string }
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
  /** Rotating words in the hero headline */
  roles: ['multi-tenant SaaS', 'marketplaces', 'HR & payroll platforms', 'real-time apps'],
  location: '', // e.g. "Pune, India" — empty hides it
  available: true, // shows the green "Open to opportunities" badge
  headline: 'I build web apps and the APIs behind them.',
  summary:
    'Full-stack developer building multi-tenant SaaS, marketplaces and mobile-ready products with TypeScript, React, Node.js, NestJS, PostgreSQL and .NET.',
  about: [
    "I'm Tejas, a full-stack developer who likes owning a product from the database schema to the last pixel. Most of my work is in TypeScript — React on the front end, Node.js / Express / NestJS on the back end, PostgreSQL with Prisma for data — plus C# / .NET where it fits.",
    "I've built matrimonial, ride-pooling, food, tutoring and vendor marketplaces, an engineering-services platform with quotations and billing, and I contribute to an enterprise multi-tenant HRMS. I care about clean architecture, real-time features, payments and shipping things people actually use.",
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
  stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', '.NET'],
  comment: 'shipping features end to end',
}

/* ---------- Hero ---------- */
export const heroStats: Stat[] = [
  { value: 30, suffix: '+', label: 'Repositories built' },
  { value: 4, suffix: '+', label: 'Years on GitHub' },
  { value: 15, suffix: '+', label: 'Products & client sites' },
  { value: 10, suffix: '+', label: 'Integrations shipped' },
]

export const techTicker = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'NestJS', 'Prisma', 'PostgreSQL',
  'Redis', 'BullMQ', 'Socket.IO', 'C# / .NET', 'MAUI', 'Firebase', 'Supabase', 'Docker',
  'Razorpay', 'Google Maps', 'Tailwind CSS', 'Capacitor',
]

/* ---------- About ---------- */
export const services: Service[] = [
  { title: 'Web Apps', text: 'Responsive React front ends with routing, state and clean UI.', icon: Layout },
  { title: 'APIs & Backend', text: 'Multi-tenant Node.js, NestJS and .NET APIs with PostgreSQL, Redis and queues.', icon: Server },
  { title: 'Real-time & Integrations', text: 'Chat over WebSockets, payments, SMS, email, media and push.', icon: Plug },
  { title: 'Mobile & Deploy', text: 'Capacitor and .NET MAUI apps; Docker, CI/CD and cloud deploys.', icon: Rocket },
]

/* ---------- Skills ---------- */
export const skillGroups: SkillGroup[] = [
  { title: 'Languages', icon: Code2, items: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frontend', icon: Layout, items: ['React', 'Next.js', 'TanStack Query', 'React Hook Form', 'Tailwind CSS', 'Framer Motion'] },
  { title: 'Backend', icon: Server, items: ['Node.js', 'Express', 'NestJS', 'ASP.NET Core', 'Socket.IO', 'REST / OpenAPI'] },
  { title: 'Data', icon: Database, items: ['PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'MongoDB', 'Supabase', 'Firestore'] },
  { title: 'Auth & Security', icon: KeyRound, items: ['JWT', 'OAuth / SSO', 'Argon2 / bcrypt', 'RBAC', 'Rate limiting', 'Helmet'] },
  { title: 'Integrations', icon: Plug, items: ['Razorpay', 'Twilio', 'Google Maps', 'AWS S3', 'Cloudinary', 'Firebase', 'Google Sheets'] },
  { title: 'Mobile', icon: Zap, items: ['Capacitor', '.NET MAUI', 'React Native / Expo'] },
  { title: 'DevOps & Tools', icon: Cloud, items: ['Docker', 'GitHub Actions', 'Vercel', 'Nginx', 'Git', 'Postman'] },
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
    title: 'PeoplePilot OS',
    category: 'Enterprise SaaS · HRMS',
    role: 'Contributor',
    blurb: 'Multi-tenant HR, payroll and compliance platform.',
    description:
      'Enterprise-grade HRMS covering the full employee journey — recruitment, onboarding, attendance, leave, payroll with Indian statutory compliance (PF, ESI, PT, TDS), performance and analytics — with a database per tenant, webhooks, SSO and an AI HR assistant.',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Multi-tenant'],
    image: '/projects/peoplepilot.jpg',
    links: [{ label: 'Live site', href: 'https://peoplepilotos.com/' }],
    private: true,
  },
  {
    title: 'Mangalam Shadi',
    category: 'Matrimonial platform',
    blurb: 'Matchmaking web + Android app with chat and payments.',
    description:
      'Responsive, SEO-friendly matrimonial platform with advanced matching, secure real-time chat, premium plans via Razorpay and an Android build with Capacitor. React + TanStack Query front end, Express / Socket.IO / Firebase back end, plus a NestJS + Prisma API.',
    tags: ['React', 'Express', 'Socket.IO', 'Firebase', 'Razorpay', 'Capacitor'],
    links: [{ label: 'API code', href: gh('matrimonial-backend') }],
    private: true,
  },
  {
    title: 'AVIS Engineering & Consultancy',
    category: 'Client platform',
    blurb: 'NDT services site with quotations, billing and documents.',
    description:
      'React + TypeScript platform for an NDT (non-destructive testing) consultancy: service pages, quotation management, a billing dashboard and PDF document generation, backed by Firebase, Razorpay and Google Sheets.',
    tags: ['React', 'TypeScript', 'Firebase', 'React-PDF', 'Razorpay', 'Google Sheets'],
    links: [{ label: 'Live site', href: 'https://avisengineering.com/' }],
    private: true,
  },
  {
    title: 'Ratibz',
    category: 'Marketplace · Mobile',
    blurb: 'Daily-subscription & local delivery marketplace.',
    description:
      'Clean-architecture .NET solution (API, Domain, Application, Infrastructure) with an admin web app and .NET MAUI customer and partner apps. Vendors run daily subscriptions and one-time orders; customers discover nearby vendors within 10 km; delivery staff get role-based workflows.',
    tags: ['C#', 'ASP.NET Core', '.NET MAUI', 'Clean Architecture', 'Geo search'],
    links: [],
    private: true,
  },
  {
    title: 'VetCare 360',
    category: 'Healthcare SaaS',
    blurb: 'Multi-tenant platform for veterinary clinics.',
    description:
      'One secure multi-tenant API for clinics, veterinarians and a super-admin console, with doctor and pet-owner mobile apps planned. Express 5, Prisma + PostgreSQL, Redis + BullMQ queues, Socket.IO, S3 storage and a React 19 + Tailwind v4 web app, all in Docker.',
    tags: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'BullMQ', 'Docker'],
    links: [],
    private: true,
  },
  {
    title: 'SastaMastaRide',
    category: 'Mobility · MVP',
    blurb: 'Affordable two-wheeler ride-pooling app.',
    description:
      'Ride-pooling MVP connecting riders and passengers for shared bike, scooter and car rides — Google Maps routing, Razorpay payments and push notifications, with a React client and an Express API.',
    tags: ['React', 'Express', 'Google Maps', 'Razorpay', 'Push notifications'],
    links: [],
    private: true,
  },
  {
    title: 'TutorMarket',
    category: 'Education marketplace',
    blurb: 'Find and compare local tutors and coaching institutes.',
    description:
      'Students and parents filter tutors by subject, class, exam, fees, format, language and distance; providers receive consent-based enquiries. TypeScript monorepo with React, TanStack Query, Leaflet maps, Express, Prisma and Zod / OpenAPI.',
    tags: ['TypeScript', 'React', 'Leaflet', 'Prisma', 'OpenAPI'],
    links: [],
    private: true,
  },
  {
    title: 'Mealora',
    category: 'Food marketplace',
    blurb: 'Home cooks and cloud kitchens, with meal subscriptions.',
    description:
      'Customers order single meals or subscribe to lunch and dinner plans; kitchens manage menus, capacity and meal windows. TypeScript monorepo with an Express + Prisma + PostgreSQL API, S3 image storage and structured logging.',
    tags: ['TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'AWS S3'],
    links: [],
    private: true,
  },
  {
    title: 'GlowNest',
    category: 'Booking & management',
    blurb: 'Parlour booking and management app.',
    description:
      'Salon/parlour app with service catalogue, stylist selection and real-time slot booking for customers, plus a management side with analytics charts. React, Firebase, Framer Motion and Recharts.',
    tags: ['React', 'Firebase', 'Framer Motion', 'Recharts'],
    image: '/projects/glownest.jpg',
    links: [{ label: 'Live site', href: 'https://parour.vercel.app/' }],
    private: true,
  },
]

/** Smaller projects shown as a compact list under the main grid. */
export const moreProjects: MiniProject[] = [
  { title: 'Forever', text: 'Matrimonial platform on Next.js + Supabase (Postgres RLS, realtime, storage).' },
  { title: 'SmartVendorHub', text: 'Vendor ↔ shopkeeper ordering, price comparison and delivery tracking (React, Firebase).' },
  { title: 'Pintu', text: 'Pincode-to-pincode courier booking app — contributor (React, Firebase).' },
  { title: 'Fashion store', text: 'Storefront with WhatsApp ordering (React, Firebase).', href: 'https://storeq-zeta.vercel.app/' },
  { title: 'Aalandi Survey', text: 'Survey app with admin and user logins (React).', href: 'https://aalandi-survey.vercel.app' },
  { title: 'Image to Base64', text: 'Drag-and-drop image encoder with dark mode (React).', href: 'https://react-gamma-three-61.vercel.app' },
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
    a: 'Mostly TypeScript: React / Next.js on the front end, Node.js, Express and NestJS on the back end, PostgreSQL + Prisma and Redis for data — and C# / .NET with MAUI for some products.',
  },
  {
    q: 'What are you building right now?',
    a: 'VetCare 360 (a multi-tenant veterinary platform), Ratibz (a .NET subscription marketplace with MAUI apps), and contributions to PeoplePilot OS, an enterprise HRMS.',
  },
  {
    q: 'Are you open to new opportunities?',
    a: 'Yes — I’m open to developer roles and interesting projects. Reach out using the links below.',
  },
  {
    q: 'Where can I see your code?',
    a: 'Public projects are on my GitHub. Most client and product work lives in private repositories — happy to walk through the code or architecture on a call.',
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
