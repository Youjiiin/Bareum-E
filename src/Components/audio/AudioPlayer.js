import { useEffect, useState } from "react";
import listen from "../../assets/audioTest.m4a";
import style from "./AudioPlayer.module.css";
import playImg from "../../assets/listen.png";
import pause from "../../assets/pause.png";

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
    <div onClick={toggle} className={style.wrapper}>
      {playing ? 
        <div className={style.listen_btn}>
          <img src={pause} alt="pause"/>
        </div>
        :
        <div className={style.listen_btn}>
          <img src={playImg} alt="playBtn"/>
        </div>}
        <p>들어보기</p>
    </div>
  );
};

export default AudioPlayer;