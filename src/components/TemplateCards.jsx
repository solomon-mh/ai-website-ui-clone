import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const TemplateCards = ({ cardContent }) => {
  return (
    <div
      key={cardContent.id}
      className='template-card border-1 pt-8 pb-2 rounded-xl px-4 text-left bg-zinc-100 bg-opacity-40'
    >
      <div className='template-icon text-xl py-2 mx-6 px-4 border-1 w-fit bg-gray-300 rounded-lg transition-all duration-300'>
        <FontAwesomeIcon icon={cardContent.icon} />
      </div>
      <h2 className='text-xl font-semibold text-black py-2'>
        {cardContent.title}
      </h2>
      <p className='text-sm pb-2'>{cardContent.content}</p>
    </div>
  );
};

export default TemplateCards;
