import bgimg  from "../assets/hamedtaha-YmBgW57IPtk-unsplash.jpg";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import ContactUs from "../components/ContactUs/ContactUs";
import FindUs from "../components/FindUs/FindUs";
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
      <FindUs
        heading="Visit Our Store"
        description="Come see our full collection in person. We're open daily and would love to welcome you."
        address={["B Pretty Beauty Studio", "123 Beauty Lane, Zamalek", "Cairo, Egypt"]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409a0242cceb%3A0x4e7e5a8b8b8b8b8b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
        mapTitle="B Pretty store location"
        mapHeight="450"
      />
      <ContactUs
        heading="Get in Touch"
        description="Whether you have a product question, partnership idea, or just want to say hello — drop us a message and we'll get back to you soon."
        recipientEmail="nohaniho88@gmail.com"
        buttonText="Send Message"
        fieldLabels={{
          name: "Full Name",
          email: "Email Address",
          subject: "How can we help?",
          message: "Your Message",
        }}
      />
    </>
  );
}

export default About;
