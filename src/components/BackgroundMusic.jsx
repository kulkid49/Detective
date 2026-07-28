import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MUSIC_MUTED_KEY = 'detectiveMusicMuted';

function getInitialMuted() {
  return localStorage.getItem(MUSIC_MUTED_KEY) === 'true';
}

function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(getInitialMuted);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.35;
    audio.muted = isMuted;
    localStorage.setItem(MUSIC_MUTED_KEY, String(isMuted));

    const playPromise = audio.play();

    if (playPromise) {
      playPromise.catch(() => {
        setIsMuted(true);
      });
    }
  }, [isMuted]);

  function toggleMute() {
    const audio = audioRef.current;
    const nextMuted = !isMuted;

    setIsMuted(nextMuted);

    if (audio && !nextMuted) {
      audio.play().catch(() => {
        setIsMuted(true);
      });
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/det.mp3" loop preload="auto" />
      <button
        type="button"
        className="music-toggle"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        title={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  );
}

export default BackgroundMusic;
