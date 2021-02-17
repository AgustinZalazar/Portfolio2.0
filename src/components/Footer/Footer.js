import React from "react";
import {
  Container,
  Content,
  QuickLinks,
  QLItem,
  Link,
  PreFooter,
  Copyright,
  SocialMedia,
  IconLinkedin,
  IconGithub,
  IconInstragram,
  IconLink,
  Title
} from "./FooterElements";

function Footer() {
  return (
    <Container>
      <Content>
        <PreFooter>
          <div>
            <Title>Quick Links</Title>
            <QuickLinks>
              <QLItem>
                <Link
                  spy={true}
                  activeClass="active"
                  to="home"
                  smooth={true}
                  duration={1000}
                >
                  Inicio
                </Link>
              </QLItem>
              <QLItem>
                <Link
                  spy={true}
                  activeClass="active"
                  to="about"
                  smooth={true}
                  duration={1000}
                >
                  Sobre mi
                </Link>
              </QLItem>
              <QLItem>
                <Link
                  spy={true}
                  activeClass="active"
                  to="finishedworks"
                  smooth={true}
                  duration={1000}
                >
                  Trabajos finalizados
                </Link>
              </QLItem>
              <QLItem>
                <Link
                  spy={true}
                  activeClass="active"
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  Contacto
                </Link>
              </QLItem>
            </QuickLinks>
          </div>
          <div>
            <Title>Social Media</Title>
            <SocialMedia>
              <IconLink
                href="https://www.linkedin.com/in/agustin-zalazar-460982160/"
                target="_blank"
              >
                <IconLinkedin />
              </IconLink>
              <IconLink
                href="https://github.com/AgustinZalazar"
                target="_blank"
              >
                <IconGithub />
              </IconLink>
              <IconLink
                href="https://www.instagram.com/agusnzalazar"
                target="_blank"
              >
                <IconInstragram />
              </IconLink>
            </SocialMedia>
          </div>
        </PreFooter>
        <Copyright>
          <p>© Hecha por Agustin Zalazar</p>
        </Copyright>
      </Content>
    </Container>
  );
}

export default Footer;
