import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toaster from "../Toast/Toast";

const MainHeader = styled.header`
  display: flex;
  width: 95%;
  margin: 0px auto 0px auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-size: 24px;
  position: relative;

  nav ul {
    display: flex;
  }

  nav ul li {
    display: flex;
    algin-items: center;
    justify-content: center;
    padding: 0 25px;
  }

  nav ul li a {
    padding-bottom: 10px;
    background: linear-gradient( to right, rgba(100, 200, 200, 0), rgba(100, 200, 200, 0) ), linear-gradient( to right, #FD93C9, #9431e6 );
    background-position-x: 0%, 0%;
    background-position-y: 0%, 0%;
    background-repeat: repeat, repeat;
    background-size: auto, auto;
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    text-decoration: none;
    color: #fff;
    // padding-left: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }

  nav ul li a:hover {
    background-size: 0 0px, 100% 3px;
  }

  @media(max-width: 618px) {
    flex-direction: column;
    width: 95%;
    margin-top: 0px;

    nav{
      margin-top: 15px;
    }
  }
}
`;

function Header() {
  const [toastVisible, setToastVisible] = useState(false);

  const toggleToastVisible = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  return (
    <MainHeader>
      <span style={{ fontWeight: "bold" }}>&lt; /&gt;</span>
      <nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-dantas-874349160/"
              target="blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/GabrielDantas-dll" target="blank">
              GitHub
            </a>
          </li>
          <li>
            <CopyToClipboard text="gabrieldol82@gmail.com.br">
              <a onClick={toggleToastVisible}>E-mail</a>
            </CopyToClipboard>
          </li>
          {/* <li>
            <a
              href="https://www.linkedin.com/in/gabriel-dantas-874349160/"
              target="blank"
            >
              Meu C.V
            </a>
          </li> */}
        </ul>
      </nav>
      {toastVisible ? <Toaster /> : null}
    </MainHeader>
  );
}

export default Header;
