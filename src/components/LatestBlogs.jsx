import jibyteWriters from "../assets/images/jibyte-writers.png";
const LatestBlogs = () => {
  return (
    <section className='text-center w-90perc m-auto my-20 pb-12 pt-10 px-10 border-2 rounded-4xl'>
      <button className='bg-purple-200 rounded text-sm px-2'>
        Stay up-to-date
      </button>
      <h1 className='text-2xl md:text-6xl py-6'>Latest Blogs</h1>
      <div className='w-1/4 border-1 rounded-xl p-8'>
        <div>
          <img src={jibyteWriters} alt='' />
        </div>
        <div>
          <p>
            Enhancing Your Writing Capabilities: Using Jibyte AI as Your Trusty
            Writing Assistant
          </p>
        </div>
        <button>Read More &gt;</button>
      </div>
    </section>
  );
};

export default LatestBlogs;
