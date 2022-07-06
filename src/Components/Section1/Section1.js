import React from "react";
import styled from "styled-components";

const DivContent = styled.div`
  font-family: "Hermit", sans-serif;
  color: #fff;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1200px;
  margin: 35px auto;
  align-items: center;

  h2 {
    font-size: 34pt;
    font-family: "Red Hat Mono", monospace;
  }
  h3 {
    padding: 10px 0px 10px 0px;
    font-size: 15pt;
    font-family: "Red Hat Mono", monospace;
    font-weight: 500;
    color: rgb(67, 235, 52);
  }

  @media (max-width: 1150px) {
    margin: 50px auto;
    width: auto;
    height: auto;
  }

  @media (max-width: 900px) {
    margin: 50px auto;
    width: 95%;
    grid-template-columns: 1fr;
  }
`;

const DivMetas = styled.div`
  padding: 20px;
`;

const DivTexto = styled.div`
  color: #fff;
  padding-top: 20px;
  line-height: 1.6;
  font-family: "Red Hat Mono", monospace;
  font-weight: 500;
`;

const DivImg = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;
  border: 30px solid rgba(218, 112, 214, 0.1);
  object-fit: cover;
  object-position: center;
  margin: 0px auto;
  @media (max-width: 900px) {
    display: none;
  }
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

function Section1() {
  return (
    <DivContent>
      <DivMetas>
        <h2>
          Gabriel Dantas<Underline>_</Underline>
        </h2>
        <h3>Desenvolvedor Front-end React | Vue</h3>
        <DivTexto>
          Olá! Meu nome é Gabriel Dantas e tenho 21 anos. Comecei no mundo da
          tecnologia em 2018, quando estava na dúvida de que carreiras seguir
          após o fim do ensino médio. Comecei a desenvolver alguns projetos
          simples em <span style={{ color: "#FFA500" }}>HTML e CSS</span>, um
          pouco mais tarde comecei a utilizar o{" "}
          <span style={{ color: "#ADFF2F" }}>JavaScript</span> e{" "}
          <span style={{ color: "#ADFF2F" }}>Python</span>. No ano de 2020
          começei a faculdade de Análise e Desenvolvimento de Sistemas na
          Universidade São Judas. Logo no primeiro semestre meu grupo e eu
          desenvolvemos um <span style={{ color: "#00FFFF" }}>ToDo List</span>,
          onde integramos uma página web feito em{" "}
          <span style={{ color: "#FF0040" }}>Angular</span>, um aplicativo feito
          em <span style={{ color: "#FF0040" }}>Java</span> e o banco de dados{" "}
          <span style={{ color: "#FF0040" }}>Firebase</span>. O projeto foi
          exposto na Expo São Judas (orgulho :D). Atualmente trabalho na Fenix
          Editorial como Dev Front-End e tenho investido meu tempo em frameworks
          como o <span style={{ color: "#F7FE2E" }}>React</span>.
        </DivTexto>
      </DivMetas>
      <DivImg src={require("../../images/perfil2.jpg")} />
    </DivContent>
  );
}

export default Section1;
