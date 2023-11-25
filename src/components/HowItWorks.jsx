import { howItWorks } from "../data/howItWorks";

const HowItWorks = () => {
  const items = howItWorks.map((item) => {
    return (
      <div key={item.id} className='how-it-work'>
        <div className='how-it-work-number transition-all duration-300 text-4xl p-2 border-1 border-slate-600 rounded-full w-fit m-auto px-5 flex items-center my-12'>
          {item.id}
        </div>
        <div className='m-auto px-8 sm:w-4/5 md:w-full md:px-0'>
          <p className='text-white opacity-60 text-xl'>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <section
      id='HowItWorks'
      className='text-center mx-6 bg-black sm:m-auto my-20 pb-12 pt-10 border-2 rounded-4xl sm:w-4/5 lg:w-90perc'
    >
      <h1 className='md:w-3/5 text-white m-auto text-5xl sm:text-6xl pt-12'>
        So, how does it work?
      </h1>
      <div className='grid px-12 md:grid-cols-3 gap-3 my-12'>{items}</div>
      <div className='join-link'>
        <a className='text-blue-300 opacity-60' href='#'>
          Want to see it? Join Jibyte
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
