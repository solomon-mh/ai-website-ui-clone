import { useState } from "react";
import NotificationHeader from "../utils/NotificationHeader";
import { faqs } from "../data/faq";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section
      id='FAQ'
      className='text-center w-90perc m-auto my-20 pb-12 pt-10 px-4 md:px-10 border-2 rounded-4xl'
    >
      <NotificationHeader name='FAQ' content='Help Center' textColor='purple' />
      <div className='py-4 md:w-3/4 m-auto px-8'>
        <h1 className='text-2xl md:text-5xl py-6'>Have a question?</h1>
        <p className='text-sm md:text-xl'>
          Our support team will get assistance from AI-powered suggestions,
          making it quicker than ever to handle support requests.
        </p>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div key={faq.id} className='faq-item md:mx-24'>
            <div
              className='faq-question my-4 py-4 pb-6 border-b-2 flex justify-between'
              onClick={() => toggleAnswer(index)}
            >
              <p className='text-black sm:text-xl'>{faq.question}</p>
              <span className='block w-8 h-8 border-1 border-gray-400 bg-white rounded-full'>
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className='faq-answer text-xs sm:text-base text-left'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
