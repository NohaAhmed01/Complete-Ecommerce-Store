import { useNavigate } from "react-router-dom";
import heroImg from "../assets/hero2.png";
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
        heading="Every Thing You Need In One Place"
        paragraph="Discover quality products at unbeatable prices. Shop with confidence and enjoy free shipping on orders over $100."
        ctaText="Shop Now"
        ctaLink="/products?page=1"
      />

      <FeaturedProducts
        heading="Featured Groceries"
        products={products}
        category="groceries"
      />

      {topRated && (
        <OurStory
          heading={topRated.title}
          imgSrc={topRated.images[0]}
          Order={0}
          bgColor={"var(--secondary-color)"}
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
