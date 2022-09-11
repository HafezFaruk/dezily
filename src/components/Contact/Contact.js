import React from "react";
import ContactBanner from "../ContactComponents/ContactBanner/ContactBanner";
import ContactForm from "../ContactComponents/ContactForm/ContactForm";
import SingleImage from "../ContactComponents/SingleImage/SingleImage";
import Clients from "../HomeComponents/Clients/Clients";
function Contact() {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <SingleImage />
      <Clients/>
    </div>
  );
}

export default Contact;
