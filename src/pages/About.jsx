import bgimg  from "../assets/hero.jpg";
import ourStoryImg from "../assets/ourStory.png";
import ourMissionImg from "../assets/about.jpg";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import ContactUs from "../components/ContactUs/ContactUs";
import FindUs from "../components/FindUs/FindUs";
import OurStory from "../components/OurStory/OurStory";

function About() {
  return (
    <>
      <AboutIntro heading="About Terra Shop" imgSrc={bgimg}>
        Providing quality products at unbeatable prices and a shopping experience that puts you first.
      </AboutIntro>
      <OurStory
        heading="Our Story"
        imgSrc={ourStoryImg}
        Order={0}
      >
        <p>
          Terra Shop was born from a simple observation: providing quality products at unbeatable prices and a shopping experience that puts you first. Founded in 2026, we set out
          to create a platform that makes shopping effortless and enjoyable
          for everyone.{" "}
        </p>
        <br />
        <p>
          We believe that good products bring people together and that everyone
          deserves access to quality products that fit their lifestyle.
          Our team of product enthusiasts, technologists, and marketers work
          together to bring you the best shopping experience.{" "}
        </p>
        <br />
        <p>
          Today, Terra Shop helps thousands of families discover new products,
          reduce product waste, and make shopping stress-free. We're constantly
          evolving, learning from our community, and adding features that make
          your shopping journey even better.
        </p>
      </OurStory>
      <OurStory
        heading="Our Mission"
        imgSrc={ourMissionImg}
        Order={1}
      >
        <p>
          To empower everyone to buy quality products at unbeatable prices and a shopping experience that puts you first.
          planning simple, personalized, and enjoyable.
        </p>
        <br />
        <p>
          We're committed to helping you discover new products, save time in the
          shopping, and build sustainable shopping habits that last a lifetime.
          Whether you're a seasoned shopper or just starting your shopping journey,
          Terra Shop is here to support you every step of the way.
        </p>
        <br />
      </OurStory>
      <FindUs
        heading="Visit Our Store"
        description="Come see our full collection in person. We're open daily and would love to welcome you."
        address={["Terra Shop", "123 Shopping Street, New York", "New York, USA"]}
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.789!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458409a0242cceb%3A0x4e7e5a8b8b8b8b8b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
        mapTitle="Terra Shop store location"
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
