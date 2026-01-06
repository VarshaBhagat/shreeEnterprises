import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        Shree Enterprises Water Bottle
      </div>

      <div className="footer__contact">
        <a href="mailto:shreeenterprises2814@gmail.com">
          shreeenterprises2814@gmail.com
        </a>
      </div>

      <p className="footer__copy">
        © 2026 Shree Enterprises Water Bottle. All rights reserved.
      </p>
    </footer>
  );
}
