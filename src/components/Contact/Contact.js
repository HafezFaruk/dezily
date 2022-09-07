import React from "react";
import ContactBanner from "../ContactComponents/ContactBanner/ContactBanner";
import ContactForm from "../ContactComponents/ContactForm/ContactForm";
import SingleImage from "../ContactComponents/SingleImage/SingleImage";
function Contact() {
  return (
    <div>
      <ContactBanner />
      <ContactForm />
      <SingleImage />
    </div>
  );
}

export default Contact;
