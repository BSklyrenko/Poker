import React from "react";
import styled from "styled-components";
import { ConnectButton } from "style/ConnectButton";

const TableArea = styled.div`
  position: relative;
  width: 800px;
  height: 360px;
  border-radius: 200px;
  border: 10px solid #8a3b0f;
  background-color: #117311;
  box-shadow: inset 0 0 10px #1c3353;
`;

export const Table = ({ socket, connectToServer }) => (
  <TableArea>
    {!socket && (
      <ConnectButton onClick={connectToServer}>Connect to server</ConnectButton>
    )}
  </TableArea>
);
