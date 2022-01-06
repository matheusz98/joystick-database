import { BsGithub } from "react-icons/bs";
import {
  FooterSection,
  FooterContainer,
  FooterContent,
  Copyright,
  Source,
  SourceLink,
  Profile,
} from "./style";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <Copyright>
            Joystick Database &copy; {new Date().getFullYear()} All rights
            reserved. <br />
            Proudly made by Matheus Costa.
          </Copyright>
          <Source>
            All data provided from the{" "}
            <SourceLink href="https://rawg.io/apidocs" target="_blank">
              RAWG API.
            </SourceLink>
          </Source>
          <Profile href="https://github.com/matheusz98" target="_blank">
            <BsGithub />
          </Profile>
        </FooterContent>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
