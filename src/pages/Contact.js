import classes from "./Contact.module.css";
import { useEffect, useState } from "react";

import ContactBanner from "../components/content/TextContent/ContactBanner";
import Form from "../components/form/Form";
import Card from "../components/ui/Card";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let submitted = (
    <div className={classes.submitted}>
      <h1>Your message was successfully sent.</h1>
    </div>
  );

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    }
  }, [isSubmitted]);

  return (
    <>
      <ContactBanner />
      {isSubmitted && submitted}
      <Card>
          <Form />
      </Card>
    </>
  );
};

export default Contact;
