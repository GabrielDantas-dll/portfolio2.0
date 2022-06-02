import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Section = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-family: 'Red Hat Mono', monospace;
  font-size: 36px;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 60px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: top;
  flex-wrap: wrap;
  gap: 40px;
  margin-right: 80px;
  margin-left: 80px;
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

function Section2() {
  return (
    <Section>
      <SectionTitle>Meus Projetos<Underline>_</Underline></SectionTitle>
      <CardWrapper>
        <Card/>
      </CardWrapper>
    </Section>
  );
}

export default Section2;
