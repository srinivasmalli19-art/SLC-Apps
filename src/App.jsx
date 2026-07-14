import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import AppsIndex from './pages/AppsIndex.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

import AppLayout from './pages/apps/shared/AppLayout.jsx';

import GpsCameraAbout from './pages/apps/slc-gps-camera/About.jsx';
import GpsCameraFeatures from './pages/apps/slc-gps-camera/Features.jsx';
import GpsCameraPrivacyPolicy from './pages/apps/slc-gps-camera/PrivacyPolicy.jsx';
import GpsCameraSupport from './pages/apps/slc-gps-camera/Support.jsx';
import GpsCameraTerms from './pages/apps/slc-gps-camera/Terms.jsx';
import GpsCameraContact from './pages/apps/slc-gps-camera/Contact.jsx';

import PasumithraAbout from './pages/apps/pasumithra/About.jsx';
import PasumithraFeatures from './pages/apps/pasumithra/Features.jsx';
import PasumithraPrivacyPolicy from './pages/apps/pasumithra/PrivacyPolicy.jsx';
import PasumithraSupport from './pages/apps/pasumithra/Support.jsx';
import PasumithraTerms from './pages/apps/pasumithra/Terms.jsx';
import PasumithraContact from './pages/apps/pasumithra/Contact.jsx';

import JeevaMitraAbout from './pages/apps/jeevamitra/About.jsx';
import JeevaMitraFeatures from './pages/apps/jeevamitra/Features.jsx';
import JeevaMitraPrivacyPolicy from './pages/apps/jeevamitra/PrivacyPolicy.jsx';
import JeevaMitraSupport from './pages/apps/jeevamitra/Support.jsx';
import JeevaMitraDeleteAccount from './pages/apps/jeevamitra/DeleteAccount.jsx';
import JeevaMitraTerms from './pages/apps/jeevamitra/Terms.jsx';
import JeevaMitraContact from './pages/apps/jeevamitra/Contact.jsx';

import SlcVetAbout from './pages/apps/slc-vet/About.jsx';
import SlcVetFeatures from './pages/apps/slc-vet/Features.jsx';
import SlcVetPrivacyPolicy from './pages/apps/slc-vet/PrivacyPolicy.jsx';
import SlcVetSupport from './pages/apps/slc-vet/Support.jsx';
import SlcVetTerms from './pages/apps/slc-vet/Terms.jsx';
import SlcVetContact from './pages/apps/slc-vet/Contact.jsx';

export default function App() {

  const Router =
  window.location.hostname.includes('github.io')
    ? HashRouter
    : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apps/" element={<AppsIndex />} />

        <Route path="/apps/slc-gps-camera/" element={<AppLayout appId="slc-gps-camera" />}>
          <Route index element={<GpsCameraAbout />} />
          <Route path="features" element={<GpsCameraFeatures />} />
          <Route path="privacy-policy" element={<GpsCameraPrivacyPolicy />} />
          <Route path="support" element={<GpsCameraSupport />} />
          <Route path="terms" element={<GpsCameraTerms />} />
          <Route path="contact" element={<GpsCameraContact />} />
        </Route>

        <Route path="/apps/pasumithra/" element={<AppLayout appId="pasumithra" />}>
          <Route index element={<PasumithraAbout />} />
          <Route path="features" element={<PasumithraFeatures />} />
          <Route path="privacy-policy" element={<PasumithraPrivacyPolicy />} />
          <Route path="support" element={<PasumithraSupport />} />
          <Route path="terms" element={<PasumithraTerms />} />
          <Route path="contact" element={<PasumithraContact />} />
        </Route>

        <Route path="/apps/jeevamitra/" element={<AppLayout appId="jeevamitra" />}>
          <Route index element={<JeevaMitraAbout />} />
          <Route path="features" element={<JeevaMitraFeatures />} />
          <Route path="privacy-policy" element={<JeevaMitraPrivacyPolicy />} />
          <Route path="support" element={<JeevaMitraSupport />} />
          <Route path="delete-account" element={<JeevaMitraDeleteAccount />} />
          <Route path="terms" element={<JeevaMitraTerms />} />
          <Route path="contact" element={<JeevaMitraContact />} />
        </Route>

        <Route path="/apps/slc-vet/" element={<AppLayout appId="slc-vet" />}>
          <Route index element={<SlcVetAbout />} />
          <Route path="features" element={<SlcVetFeatures />} />
          <Route path="privacy-policy" element={<SlcVetPrivacyPolicy />} />
          <Route path="support" element={<SlcVetSupport />} />
          <Route path="terms" element={<SlcVetTerms />} />
          <Route path="contact" element={<SlcVetContact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
