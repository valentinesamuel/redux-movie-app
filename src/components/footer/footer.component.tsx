import { LogoLink } from "../../routes/navigation/navigation.styles";
import { useAppSelector } from "../../utilities/hooks/rootstate";
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
  const auth = useAppSelector(state => state.userSlice.status)
  return (
    <FooterContainer>
      <LogoLink to="/">Feems</LogoLink>
      <Instructions>
        <InstText>
          Send us an email or give us a call if you have any questions
        </InstText>
        <Paragraph>(234) ***-****-***</Paragraph>
        <Paragraph>valentinesamuel2580@gmail.com</Paragraph>
      </Instructions>

      <Links>
        <ExternalLink href="https://www.facebook.com/valentine.samuel.9047" target="_blank"
          rel="noopener noreferrer">Facebook</ExternalLink>
        <ExternalLink href="https://twitter.com/frontend_val" target="_blank"
          rel="noopener noreferrer">Twitter</ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/samuel-val/" target="_blank"
          rel="noopener noreferrer">LinkedIn</ExternalLink>
        <ExternalLink href="https://www.instagram.com/growing_dev/" target="_blank"
          rel="noopener noreferrer">Instagram</ExternalLink>
        <ExternalLink href="https://github.com/valentinesamuel" target="_blank"
          rel="noopener noreferrer"> Github</ExternalLink>
      </Links>


      {auth === 'authed' && <Links>
        <InternalLink to="">Home</InternalLink>
        <InternalLink to="userlist">My List</InternalLink>
      </Links>
      }
    </FooterContainer>
  );
};

export default Footer;
