import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__brand">
        <bold>Contact Us</bold>
      </div>

      <div className="footer__contact">
        <div>
          📞{" "}
          <a href="tel:+919876543210">
            +91 9538888219
          </a>
        </div>
        <div>  ✉️{" "}
          <a href="mailto:shreeenterprises2814@gmail.com">
            shreeenterprises2814@gmail.com
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © 2026 Shree Enterprises Water Bottle. All rights reserved.
      </p>
    </footer>
  );
}
