import NotificationHeader from "../../utils/NotificationHeader";
import speechToTextImage from "../../assets/images/ai-speech.png";
const AiSpeechToText = () => {
  return (
    <div className='grid md:grid-cols-2 gap-14 '>
      <div className='left-side border-1 rounded-2xl p-8 bg-white'>
        <div className='notf-btn text-black flex justify-start'>
          <NotificationHeader
            name='Say goodbye to writer’s block.'
            content='AI'
            bgColor={"var(--notification-btn-color)"}
            textColor='#333'
          />
        </div>
        <h1 className='text-4xl py-6'>Transcribe your speech into text. </h1>
        <p className='text-lg'>
          Accurately transcribe your recordings in just minutes. With our
          user-friendly interface, you can upload your files and have them
          transcribed in a matter of clicks.
        </p>
      </div>
      <div className='right-side text-center p-8 border-1 rounded-2xl bg-orange-100'>
        <div className='box-border'>
          <img
            className='right-side-img w-full h-full transition-all duration-300 rounded-xl hover:scale-105'
            src={speechToTextImage}
            alt='speech-to-text-img'
          />
        </div>
        <div className='pt-6 text-black'>
          <b className='text-bold text-lg'>CUpload, Analyze, Generate.</b>
          <small className='text-xs block pt-1'>Powered by OpenAI.</small>
        </div>
      </div>
    </div>
  );
};

export default AiSpeechToText;
