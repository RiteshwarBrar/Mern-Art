import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutIntro from '../components/home/AboutIntro';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProducts />
      <AboutIntro />
    </div>
  );
};

export default Home;