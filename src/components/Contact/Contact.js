import React, {useEffect} from "react";
import emailjs from "emailjs-com";
import {
  ContainerContact,
  ContentContact,
  Title,
  Inputs,
  Form,
  Label,
  TextArea,
  InputButton,
  Wave
} from "./ContactElements";
// import { useForm } from "react-cool-form";
import WaveContact from "../../images/wave_contact.png";
import Aos from 'aos';
import "aos/dist/aos.css"

function Contact() {
  // const { form, getState } = useForm({
  //   defaultValues: { name: "", email: "", subject: "" },
  //   onSubmit: (values) => console.log("onSubmit: ", values),
  // });
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_5hq7jdr", "template_xefkp1b", e.target, "user_mwUwRP9XzzypQOsFTMyUs")
      .then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
  }
  // const errors = getState("errors", { filterUntouchedError: true });
  return (
    <ContainerContact name="Contact">
      <ContentContact>
        <Title>Contacto</Title>
        <Form  onSubmit={sendEmail}>
          <div data-aos="fade-right">
            <Label>Nombre</Label>
            <Inputs name="name" required />
            {/* {errors.name && <Error>{errors.name}</Error>} */}
          </div>
          <div data-aos="fade-left">
            <Label>Asunto</Label>
            <Inputs name="subject" type="text" required />
            {/* {errors.subject && <Error>{errors.subject}</Error>} */}
          </div>
          <div data-aos="fade-right">
            <Label>Email</Label>
            <Inputs name="email" type="email" required />
            {/* {errors.email && <Error>{errors.email}</Error>} */}
          </div>
          <div data-aos="fade-left">
            <Label>Mensaje</Label>
            <TextArea name="message" type="text" required />
          </div>
          <InputButton type="submit"  value="Send" data-aos="fade-right" />
        </Form>
        <Wave src={ WaveContact } />
      </ContentContact>
    </ContainerContact>
  );
}

export default Contact;
