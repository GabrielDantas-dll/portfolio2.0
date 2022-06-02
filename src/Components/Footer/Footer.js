import React from "react";
import styled from "styled-components";

const MainFooter = styled.footer`
    width: 100%;
    position: relative;
    background-color: #fff;
    text-align: center;
    padding: 30px 0;
`;

const FooterText = styled.span`
  background-image: linear-gradient(90deg, #f06161 0%, #b700ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Red Hat Mono', monospace;
  font-weight: 700;
  font-size: 18px;
  margin: 30px;
`;

const Underline = styled.span`
  @keyframes underline-piscando {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  color: #fff;
  animation-name: underline-piscando;
  animation-duration: 0.8s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

function Footer() {
  return (
    <MainFooter>
        <FooterText>
        Feito por @GDantas<Underline>_</Underline>
      </FooterText>
    </MainFooter>
  )
    
}

export default Footer;
