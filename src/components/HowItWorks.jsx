import { howItWorks } from "../data/howItWorks";

const HowItWorks = () => {
  const items = howItWorks.map((item) => {
    return (
      <div key={item.id} className='how-it-work'>
        <div className='how-it-work-number transition-all duration-300 text-4xl p-2 border-1 border-slate-600 rounded-full w-fit m-auto px-5 flex items-center my-12'>
          {item.id}
        </div>
        <div>
          <p className='text-white opacity-60 text-xl'>{item.content}</p>
        </div>
      </div>
    );
  });
  return (
    <section className='text-center bg-black w-90perc m-auto my-20 pb-12 pt-10 px-12 border-2 rounded-4xl'>
      <h1 className='w-3/5 opacity-80 text-white m-auto text-6xl pt-12'>
        So, how does it work?
      </h1>
      <div className=' grid grid-cols-3 gap-3 my-12'>{items}</div>
      <div className='join-link'>
        <a className='text-blue-300 opacity-60' href='#'>
          Want to see it? Join Jibyte
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
