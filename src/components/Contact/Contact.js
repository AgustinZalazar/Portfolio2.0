import React from "react";
import emailjs from "emailjs-com";
import {
  ContainerContact,
  ContentContact,
  Title,
  Inputs,
  Form,
  Error,
  Label,
  TextArea,
  InputButton,
} from "./ContactElements";
import { useForm } from "react-cool-form";

function Contact() {
  const { form, getState } = useForm({
    defaultValues: { name: "", email: "", subject: "" },
    onSubmit: (values) => console.log("onSubmit: ", values),
  });
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
  const errors = getState("errors", { filterUntouchedError: true });
  return (
    <ContainerContact>
      <ContentContact>
        <Title>Contacto</Title>
        <Form ref={form} noValidate onSubmit={sendEmail}>
          <div>
            <Label>Nombre</Label>
            <Inputs name="name" required />
            {errors.name && <Error>{errors.name}</Error>}
          </div>
          <div>
            <Label>Asunto</Label>
            <Inputs name="subject" type="text" required />
            {errors.subject && <Error>{errors.subject}</Error>}
          </div>
          <div>
            <Label>Email</Label>
            <Inputs name="email" type="email" required />
            {errors.email && <Error>{errors.email}</Error>}
          </div>
          <div>
            <Label>Mensaje</Label>
            <TextArea name="message " type="text" required />
          </div>
          <InputButton type="submit"  value="Send"/>
        </Form>
      </ContentContact>
    </ContainerContact>
  );
}

export default Contact;
