import React, { useState } from "react";
import io from "socket.io-client";
import { MainWrapper } from "style/MainWrapper";
import { Table } from "components/Table";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, button {
    font-family: Arial, Helvetica, sans-serif, sans-serif;
  }
`;

const App = () => {
  const [socket, setSocket] = useState(null);

  function connectToServer() {
    const socket = io("http://localhost:7777");

    socket.on("connect", () => {
      if (socket.connected) {
        console.log("%cEstablished socket connection", "color: red;");
        setSocket(socket);
      }
    });

    socket.on("frame", data => {
      console.log(data, 1234);
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Table socket={socket} connectToServer={connectToServer} />
      </MainWrapper>
    </React.Fragment>
  );
};

export default App;
