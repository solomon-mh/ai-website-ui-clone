/* eslint-disable react/prop-types */
const JiByteUsersBox = ({ name, color }) => {
  const handleHover = (event) => {
    event.currentTarget.style.boxShadow = `0 10px rgba(${color}, 0.5)`;
  };

  const handleHoverOut = (event) => {
    event.currentTarget.style.boxShadow = ""; // Reset boxShadow on hover out
  };

  const fadedColor = `rgba(${parseInt(color.slice(-6, -4), 16)}, ${parseInt(
    color.slice(-4, -2),
    16
  )}, ${parseInt(color.slice(-2), 16)}, 0.1)`; // Adjust alpha value (0.1 for example)

  return (
    <div
      onMouseOver={handleHover}
      onMouseOut={handleHoverOut}
      style={{ background: fadedColor }} // Apply fadedColor
      className={`user-box flex justify-center items-center border-1 py-5 rounded-lg bg-${color} transition-all duration-300  hover:-translate-y-2`}
    >
      <div className='circle bg-white p-2 rounded-full'>
        <span
          style={{ background: color }}
          className='block w-3 h-3  rounded-full '
        ></span>
      </div>
      <div style={{ color: color }} className='user'>
        <h2 className='text-xl font-bold px-6'>{name}</h2>
      </div>
    </div>
  );
};

export default JiByteUsersBox;
