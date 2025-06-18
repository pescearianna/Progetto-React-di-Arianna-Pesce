import { StyledAbout } from "./about.styled";
import meditatiowoman from "../assets/img/woman-about.webp";
import photobuddha from "../assets/img/buddha-templio.webp";
import phototemplio1 from "../assets/img/monje-templio.webp";
import photocele from "../assets/img/cele-templio.webp";
import photocele1 from "../assets/img/cele-meditando.webp";
import { ButtonHero } from "../components/button/buttonHero";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToMed = () => {
    navigate("/meditation");
  };

  return (
    <StyledAbout>
      <h1 className="bigtitle">ABOUT US</h1>
      <div className="section" id="upper">
        <img className="photodet" src={photocele1} alt="medditation woman" />
        <div>
          <h2>WHO WE ARE</h2>
          <p>
            Celestial is a mindful space created for those seeking peace,
            presence, and connection. We are a growing community of individuals
            who believe in the power of conscious breathing, meditation, and
            emotional support. Our mission is to help people integrate
            mindfulness into their daily lives through simple, meaningful
            practices. Whether you are just beginning or have been meditating
            for years, Celestial welcomes you with open arms. We believe that
            everyone&#39;s journey is unique, and we celebrate progress, not
            perfection. Together, we hold space for stillness, awareness, and
            personal growth.
          </p>
        </div>
      </div>
      <div className="section celes espacio">
        <div>
          <h2>HOW IT WORKS</h2>
          <p>
            Celestial offers guided meditation and breathing exercises designed
            to ground you in the present moment. Each practice is supported by a
            timer, allowing users to track their sessions and observe their
            growth over time. As you meditate, you can log your progress,
            reflect on your experience, and even share insights with the
            community. Our platform encourages open sharing—whether it&#39;s a daily
            breakthrough or a small step forward. By participating, you not only
            cultivate your own mindfulness but also uplift others through your
            presence. Connection, accountability, and compassion are at the core
            of how Celestial works.
          </p>
        </div>

        <img
          className="photodet none"
          src={meditatiowoman}
          alt="medditation woman"
        />
      </div>
      <div id="behindtheproject" className="espacio">
        <div>
          <h2>BEHIND THE PROJECT</h2>
          <p>
            Celestial was founded by Arianna Pesce, a passionate advocate of
            mindfulness and healthy living. The inspiration for this project
            comes from a meaningful encounter during her journey to India, where
            she met a girl named Celestial who introduced her to the healing
            power of meditation and breathwork. That encounter changed Arianna&#39;s
            life, planting the seed for a space where others could also discover
            the power of stillness. This project is her way of honoring that
            transformative moment and passing on the wisdom she received.
            Celestial continues to evolve and grow, and we welcome your ideas
            through our contact form—because every voice matters in building
            something truly meaningful.
          </p>
        </div>
        <div id="photoindia">
          <img src={photobuddha} alt="medditation woman" />
          <img src={photocele} alt="medditation woman" />
          <img className="none" src={phototemplio1} alt="medditation woman" />
        </div>
      </div>
      <div id="joinit" className="espacio">
        <h3>JOIN THE COMMUNITY</h3>
        <p>What are you waiting for? Come with us!</p>
        <div id="joinbtn">
          <ButtonHero text={"PERSONAL AREA"} onClick={goToMed} aria-label="Log In"></ButtonHero>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;