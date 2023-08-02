import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import testIMG from '../../assets/images/logo.png';

const items = [
  {
    name: 'AD #1',
    imageUrl: testIMG,
  },
  {
    name: 'AD #2',
    imageUrl: testIMG,
  },
  {
    name: 'AD #3',
    imageUrl: testIMG,
  },
  {
    name: 'AD #4',
    imageUrl: testIMG,
  },
  {
    name: 'AD #5',
    imageUrl: testIMG,
  },
];

const useStyles = makeStyles({
  carouselContainer: {
    width: '1150px',
    overflow: 'hidden',
    borderRadius: '15px',
    margin: '50px 0',
  },
  carouselTrack: {
    display: 'flex',
    height: '250px',
    transition: 'transform 2s ease',
  },
  carouselItem: {
    flex: '0 0 1150px',
    position: 'relative',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  nameSpan: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '2rem',
  },
  carouselListeners: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  indicatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-50px',
    position: 'relative',
  },
  indicator: {
    padding: '0',
    width: '10px',
    height: '10px',
    border: 'none',
    borderRadius: '100%',
    backgroundColor: 'white',
    margin: '5px',
    cursor: 'pointer',
  },
  activeIndicator: {
    backgroundColor: '#57B0BC',
    width: '10px',
    height: '10px',
  },
});

function AdCarousel() {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  //   const handlePrevSlide = () => {
  //     setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  //   };

  //   const handleNextSlide = () => {
  //     setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  //   };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={classes.carouselContainer}>
      <div
        className={classes.carouselTrack}
        style={{ transform: `translateX(-${currentSlide * 1150}px)` }}
      >
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className={classes.carouselItem}>
            <h1 className={classes.nameSpan}>{item.name}</h1>
            <img
              src={item.imageUrl}
              alt={item.name}
              className={classes.carouselImage}
            />
          </div>
        ))}
      </div>
      <div className={classes.carouselListeners}>
        {/* <button type='button' onClick={handlePrevSlide}>
          Previous
        </button> */}
        <div className={classes.indicatorContainer}>
          {items.map((_, index) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type='button'
              className={`${classes.indicator} ${
                index === currentSlide ? classes.activeIndicator : ''
              }`}
              onClick={() => handleIndicatorClick(index)}
            >
              {' '}
            </button>
          ))}
        </div>
        {/* <button type='button' onClick={handleNextSlide}>
          Next
        </button> */}
      </div>
    </div>
  );
}

export default AdCarousel;
