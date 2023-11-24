/* eslint-disable react/prop-types */
import { useState } from "react";
import { templates } from "../data/templates";
import TemplateCards from "../components/TemplateCards";
const ShowMoreCards = ({ filteredTemplate }) => {
  const initialVisibleCards = 6;
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, sertVisibleCards] = useState(initialVisibleCards);
  const handleShowMore = () => {
    if (showAll) {
      sertVisibleCards(initialVisibleCards);
    } else {
      sertVisibleCards(templates.length);
    }
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <div
        className={`${!showAll ? "opacity-50" : "opacity-100"}
        card-container grid md:grid-cols-3 gap-4 my-8 transition-all duration-300`}
      >
        {filteredTemplate.slice(0, visibleCards).map((card, index) => (
          <TemplateCards key={index} cardContent={card} />
        ))}
      </div>
      <div className='text-center'>
        <span className='mx-2 bg-purple-100 px-2 py-1.5 rounded-lg text-purple-800'>
          {showAll ? "-" : "+"}
        </span>
        <button
          onClick={handleShowMore}
          className='show-more-btn my-12  p-1.5 text-sm font-semibold rounded-lg bg-purple-100 text-purple-800'
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ShowMoreCards;
