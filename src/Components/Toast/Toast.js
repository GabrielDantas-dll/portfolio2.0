import React, { useState } from "react";
import styled from "styled-components";

const Toast = styled.div`
  background-color: #fff;
  height: 50px;
  width: 100px;
  color: black;
  font-size: 16px;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  top: 57px;
  right: 26px;

  &::after {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    background-color: #fff;
    top: -4px;
    left: 43px;
    transform: rotate(45deg);
    z-index: -10;
  }

  @media (max-width: 740px) {
    right: 17px;
  }

  @media (max-width: 600px) {
    top: 95px;
    //   right: calc()
  }

  @keyframes toast-on {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  animation-name: toast-on;
  animation-duration: 0.8s;
`;

export default function Toaster() {
  return (
    <>
      <Toast>Copiado para a área de transferência</Toast>
    </>
  );
}