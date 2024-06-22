import { useContext, useEffect, useRef } from "react";
import { TKeySound, TypewriterContext } from "../contexts/typecontext";
import { motion } from 'framer-motion';

const KeySoundPath: Record<TKeySound, string> = {
  "hard": "/sounds/hardsoundkey.wav",
  "subtle": "/sounds/subtlesoundkey.wav"
}

export default function Typearea() {
  const { keySound, content, setContent, isTypearea } = useContext(TypewriterContext);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const playTypeSound = () => {
    const soundPath: string = KeySoundPath[keySound];
    const audio = new Audio(soundPath);
    audio.play();
    audio.volume = 0.3;
  };

  const autoResize = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      setContent(textarea.value);
    }
  };

  useEffect(() => {
    autoResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="typeArea-textarea-wrapper p-10">
      {isTypearea &&
        <motion.textarea
          ref={textareaRef} 
          initial={{
            opacity: 0 as number,
            y: 120 as number
          }}
          animate={{
            opacity: 1 as number,
            y: 0 as number
          }}
          className="outline-none focus:outline-none text-lg font-medium bg-transparent w-full h-full resize-none"
          placeholder="Start typing..."
          autoFocus
          onChange={autoResize}
          onKeyDown={playTypeSound}
          value={content}
        />
      }
    </div>
  );
}
