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

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'content.txt';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="typeArea-textarea-wrapper p-10">
      {isTypearea &&
        <motion.textarea
          ref={textareaRef} 
          initial={{
            opacity: 0,
            y: 120
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="outline-none focus:outline-none text-lg font-medium bg-transparent w-full h-full resize-none"
          placeholder="Start typing..."
          autoFocus
          onChange={autoResize}
          onKeyDown={playTypeSound}
          value={content}
        />
      }
      <motion.button
        initial={{
          opacity: 0,
          y: 120
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleDownload}
      >
        Download
      </motion.button>
    </div>
  );
}