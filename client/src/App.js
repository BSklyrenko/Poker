import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { MainWrapper } from "style/MainWrapper";
import { Table } from "components/Table";
import { createGlobalStyle } from "styled-components";
import { config } from "config";

const GlobalStyle = createGlobalStyle`
  body, button {
    font-family: Arial, Helvetica, sans-serif, sans-serif;
  }
`;

const App = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    (async function() {
      const res = await fetch(`${config.host}/config`);
      console.log(res);
    })();
  });

  function connectToServer() {
    const socket = io(config.host);

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
