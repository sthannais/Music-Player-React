import "./components/ListSpotify.css";
import ListSpotify from "./components/ListSpotify";
import { Songs } from "./Context";
import { DataSongs } from "./helper/data";
import Player from "./components/Player";
import { useEffect, useState } from "react";

const App = () => {
  const [isData, setData] = useState(false);
  const [song, setSong] = useState([]);
  const [song2, setSong2] = useState([]);

  const dataSongsInfo = async () => {
    const result = await DataSongs();
    console.log("song2", song2);
    setSong(result[0]);
    setSong2(result);
    setData(true);
  };

  useEffect(() => {
    dataSongsInfo();
  }, []);

  const handleSetSong = (idSong) => {
    const song = song2.find((song) => song.id === idSong);
    setSong(song);
  };
  return isData ? (
    <>
      <Songs.Provider value={{ song2, song, handleSetSong }}>
        <div className="App bg-dark">
          <ListSpotify />
        </div>
        <Player />
      </Songs.Provider>
    </>
  ) : (
    <h1>Wait...</h1>
  );
};

export default App;
