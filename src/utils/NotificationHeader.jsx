/* eslint-disable react/prop-types */
const NotificationHeader = ({
  name,
  content,
  bgColor = "var(--default-notification-btn-color)",
  textColor = "var(--notification-default-text-color)",
}) => {
  return (
    <div className='py-4'>
      <h6
        style={{ background: bgColor }}
        className='w-fit text-xs py-1 my-4 mx-auto flex items-center rounded-md px-4'
      >
        <span
          style={{ color: textColor }}
          className='text-blue-900 font-semibold'
        >
          {name}
        </span>
        <span className='mx-2 border-2 rounded border-blue-900'></span>
        <span
          style={{ color: textColor }}
          className='text-blue-800 font-semibold opacity-60'
        >
          {content}
        </span>
      </h6>
    </div>
  );
};

export default NotificationHeader;
