export default function App() {
  return (
    <>
      {/* Preview notice bar */}
      <div className="preview-bar" role="note">
        Design preview. Your name, photos and real details replace the sample content.
      </div>

      {/* Header */}
      <header className="site-header">
        <span className="firm-name">[Firm name]</span>
        <a
          href="tel:+2348000000000"
          className="header-call"
          aria-label="Call the chambers"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-headline">
            Clear legal advice for property, business, and family matters.
          </h1>
          <p className="hero-sub">
            A practical, straightforward chambers in Owerri — we help individuals
            and small businesses handle legal questions without unnecessary delay.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/2348000000000?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation."
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a consultation
            </a>
            <a href="tel:+2348000000000" className="btn btn-secondary">
              Call the chambers
            </a>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="section">
        <h2 className="section-title">Practice areas</h2>
        <ul className="practice-list">
          <li className="practice-item">
            <span className="practice-number">01</span>
            <span>Property and land — sales, leases, title searches, and documentation.</span>
          </li>
          <li className="practice-item">
            <span className="practice-number">02</span>
            <span>Business and contracts — registration, agreements, and compliance.</span>
          </li>
          <li className="practice-item">
            <span className="practice-number">03</span>
            <span>Family and probate — marriages, estates, letters of administration.</span>
          </li>
          <li className="practice-item">
            <span className="practice-number">04</span>
            <span>Dispute resolution — negotiation, mediation, and court representation.</span>
          </li>
          <li className="practice-item">
            <span className="practice-number">05</span>
            <span>Document review — contracts, deeds, and legal correspondence.</span>
          </li>
        </ul>
      </section>

      {/* How a matter starts */}
      <section className="section">
        <h2 className="section-title">How a matter starts</h2>
        <ol className="steps-list">
          <li className="step-item">
            <span className="step-number">1</span>
            <div className="step-content">
              <p className="step-title">Send a short summary</p>
              <p className="step-desc">
                Write to us on WhatsApp or call with a brief outline of the matter.
                No formal documents needed at this stage.
              </p>
            </div>
          </li>
          <li className="step-item">
            <span className="step-number">2</span>
            <div className="step-content">
              <p className="step-title">Book a consultation</p>
              <p className="step-desc">
                We schedule a time to speak in detail — in person at the chambers,
                by phone, or by video call.
              </p>
            </div>
          </li>
          <li className="step-item">
            <span className="step-number">3</span>
            <div className="step-content">
              <p className="step-title">Agree the scope and fees in writing</p>
              <p className="step-desc">
                Before any work begins, you receive a clear letter outlining what
                we will do, the timeline, and the cost.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* About the principal partner */}
      <section className="section about-section">
        <div className="about-inner">
          <div className="about-photo" aria-hidden="true">
            [Photo]
          </div>
          <div className="about-text">
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>
              The principal partner
            </h2>
            <p>
              [Partner name] is a legal practitioner called to the Nigerian Bar
              and based in Owerri, Imo State. The chambers focuses on giving
              clear, practical guidance to individuals and small businesses.
            </p>
            <p>
              The approach is straightforward: listen carefully, explain the
              options plainly, and move at a pace that suits the client. Every
              matter is handled personally — there is no hand-off to junior
              staff without your knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2 className="section-title">Common questions</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What should I bring to a consultation?</summary>
            <div className="faq-answer">
              Bring any documents related to the matter — letters, contracts,
              receipts, or correspondence. If you don't have everything, that is
              fine. A clear explanation of the situation is often enough for a
              first meeting.
            </div>
          </details>
          <details className="faq-item">
            <summary>Can you work with me if I live abroad?</summary>
            <div className="faq-answer">
              Yes. Many clients are based outside Nigeria and need someone on the
              ground to handle matters at home. We work by phone, WhatsApp, email,
              and video call, and can send documents by courier where needed.
            </div>
          </details>
          <details className="faq-item">
            <summary>How are fees agreed?</summary>
            <div className="faq-answer">
              Fees are discussed after the initial consultation and confirmed in
              writing before any work begins. The fee structure depends on the
              nature and scope of the matter. There are no hidden charges.
            </div>
          </details>
          <details className="faq-item">
            <summary>How quickly will I get a reply?</summary>
            <div className="faq-answer">
              We aim to respond to messages within one working day. For urgent
              matters, a phone call is the fastest way to reach the chambers.
            </div>
          </details>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section">
        <h2 className="section-title">Contact the chambers</h2>
        <div className="contact-details">
          <p className="contact-line">
            <strong>Address:</strong> [Floor and street address], Owerri, Imo State
          </p>
          <p className="contact-line">
            <strong>Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM
          </p>
          <p className="contact-line">
            <strong>Phone:</strong>{' '}
            <a href="tel:+2348000000000">+234 800 000 0000</a>
          </p>
          <p className="contact-line">
            <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/2348000000000?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </p>
        </div>
        <div className="contact-buttons">
          <a
            href="https://wa.me/2348000000000?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation."
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp the chambers
          </a>
          <a
            href="https://maps.google.com/?q=Owerri+Imo+State+Nigeria"
            className="btn btn-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>Nothing on this page is legal advice.</p>
      </footer>

      {/* Sticky bottom bar (mobile only) */}
      <div className="sticky-bar" aria-label="Quick contact">
        <a href="tel:+2348000000000" className="btn btn-call">
          Call
        </a>
        <a
          href="https://wa.me/2348000000000?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation."
          className="btn btn-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
