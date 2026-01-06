import './Products.scss';
// import bottle1 from '../../assets/bottle1.png';
// import bottle2 from '../../assets/bottle2.png';
// import bottle3 from '../../assets/bottle3.png';
const bottle1 ='https://images.unsplash.com/photo-1523362628745-0c100150b504'
const bottle2 ='https://images.unsplash.com/photo-1523362628745-0c100150b504'
const bottle3 ='https://images.unsplash.com/photo-1523362628745-0c100150b504'
const bottle4 ='https://images.unsplash.com/photo-1523362628745-0c100150b504'
import BottleCarousel from "../BottleCarousel/BottleCarousel"
import { bottles } from "../../data/bottles";

const items = [bottle1, bottle2, bottle3, bottle4];

export default function Products() {
  return (
    <section className="products">
      <h3>Our Bottles</h3>
      <div className="products__grid">
       <BottleCarousel bottles={bottles}/>
      </div>
    </section>
  );
}
