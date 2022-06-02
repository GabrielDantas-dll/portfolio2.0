import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Toaster from "../Toast/Toast";

const MainHeader = styled.header`
  display: flex;
  width: 95%;
  margin: 30px auto 0px auto;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-size: 24px;
  position: relative;

  nav ul li a {
    padding-left: 10px;
    text-decoration: none;
    color: white;
    font-family: 'Red Hat Mono', monospace;
    font-weight: 300;

    &:hover {
      transition: ease-in-out 0.2s;
      cursor: pointer;
      color: rgb(67, 235, 52);
    }
  } 

  @media(max-width: 600px) {
    flex-direction: column;
    width: 95%;
    margin-top: 30px;

    nav {
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
  }

  return (
    <MainHeader>
      <span style={{ fontWeight: "bold" }}>&lt; /&gt;</span>
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gabriel-dantas-874349160/"
            >
              <span>/</span>LinkedIn
            </a>
            <a target="_blank" href="https://github.com/GabrielDantas-dll">
              <span>/</span>GitHub
            </a>
            <CopyToClipboard text="gabrieldol@yahoo.com.br">
              <a onClick={toggleToastVisible}>
                <span>/</span>E-mail
              </a>
            </CopyToClipboard>
          </li>
        </ul>
      </nav>
      {toastVisible ? (<Toaster />) :null }
    </MainHeader>
  );
}

export default Header;
