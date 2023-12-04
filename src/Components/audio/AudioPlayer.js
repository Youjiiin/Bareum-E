import { useEffect, useState } from "react";
import listen from "../../assets/audioTest.m4a";
import style from "./AudioPlayer.module.css";

const useAudio = (listen) => {
    const [audio] = useState(new Audio(listen));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const AudioPlayer = () => {
  const [playing, toggle] = useAudio(listen);

  return (
    <div>
      <button onClick={toggle} className={style.listen_btn}>{playing ? "멈추기" : "듣기"}</button>
    </div>
  );
};

export default AudioPlayer;