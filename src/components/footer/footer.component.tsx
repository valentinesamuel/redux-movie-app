import React from "react";
import { LogoLink } from "../../routes/navigation/navigation.styles";
import {
  ExternalLink,
  FooterContainer,
  Instructions,
  InstText,
  InternalLink,
  Links,
  Paragraph,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoLink to="/d">Feems</LogoLink>
      <Instructions>
        <InstText>
          Send us an email or give us a call if you have any questions
        </InstText>
        <Paragraph>(234) 234-234-234</Paragraph>
        <Paragraph>email gfoes here</Paragraph>
      </Instructions>

      <Links>
        <ExternalLink href="">Facebook</ExternalLink>
        <ExternalLink href="">Twitter</ExternalLink>
        <ExternalLink href="">LinkedIn</ExternalLink>
        <ExternalLink href="">Instagram</ExternalLink>
        <ExternalLink href="">Github</ExternalLink>
      </Links>


      <Links>
        <InternalLink to="">Home</InternalLink>
        <InternalLink to="">My List</InternalLink>
      </Links>

    </FooterContainer>
  );
};

export default Footer;
