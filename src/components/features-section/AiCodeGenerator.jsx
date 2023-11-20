import NotificationHeader from "../../utils/NotificationHeader";
import codeGenerator from "../../assets/images/code-generator.png";
const AiCodeGenerator = () => {
  return (
    <div className='grid  grid-cols-2 gap-14 '>
      <div className='left-side border-1 rounded-2xl p-8 bg-white'>
        <div className='notf-btn text-black flex justify-start'>
          <NotificationHeader
            name='The future of development.'
            content='AI'
            bgColor={"var(--notification-btn-color)"}
          />
        </div>
        <h1 className='text-4xl py-6'>
          Generate high quality code in no time.
        </h1>
        <p className='text-lg'>
          MagicAI is designed to make coding faster, easier, and more efficient
          than ever before. Whether you’re a seasoned developer or a coding
          newbie, our tool will help you streamline your coding process and get
          your projects up and running in no time.
        </p>
      </div>
      <div className='right-side text-center p-8 border-1 rounded-2xl bg-blue-100'>
        <div className='box-border'>
          <img
            className='right-side-img w-full h-full transition-all duration-300 rounded-xl hover:scale-105'
            src={codeGenerator}
            alt='code-generator-img'
          />
        </div>
        <div className='pt-6 text-black'>
          <b className='text-bold text-lg'>
            and more efficient than ever before. Whether you’re a seasoned
            developer or a coding newbie
          </b>
          <small className='text-xs block pt-1'>Fix. Improve. Generate.</small>
        </div>
      </div>
    </div>
  );
};

export default AiCodeGenerator;
