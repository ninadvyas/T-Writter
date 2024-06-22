import { useContext } from "react"
import { TypewriterContext } from "../contexts/typecontext"

export function Sound() {
  const { keySound, setKeySound } = useContext(TypewriterContext);
  return (
    <div className="key-sound-select-container mb-3 scale-125 fixed bottom-4 left-1/2 -translate-x-1/2 p-2 bg-white gap-2 flex flex-row items-center justify-end rounded-lg">
      <KeySoundOption
        selected={keySound === "subtle"}
        onClick={(e) => {
          e.preventDefault();
          setKeySound("subtle");
          const subtleAudio = new Audio('/sounds/subtlesoundkey.wav');
          subtleAudio.volume = 0.4;
          subtleAudio.play();
        }}
      >
        Subtle
      </KeySoundOption>
      <KeySoundOption
        selected={keySound === "hard"}
        onClick={(e) => {
          e.preventDefault();
          setKeySound("hard");
          const hardAudio = new Audio('/sounds/hardsoundkey.wav');
          hardAudio.volume = 0.4;
          hardAudio.play();
        }}
      >
        Hard
      </KeySoundOption>
      <TypewriterReset />
    </div>
  );
}

function KeySoundOption({ className, selected = false, ...args }: React.ButtonHTMLAttributes<HTMLButtonElement> & { selected: boolean }) {
  return <button className={`text-xs px-4 py-2 rounded-md shadow-sm hover:scale-95 active:scale-90 transition-all ${selected ? "bg-emerald-500 text-white" : " bg-blue-500 text-white"} ${className || ""}`} {...args} />
}

function TypewriterReset() {
  const { content, setContent, setIsTypearea } = useContext(TypewriterContext);
  return <button className="text-xs px-4 py-2 rounded-md shadow-sm text-white bg-red-500 hover:scale-95 transition-all active:scale-90 disabled:hover:scale-100 disabled:active:scale-100 disabled:cursor-not-allowed disabled:opacity-30"
    onClick={(e) => {
      e.preventDefault();
      const resetAudio = new Audio('/sounds/typewritterresert.wav');
      resetAudio.volume = 0.4;
      resetAudio.play();
      setContent('' as string);
      setIsTypearea(false);
      setTimeout(() => {
        setIsTypearea(true);
      }, 100);
    }}
    disabled={!content}
  >{"Clear"}</button>
}