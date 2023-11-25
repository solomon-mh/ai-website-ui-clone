/* eslint-disable react/prop-types */
const JiByteUsersBox = ({ name, color }) => {
  const fadedColor = `rgba(${parseInt(color.slice(-6, -4), 16)}, ${parseInt(
    color.slice(-4, -2),
    16
  )}, ${parseInt(color.slice(-2), 16)}, 0.1)`;
  return (
    <div
      style={{
        background: fadedColor,
      }}
      className='user-box flex justify-center items-center border-1 border-slate-50 py-5 rounded-lg transition-all duration-300  hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100'
    >
      <div className='circle bg-white p-2 rounded-full'>
        <span
          style={{ background: color }}
          className='block w-3 h-3  rounded-full '
        ></span>
      </div>
      <div className='user'>
        <h2 style={{ color: color }} className='text-xl font-bold px-6'>
          {name}
        </h2>
      </div>
    </div>
  );
};

export default JiByteUsersBox;
