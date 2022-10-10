export const DataSongs = async () => {
  const url = "https://assets.breatheco.de/apis/sound/songs";
  const result = await fetch(url);
  return await result.json();
};
