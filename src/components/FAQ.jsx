import { useState } from "react";
import NotificationHeader from "../utils/NotificationHeader";
const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "Question 1",
      answer: "Answer to Question 1",
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Answer to Question 2",
    },
    // Add more FAQ items as needed
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className='text-center w-90perc m-auto my-20 pb-12 pt-10 px-10 border-2 rounded-4xl'>
      <NotificationHeader name='FAQ' content='Help Center' textColor='purple' />
      <div className='py-4 w-3/4 m-auto px-8'>
        <h1 className='text-2xl md:text-5xl py-6'>Have a question?</h1>
        <p className='text-lg md:text-xl'>
          Our support team will get assistance from AI-powered suggestions,
          making it quicker than ever to handle support requests.
        </p>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <div key={faq.id} className='faq-item'>
            <div className='faq-question' onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className='faq-answer'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
