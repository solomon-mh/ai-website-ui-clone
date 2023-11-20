/* eslint-disable react/prop-types */
const NotificationHeader = ({
  name,
  content,
  bgColor = "var(--default-notification-btn-color)",
}) => {
  return (
    <div className='py-4'>
      <h6
        style={{ background: bgColor }}
        className='w-fit text-xs py-1 my-4 mx-auto flex items-center  rounded-full px-4'
      >
        <span>{name}</span>{" "}
        <span className='mx-2 border-2 rounded border-blue-900'></span>
        <span className='opacity-60'> {content}</span>
      </h6>
    </div>
  );
};

export default NotificationHeader;
