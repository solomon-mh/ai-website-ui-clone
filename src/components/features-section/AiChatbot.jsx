import NotificationHeader from "../../utils/NotificationHeader";
import chatImage from "../../assets/images/ai-chat.png";
const AiChatbot = () => {
  return (
    <div className='grid  grid-cols-2 gap-14 '>
      <div className='left-side border-1 rounded-2xl p-8 bg-white'>
        <div className='notf-btn text-black flex justify-start'>
          <NotificationHeader
            name='Intuitive / Humanlike Chatbot.'
            content='AI'
            bgColor='var(--notification-btn-color)'
            textColor='#333'
          />
        </div>
        <h1 className='text-4xl py-6'>Meet your next virtual assistant. </h1>
        <p className='text-lg'>
          Get instant answers to your questions, no matter the topic. Whether
          you’re looking to book a reservation, get product recommendations, or
          just chat about the weather, MagicAI is always ready and willing to
          help.
        </p>
      </div>
      <div className='right-side text-center p-8 border-1 rounded-2xl bg-rose-200 bg-opacity-60'>
        <div className='box-border'>
          <img
            className='right-side-img w-full h-full transition-all duration-300 rounded-xl hover:scale-105'
            src={chatImage}
            alt='chat-img'
          />
        </div>
        <div className='pt-6 text-black'>
          <b className='text-bold text-lg'>Chat, Solve, Repeat.</b>
          <small className='text-xs block pt-1'>Powered by OpenAI.</small>
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;
