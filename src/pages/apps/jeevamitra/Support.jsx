import { Link } from 'react-router-dom';
import '../shared/AppPages.css';

const faqs = [
  {
    q: 'How do I book a vet consultation?',
    a: 'From the home screen, choose the vet booking option, pick a time, and confirm. You\'ll get a notification when your booking is confirmed.',
  },
  {
    q: 'Why isn\'t the voice feature understanding me?',
    a: 'Voice input uses your device\'s built-in speech recognition. Make sure Microphone permission is granted to JeevaMitra, you have a stable internet connection, and you\'re in a reasonably quiet environment.',
  },
  {
    q: 'The app isn\'t showing my location correctly.',
    a: 'Check that Location permission is granted in your device Settings and that GPS is enabled. In areas with weak signal, location may take a moment to resolve.',
  },
  {
    q: 'I\'m not receiving notifications.',
    a: 'Make sure Notification permission is granted to JeevaMitra in your device Settings, and that battery optimization isn\'t restricting the app in the background.',
  },
  {
    q: 'Can I use the app without an internet connection?',
    a: 'Core features are designed to work offline-first. Some features — like syncing new records, vet booking, or notifications — need a connection to complete.',
  },
  {
    q: 'How do I switch between a farmer and shepherd role?',
    a: 'Your role is set up when you create your account. Contact us if you need it changed.',
  },
];

export default function Support() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Support</h2>
        <p>
          Answers to common questions about JeevaMitra. If your issue isn't covered here, reach
          out on the <Link to="/apps/jeevamitra/contact">Contact page</Link> and we'll help
          directly.
        </p>
        <div className="app-doc__faq">
          {faqs.map((item) => (
            <details key={item.q} className="app-doc__faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
