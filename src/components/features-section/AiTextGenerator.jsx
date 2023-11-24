import NotificationHeader from "../../utils/NotificationHeader";
import textGenerator from "../../assets/images/text-generator.png";
const AiTextGenerator = () => {
  return (
    <div className='grid md:grid-cols-2 gap-14 '>
      <div className='left-side border-1 rounded-2xl p-8 bg-white'>
        <div className='notf-btn text-black flex justify-start'>
          <NotificationHeader
            name="Say goodbye to writer's block"
            content='AI'
            bgColor={"var(--notification-btn-color)"}
            textColor='#333'
          />
        </div>
        <h1 className='text-4xl py-6'>Intelligent Writing Assistant</h1>
        <p className='text-lg'>
          Writer is designed to help you{" "}
          <b className='font-bold'>generate high-quality texts instantly</b>,
          without breaking a sweat. With our intuitive interface and powerful
          features, you can easily edit, export or publish your AI-generated
          result.
        </p>
      </div>
      <div className='right-side text-center p-8 border-1 rounded-2xl bg-purple-200'>
        <div className='box-border'>
          <img
            className='right-side-img w-full h-full transition-all duration-300 rounded-xl hover:scale-105'
            src={textGenerator}
            alt='text-generator-img'
          />
        </div>
        <div className='pt-6 text-black'>
          <b className='text-bold text-lg'>Generate, edit, export.</b>
          <small className='text-xs block pt-1'>Powered by OpenAI.</small>
        </div>
      </div>
    </div>
  );
};

export default AiTextGenerator;
