import React, { useState } from 'react';

function Project({ title, description, imageUrl, githubLink }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleClick = () => {
    window.open(githubLink, '_blank');
  };

  return (
    <div
      className="project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      {showDescription && <p>{description}</p>}
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default Project;
