import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function Player() {
  const { song, handleSetSong } = useContext(Songs);
  console.log(song);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song ? "https://assets.breatheco.de/apis/sound/" + song.url : null}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}
