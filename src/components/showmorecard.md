import React, { useState } from 'react';

const Card = ({ content }) => {
return (
<div className="card">
{content}
</div>
);
};

const ShowMoreCards = () => {
const initialVisibleCards = 5; // Initial number of visible cards
const [showAll, setShowAll] = useState(false);
const [visibleCards, setVisibleCards] = useState(initialVisibleCards);

const cards = []; // Replace this with your array of card content

const handleShowMore = () => {
if (showAll) {
setVisibleCards(initialVisibleCards);
} else {
setVisibleCards(cards.length);
}
setShowAll(!showAll);
};

return (
<div className="card-container">
{cards.slice(0, visibleCards).map((cardContent, index) => (
<Card key={index} content={cardContent} />
))}
<button onClick={handleShowMore} className="show-more-button">
{showAll ? 'Show Less' : 'Show More'}
</button>
</div>
);
};

export default ShowMoreCards;


<!-- styling -->

.card-container {
max-height: 800px; /_ Adjust this height as needed _/
overflow: hidden;
position: relative;
}

.card {
background-color: #fff;
margin: 10px 0;
padding: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /_ Shadow effect _/
transition: box-shadow 0.3s ease; /_ Smooth transition for the shadow _/
}

.show-more-button {
display: block;
margin: 20px auto;
padding: 10px 20px;
border: none;
background-color: #3498db;
color: #fff;
border-radius: 4px;
cursor: pointer;
}

.show-more-button:hover {
background-color: #2980b9;
}

/_ Adjust the shadow effect when trimming the content _/
.card-container:not(:last-child) .card {
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
