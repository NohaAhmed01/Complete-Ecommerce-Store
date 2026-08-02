import bgimg  from "../assets/hamedtaha-YmBgW57IPtk-unsplash.jpg";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import OurStory from "../components/OurStory/OurStory";

function About() {
  return (
    <>
      <AboutIntro heading="About B Pretty" imgSrc={bgimg}>
        Transforming the way you plan, cook, and enjoy meals with intelligent
        recipe recommendations and personalized meal planning.
      </AboutIntro>
      <OurStory
        heading="Our Story"
        imgSrc="https://img.magnific.com/free-vector/people-buying-online_24908-55873.jpg?semt=ais_hybrid&w=740&q=80"
        Order={0}
      >
        <p>
          Smart Recipe was born from a simple observation: planning healthy,
          delicious meals shouldn't be complicated. Founded in 2023, we set out
          to create a platform that makes meal planning effortless and enjoyable
          for everyone.{" "}
        </p>
        <br />
        <p>
          We believe that good food brings people together and that everyone
          deserves access to nutritious, tasty meals that fit their lifestyle.
          Our team of food enthusiasts, nutritionists, and technologists work
          together to bring you the best meal planning experience.{" "}
        </p>
        <br />
        <p>
          Today, Smart Recipe helps thousands of families discover new recipes,
          reduce food waste, and make mealtime stress-free. We're constantly
          evolving, learning from our community, and adding features that make
          your culinary journey even better.
        </p>
      </OurStory>
      <OurStory
        heading="Our Mission"
        imgSrc="https://t4.ftcdn.net/jpg/14/95/74/11/360_F_1495741142_WQdWhFKXxQtdDEPPWMx97tR4zLrdzMRk.jpg"
        Order={1}
      >
        <p>
          To empower everyone to eat well and live healthier by making meal
          planning simple, personalized, and enjoyable.
        </p>
        <br />
        <p>
          We're committed to helping you discover new flavors, save time in the
          kitchen, and build sustainable eating habits that last a lifetime.
          Whether you're a seasoned chef or just starting your cooking journey,
          Smart Recipe is here to support you every step of the way.
        </p>
        <br />
      </OurStory>
    </>
  );
}

export default About;
