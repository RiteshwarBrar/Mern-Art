import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutIntro from '../components/AboutIntro';

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