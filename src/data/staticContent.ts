export const SITE = {
  name: 'Formula Student Ruhuna',
  shortName: 'FSR',
  parent: 'Marvel Crew',
  websiteBy: 'Computer Engineering Society (ComES)',
  websiteByShort: 'ComES',
  comesUrl: 'https://comesuor.lk',
  motto: 'Engineering defiance',
  subMotto: 'Design. Build. Innovate. Race.',
  email: 'contact.formulastudent.ruhuna@gmail.com',
  address:
    'Faculty of Engineering, University of Ruhuna, Hapugala, Galle, Sri Lanka',
  recruitmentPortalUrl: 'https://fsr-recruitment.netlify.app',
  socials: {
    instagram: 'https://instagram.com/fs.ruhuna',
    facebook: 'https://facebook.com/Formula-Student-Ruhuna',
    linkedin: 'https://linkedin.com/company/formula-student-ruhuna',
  },
};

export const ACHIEVEMENT_COUNTERS = [
  { label: '1st Formula Student Team from University of Ruhuna', value: 1, suffix: 'st' },
  { label: 'Specialized Sub-Teams', value: 7, suffix: '' },
  { label: 'Operational Divisions', value: 4, suffix: '' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Race Car Built', value: 1, suffix: '' },
  { label: 'Formula Bharat Target Year', value: 2028, suffix: '' },
];

export const TIMELINE = [
  {
    year: '2025',
    title: 'Team Established',
    body: 'Institutional launch from the Faculty of Engineering, University of Ruhuna.',
    tone: 'crimson' as const,
  },
  {
    year: '2025',
    title: 'Leona 2.0 Modification',
    body: 'Successful design and physical fabrication of the debut IC racing car.',
    tone: 'gold' as const,
  },
  {
    year: '2026',
    title: 'Recruitment & Multi-Division Expansion',
    body: 'Scaling operational structure up to 7 specialized sub-teams across 4 divisions.',
    tone: 'crimson' as const,
  },
  {
    year: '2026 – 2028',
    title: 'EV Research & Track Testing',
    body: 'In-house battery pack integration and drivetrain development cycles.',
    tone: 'gold' as const,
  },
  {
    year: '2028',
    title: 'Target — Formula Bharat',
    body: 'International competitive debut against elite global universities.',
    tone: 'crimson' as const,
  },
];

export const WHY_JOIN = [
  {
    title: 'Real Vehicle Engineering',
    body: 'Hands-on work on a real racing car — chassis, powertrain, electronics, and aero.',
  },
  {
    title: 'Industry-Grade Workflow',
    body: 'CAD pipelines, FEA/CFD reviews, design freezes, and design reports modelled on FSAE practice.',
  },
  {
    title: 'International Stage',
    body: 'Direct path to compete at Formula Bharat and other global Formula Student events.',
  },
  {
    title: 'Career Acceleration',
    body: 'Engineering, project management, marketing, and PR experience employers actually look for.',
  },
];

export const RECRUITMENT_JOURNEY = [
  { step: '01', title: 'Apply Online', body: 'Submit your application via the Join FSR form.' },
  { step: '02', title: 'Awareness Session', body: 'Attend the public session to meet division leads.' },
  { step: '03', title: 'Skill Interview', body: 'Discuss your interest area with a sub-team lead.' },
  { step: '04', title: 'Onboarding', body: 'Join your sub-team and start contributing to the build.' },
];
