import jibyteWriters from "../assets/images/jibyte-writers.png";
const LatestBlogs = () => {
  return (
    <section className='text-center my-20 pb-12 pt-10 px-10'>
      <button className='bg-purple-200 bg-opacity-80 rounded-lg text-sm px-3 py-0.5'>
        Stay up-to-date
      </button>
      <h1 className='text-2xl md:text-6xl py-6'>Latest Blogs</h1>
      <div className='w-4/5 m-auto md:m-0 md:w-30perc border-1 rounded-xl overflow-hidden'>
        <div className='h-60 overflow-hidden'>
          <img className='w-full' src={jibyteWriters} alt='' />
        </div>
        <div className='flex text-black py-4 justify-between items-center px-4 text-xs font-bold'>
          <span>13 Aug</span>
          <hr className='w-1/2 bg-slate-400' />
          <span>Admin</span>
        </div>
        <div className='bg-white'>
          <p className='text-2xl text-left px-3 text-black font-serif font-semibold'>
            Enhancing Your Writing Capabilities: Using Jibyte AI as Your Trusty
            Writing Assistant
          </p>
        </div>
        <button className='text-left font-semibold flex items-center px-4 text-black text-sm my-4'>
          Read More <span className='text-xl px-0.5 font-light'>&gt;</span>
        </button>
      </div>
      <div>
        <span className='mx-2 bg-green-100 px-2 py-1.5 rounded-lg text-green-600'>
          +
        </span>
        <button className='show-more-btn my-12  p-1.5 text-sm font-semibold rounded-lg bg-green-100 text-green-600'>
          Show More
        </button>
      </div>
    </section>
  );
};

export default LatestBlogs;
