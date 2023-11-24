import NotificationHeader from "../../utils/NotificationHeader";
import imageGenerator from "../../assets/images/image-generator.png";
const AiImageGenerator = () => {
  return (
    <div className='grid md:grid-cols-2 gap-14 '>
      <div className='left-side border-1 rounded-2xl p-8 bg-white'>
        <div className='notf-btn text-black tex-left flex justify-start'>
          <NotificationHeader
            name='Unleash your creativity'
            content='AI'
            bgColor={"var(--notification-btn-color)"}
            textColor='#333'
          />
        </div>
        <h1 className='text-4xl py-6'>
          Create eye-catching images and graphics.
        </h1>
        <p className='text-lg'>
          Generate high qualtity images for a wide range of applications
        </p>
      </div>
      <div className='right-side text-center p-8 border-1 rounded-2xl bg-slate-200'>
        <div className='box-border'>
          <img
            className='right-side-img w-full h-full transition-all duration-300 rounded-xl hover:scale-105'
            src={imageGenerator}
            alt='image-generator-img'
          />
        </div>
        <div className='pt-6 text-black'>
          <b className='text-bold text-lg'>Imagine, Genearate, Publish.</b>
          <small className='text-xs block pt-1'>Powered by Dall-E.</small>
        </div>
      </div>
    </div>
  );
};

export default AiImageGenerator;
