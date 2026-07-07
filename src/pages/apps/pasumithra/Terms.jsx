import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function Terms() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Terms &amp; Conditions</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: Pasumithra</p>

        <p>
          These Terms &amp; Conditions govern your use of Pasumithra (the "App"), published by
          SLC Technologies ("we", "us", "our"). By downloading, installing, or using the App, you
          agree to these terms.
        </p>

        <h3>1. What the app is for</h3>
        <p>
          Pasumithra is a marketplace that lets sellers list livestock and lets buyers browse,
          favorite, and contact sellers directly. We provide the marketplace — we are not a party
          to any transaction between a buyer and a seller.
        </p>

        <h3>2. Listings are the seller's responsibility</h3>
        <p>
          Sellers are solely responsible for the accuracy of their listings, including the
          condition, health, and description of any animal listed. We do not inspect, verify, or
          guarantee any listing.
        </p>

        <h3>3. Transactions happen outside the app</h3>
        <p>
          Pasumithra facilitates contact between buyers and sellers (including by phone call) but
          does not process payments or guarantee any sale. Any agreement to buy or sell is solely
          between the buyer and seller; you are responsible for verifying an animal and a seller
          before completing a transaction.
        </p>

        <h3>4. Acceptable use</h3>
        <p>
          You agree not to post false, misleading, or fraudulent listings, and not to use the App
          to harass other users or to conduct any unlawful trade.
        </p>

        <h3>5. Account responsibility</h3>
        <p>
          You are responsible for the accuracy of the phone number used to verify your account
          and for any activity conducted under your account.
        </p>

        <h3>6. Disclaimer of warranties</h3>
        <p>
          The App is provided "as is" without warranties of any kind. We do not warrant the
          accuracy of any listing or the conduct of any user.
        </p>

        <h3>7. Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, SLC Technologies shall not be liable for any
          dispute, loss, or damage arising from a transaction conducted between users of the App.
        </p>

        <h3>8. Changes to these terms</h3>
        <p>
          We may update these Terms from time to time. Continued use of the App after changes are
          published constitutes acceptance of the revised Terms.
        </p>

        <h3>9. Contact</h3>
        <p>
          Questions about these Terms? Email us at{' '}
          <a href="mailto:support@slcvet.com">support@slcvet.com</a>.
        </p>
      </div>
    </section>
  );
}
