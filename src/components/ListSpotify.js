import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSpotify() {
  const { song2, handleSetSong, song } = useContext(Songs);

  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(idSong);
  };
  useEffect(() => {
    setidSong(song.id);
  }, [song]);
  return (
    <table
      className="table-auto table table-dark table-hover"
      style={{ width: "100%" }}
    >
      <tbody>
        {song2.map((song, index) => (
          <tr
            key={index}
            className={`p-3 mb-2 bg-dark text-white border-top ${
              idSong === song.id && "p-3 mb-2 bg-dark text-white border-top"
            }`}
            onClick={() => handlePlaySong(song.id)}
          >
            <td className="text-center">{index + 1}</td>
            <td>{song.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
