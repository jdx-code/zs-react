import React, { useState } from 'react';
import topArrow from '../assets/topArrow.svg'

const UpArrowIcon = () => (
  <img src={topArrow} />
);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add a scroll event listener to show/hide the button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    isVisible && (
      <button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full"
        onClick={scrollToTop}
      >
        <UpArrowIcon />
      </button>
    )
  );
};

export default ScrollToTopButton;
