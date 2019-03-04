import styled from "styled-components";

export const ConnectButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 95px;
  width: auto;
  padding: 10px 12px;
  border-radius: 4px;
  color: #4394ea;
  background-color: #fff;
  border: 1px solid #cfd0d7;
  overflow: visible;
  cursor: pointer;
  transition: color, border-color, background 0.2s ease-in-out;
  font-size: 16px;

  &:hover {
    border-color: #4394ea;
  }
  &:active {
    background: #4394ea;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
