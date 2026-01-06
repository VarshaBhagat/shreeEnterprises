import BottleCarousel from '../BottleCarousel/BottleCarousel';
import './Hero.scss';
// import heroImg from '../../assets/hero-bottle.png';
const heroImg = 'https://images.unsplash.com/photo-1523362628745-0c100150b504'
import { bottles } from "../../data/bottles";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Stylish Bottles Tailored for You</h2>
        <button>Contact us</button>
      </div>
       <BottleCarousel bottles={bottles}/>
      {/* <div className="hero-image">
    <img src={heroImg} alt="Bottle" />
  </div> */}
    </section>

  );
}
