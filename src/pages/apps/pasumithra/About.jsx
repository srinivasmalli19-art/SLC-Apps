import '../shared/AppPages.css';

export default function About() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>About Pasumithra</h2>
        <p>
          Pasumithra is a livestock marketplace app that connects buyers and sellers directly —
          no middleman, no commission agent standing between a farmer and a fair price. Sellers
          post listings with photos and details; buyers browse, favorite the ones they're
          interested in, and reach out directly to ask questions or negotiate.
        </p>
        <p>
          The app is built around the way livestock is actually bought and sold in rural India:
          a phone call still closes most deals. Every listing makes it easy to contact the
          seller directly, so conversations that used to happen through a middleman happen
          straight between the two people actually making the trade.
        </p>
        <h3>Built for both sides of the trade</h3>
        <p>
          Sellers get a straightforward way to list livestock with photos and details, manage
          their listings, and hear from interested buyers. Buyers get a searchable, browsable
          marketplace with full listing details up front and a favorites list to keep track of
          animals they're considering, before ever making a call.
        </p>
      </div>
    </section>
  );
}
