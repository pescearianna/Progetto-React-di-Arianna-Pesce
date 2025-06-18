import { ContactStyled } from "./contact.styled";
import Swal from "sweetalert2";
import { ButtonHero } from "../components/button/buttonHero";

const Contact = () => {
  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "e4e78f10-4a36-4e6a-b792-907e49bd9b54");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Message sent correctly",
        icon: "success",
      });

      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again!",
      });
    }
  };

  return (
    <ContactStyled>
      <h1 className="bigtitle">CONTACT</h1>
      <div className="sec" id="upper">
        <form onSubmit={onSubmit} aria-label="Contact form">
          <div className="input-box">
            <label id="namesronly" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="field"
              aria-placeholder="Enter your name"
              name="name"
              autoComplete="Off"
              required
              aria-required="true"
              aria-label="Your name"
              aria-describedby="namesronly"
            ></input>
          </div>
          <div className="input-box">
            <label id="emailsronly" htmlFor="email">Email adress</label>
            <input
              type="email"
              id="email"
              className="field"
              aria-placeholder="Enter your email"
              name="email"
              autoComplete="Off"
              required
              aria-required="true"
              aria-label="Your email"
              aria-describedby="emailsronly"
            ></input>
          </div>
          <div className="input-box">
            <label id="messageronly" htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              className="field mess"
              aria-placeholder="Enter your message"
              autoComplete="Off"
              required
               aria-required="true"
              aria-label="Your message to send"
              aria-describedby="messagesronly"
            ></textarea>
          </div>
          <ButtonHero
            className=""
            text={"Send Message"}
            type="submit"
            aria-label="Send Message"
          ></ButtonHero>
        </form>

        <div className="info-wrap">
          <div>
            <i className="bi bi-telephone-fill"></i>
            <p>+00 000 000 000</p>
          </div>
          <div>
            <i className="bi bi-geo-alt-fill"></i>
            <p>
              Road Avenue 156 km 77,
              <br /> 31059 Florida, <br />
              USA
            </p>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
