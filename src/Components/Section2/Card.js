import React, { useState } from "react";
import styled from "styled-components";

const CardBody = styled.div`
  background-color: rgb(255, 248, 219, 0.1);
  font-family: 'Poppins', sans-serif;
  border-radius: 20px;
  color: #fff;
  width: 280px;
  margin: 0 auto;
  transition: all 0.2s ease-in-out;
  
  &::hover {
    transform: scale(1.03);
    box-shadow: 0 0px 2em #9842ba;
  }
`;

const CardImg = styled.img`
  height: 250px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
  object-fit: cover;
  object-position: center;
  background-color: #fff;
`;

const CardText = styled.div`
  padding: 5px 25px 2px 25px;
  line-height: 18px;
`;

const CardH3 = styled.h3`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
`;

const CardP = styled.p`
  margin-top: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
`;

const CardA = styled.a`
  text-decoration: none;
  color: white;
`;

function Card() {
  const [CardMetas] = useState([
    {
      title: "Projeto Eduick",
      description:
        "Desenvolvido em React. Projeto feito para uma entrevista de emprego. Este foi meu primeiro projeto grande feito em um framework. Apesar da dificuldade de um projeto grande como este, gostei do resultado ",
      image: "https://edusynch.com/images/layout/logo-edusynch.svg",
      link: "https://gabrieldantas-dll.github.io/projeto-eduick/",
    },
    {
      title: "Twenty One Pilots",
      description:
        "Primeiro projeto completo que fiz, já tinha muito a praticar.",
      image:
        "https://4.bp.blogspot.com/-NsurgXv3IMk/W7qmKFfeTtI/AAAAAAAAUkA/2i-edxrBdSAfzaIX7b2HcLyACxNjSmkTQCLcBGAs/s1600/465.jpg",
      link: "https://github.com/GabrielDantas-dll/Twenty-One-Pilots",
    },
    {
      title: "Projeto organo - alura",
      description: "Projeto desenvolvido em react junto a Alura. Muitos conteúdos eu já tinha o conhecimento, mas sempre bom rever alguns conteúdos",
      link: "https://github.com/GabrielDantas-dll/react-alura",
      image: "https://yt3.ggpht.com/xqhIoXspeX7eqouJvNHl1xqpv9213Pl26ENZbuouXxO2RlDadjsveNXfgnj8GTUk7thFYUkVRg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      title: "Qual a cor?",
      description: "Jogo para acertar o hexadecimal de cores. Novas funcionalidades em breve",
      link: "https://github.com/GabrielDantas-dll/Qual-a-cor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxU01_bRCaEsAVw76gjcc1tJT7GOddH2grw&usqp=CAU",
    },
    {
      title: "Jogo Pong",
      description:
        "Jogo feito com Python e TKinter. Não é minha especialidade, mas foi divertido programa-lo",
      image:
        "https://s2.glbimg.com/kvTwEVHf2rM0uC30xl2bHY-2zBA=/695x0/s.glbimg.com/po/tt2/f/original/2016/03/02/pong.jpg",
      link: "https://github.com/GabrielDantas-dll/Pong",
    },
    {
      title: "Contador",
      description:
        "Feito com JavaScript. Nele existem basicamente 3 funções: Somar, subtrair e zerar o contador",
      image: "https://gabrieldantas-dll.github.io/img/Contador.jpeg",
      link: "https://github.com/GabrielDantas-dll/Contador"
    },
    {
      title: "Página de login",
      description:
        "Feito com html, css e uma pitada de JS. Gostei bastante do resultado final, pretendo usar em um projeto futuro",
      image: "https://gabrieldantas-dll.github.io/img/login2.jpeg",
      link: "https://github.com/GabrielDantas-dll/Pagina-de-login",
    },
  ]);

  return (
    <>
      {CardMetas.map((card) => (
        <CardBody>
          <CardA href={card.link} target="_blank">
            <CardImg src={card.image} />
            <CardText>
              <CardH3> {card.title} </CardH3>
              <CardP> {card.description} </CardP>
            </CardText>
          </CardA>
        </CardBody>
      ))}
    </>
  );
}

export default Card;
