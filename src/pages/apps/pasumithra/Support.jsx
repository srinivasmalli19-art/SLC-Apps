import { Link } from 'react-router-dom';
import '../shared/AppPages.css';

const faqs = [
  {
    q: 'How do I post a listing?',
    a: 'From your profile, choose to create a new listing, add photos and details about the animal, and publish it. Buyers will be able to browse and contact you directly.',
  },
  {
    q: 'How do I contact a seller?',
    a: 'Open a listing and use the call button to reach the seller directly by phone — that\'s the fastest way to ask questions and agree on a price.',
  },
  {
    q: 'Why isn\'t my photo uploading?',
    a: 'Check that Camera and Storage permissions are granted to Pasumithra in your device Settings, and that you have an internet connection.',
  },
  {
    q: 'How do favorites work?',
    a: 'Tap the favorite icon on any listing to save it. Your favorites are private and only visible to you, from your profile.',
  },
  {
    q: 'How do I remove a listing I posted?',
    a: 'Open the listing from your profile and choose to delete it. It will no longer be visible to buyers.',
  },
  {
    q: 'I didn\'t receive my verification code.',
    a: 'Make sure the phone number you entered is correct and has signal, then request the code again. If it still doesn\'t arrive, contact us.',
  },
];

export default function Support() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Support</h2>
        <p>
          Answers to common questions about Pasumithra. If your issue isn't covered here, reach
          out on the <Link to="/apps/pasumithra/contact">Contact page</Link> and we'll help
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
