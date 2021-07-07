import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import voiceIco from "../../assets/voice.png";

const Dictaphone = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const value = transcript;
  const onTrigger = () => {
    props.parentCallback(value);
  };

  if (!listening) {
    props.parentCallback(value);
  }

  return (
    <div>
      <button className="voiceIcon"
        onClick={() => {
          SpeechRecognition.startListening();
          onTrigger();
        }}
      >
        <img  src={voiceIco} alt="search" />
      </button>
    </div>
  );
};
export default Dictaphone;
