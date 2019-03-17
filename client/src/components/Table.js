import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as ramda from "ramda";

const TableArea = styled.div`
  position: relative;
  width: 800px;
  min-width: 800px;
  height: 360px;
  border-radius: 200px;
  border: 10px solid #8a3b0f;
  background-color: #117311;
  box-shadow: inset 0 0 10px #1c3353;
`;

export const Table = ({ game, playerId, connectToServer }) => {
  const [playersAmount, setPlayersAmount] = useState(0);
  const [playersPosition, setPlayerPosition] = useState([
    { position: 0, player: null },
    { position: 1, player: null }
  ]);

  const { players } = game;
  const playersIds = ramda.keys(players);

  if (playersIds.length !== playersAmount) {
    const newPlayersPositions = ramda.clone(playersPosition);

    if (playersIds.length > playersAmount) {
      playersIds.forEach(id => {
        if (!playersPosition.filter(({ player }) => player === id).length) {
          const firstEmptyPositionIndex = ramda.findIndex(
            ({ player }) => !player,
            newPlayersPositions
          );

          if (newPlayersPositions[firstEmptyPositionIndex]) {
            newPlayersPositions[firstEmptyPositionIndex].player = id;
          }
        }
      });
    }

    setPlayersAmount(playersIds.length);
    setPlayerPosition(newPlayersPositions);
  }

  console.log(playersPosition);
  return <TableArea />;
};
