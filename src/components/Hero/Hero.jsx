import './Hero.scss';
// import heroImg from '../../assets/hero-bottle.png';
const heroImg ='https://images.unsplash.com/photo-1523362628745-0c100150b504'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2>Stylish Bottles<br />Tailored for You</h2>
        <button>Shop Now</button>
      </div>

      <div className="hero__image">
        <img src={heroImg} alt="Bottle" />
      </div>
    </section>
  );
}
