import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { MainWrapper } from "style/MainWrapper";
import { Table } from "components/Table";
import { createGlobalStyle } from "styled-components";
import { config } from "config";
import { ConnectButton } from "style/ConnectButton";

const GlobalStyle = createGlobalStyle`
  body, button {
    font-family: Arial, Helvetica, sans-serif, sans-serif;
  }
`;

const App = () => {
  // const [socket, setSocket] = useState(null);
  const [cards, setCards] = useState(null);
  const [game, setGame] = useState(null);
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    if (!cards) {
      fetch(`${config.host}/config`)
        .then(response => {
          return response.json();
        })
        .then(config => {
          setCards(config);
        });
    }
  });

  function connectToServer() {
    const socket = io(config.host);

    socket.on("connect", () => {
      if (socket.connected) {
        console.log("%cEstablished socket connection", "color: red;");
        // setSocket(socket);
      }
    });

    socket.on("setId", data => {
      setPlayerId(data);
    });

    socket.on("frame", data => {
      setGame(data);
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainWrapper>
        {game ? (
          <Table game={game} playerId={playerId} />
        ) : (
          <ConnectButton onClick={connectToServer}>
            Connect to server
          </ConnectButton>
        )}
      </MainWrapper>
    </React.Fragment>
  );
};

export default App;
