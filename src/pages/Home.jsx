import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hamedtaha-YmBgW57IPtk-unsplash.jpg";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import OurStory from "../components/OurStory/OurStory";
import Button from "../components/Button/Button";

function Home({ products = [] }) {
  const navigate = useNavigate();
  const topRated = [...products].sort((a, b) => b.rating - a.rating)[0];

  return (
    <>
      <Hero
        imgSrc={heroImg}
        heading="Discover Your Beauty"
        paragraph="Explore our curated collection of premium skincare, fragrances, and beauty essentials — crafted to help you look and feel your best every day."
        ctaText="Browse Products"
        ctaLink="/products?page=1"
      />

      <FeaturedProducts
        heading="Featured Skincare"
        products={products}
        category="skincare"
      />

      {topRated && (
        <OurStory
          heading={topRated.title}
          imgSrc={topRated.images[0]}
          Order={0}
        >
          <p>{topRated.description}</p>
          <br />
          <p>
            Rated <strong>{topRated.rating}</strong> / 5 by our customers — one
            of our highest-rated products.
          </p>
          <br />
          <Button type="cta" onClick={() => navigate("/products?page=1")}>
            Shop All Products
          </Button>
        </OurStory>
      )}

      <FeaturedProducts
        heading="Featured Fragrances"
        products={products}
        category="fragrances"
      />
    </>
  );
}

export default Home;
