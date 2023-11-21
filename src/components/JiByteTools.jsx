import { jibyteTools } from "../data/jibyteTools";
const JiByteTools = () => {
  const tools = jibyteTools.map((tool) => {
    return (
      <div
        key={tool.id}
        className='bg-slate-100 border-1 rounded-3xl overflow-hidden pb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-md'
      >
        <div>
          <img src={tool.image} alt='jibyte-tools-image' />
        </div>
        <div className='px-4'>
          <h3 className='text-xl font-semibold  py-2'>{tool.title}</h3>
          <p className='text-sm py-2 pb-3'>{tool.content}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h1 className='text-6xl py-3'>Jibyte Tools.</h1>
      <p className='text-xl py-8 font-semibold'>
        Jibyte AI provides all of the tools required to create content.
      </p>
      <div className='tools-card-container grid grid-cols-3 gap-4'>{tools}</div>
    </div>
  );
};

export default JiByteTools;
