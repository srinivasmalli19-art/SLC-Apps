export const CONTACT_EMAIL = 'support@slcvet.com';
export const COMPANY_NAME = 'SLC Technologies';

// Every app page gets this same sub-page set — used both for routing
// (App.jsx) and for deriving the prerender route list (scripts/prerender.mjs)
// so a new app only needs an entry here + its 6 page files, nothing else.
export const APP_SUB_PAGES = ['features', 'privacy-policy', 'support', 'terms', 'contact'];

export const apps = [
  {
    id: 'slc-gps-camera',
    name: 'SLC GPS Camera',
    tagline: 'Capture photos with GPS location overlay',
    description:
      'A GPS Map Camera app for Android that captures photos with the exact location, address, and timestamp burned directly into the image — built for field documentation, site visits, and proof-of-location records.',
    status: 'live',
    path: '/apps/slc-gps-camera/',
    icon: 'camera',
    accent: '#0f9d8f',
  },
  {
    id: 'jeevamitra',
    name: 'JeevaMitra',
    tagline: 'Rural Geo-Spatial Livestock and Agricultural Ecosystem Platform',
    description:
      'A livestock marketplace and farm management platform for Indian farmers and shepherds, with vet booking, alerts, offline-first support, and a voice-assisted interface for rural accessibility.',
    status: 'live',
    path: '/apps/jeevamitra/',
    icon: 'leaf',
    accent: '#3f7d3a',
    // Optional per-app tabs shown in AppLayout in addition to the standard set.
    extraTabs: [{ path: 'delete-account', label: 'Delete Account' }],
  },
  {
    id: 'pasumithra',
    name: 'Pasumithra',
    tagline: 'Buy, Sell & Connect for Livestock',
    description:
      'A livestock marketplace app connecting buyers and sellers directly — post listings, chat with sellers, save favorites, and manage your profile, all in one place.',
    status: 'live',
    path: '/apps/pasumithra/',
    icon: 'cattle',
    accent: '#b3722c',
  },
  {
    id: 'slc-vet',
    name: 'SLC Vet',
    tagline: 'Coming soon',
    description:
      'SLC Vet is in active development. Details about this application will be published here as soon as it is ready.',
    status: 'coming-soon',
    path: '/apps/slc-vet/',
    icon: 'stethoscope',
    accent: '#5b5fc7',
  },
];

export const getAppById = (id) => apps.find((app) => app.id === id);
