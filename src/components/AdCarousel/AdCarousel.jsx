import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  margin: 50px 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  height: 250px;
  transition: transform 2s ease;
`;

const CarouselItem = styled.div`
  flex: 0 0 1150px;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameSpan = styled.h1`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2rem;
`;

const CarouselListeners = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  position: relative;
`;

const Indicator = styled.button`
  padding: 0;
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 100%;
  background-color: white;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#57B0BC' : 'white')};
`;

function AdCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer>
      <CarouselTrack
        style={{ transform: `translateX(-${currentSlide * 1150}px)` }}
      >
        {items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CarouselItem key={index}>
            <NameSpan>{item.name}</NameSpan>
            <CarouselImage src={item.imageUrl} alt={item.name} />
          </CarouselItem>
        ))}
      </CarouselTrack>
      <CarouselListeners>
        <IndicatorContainer>
          {items.map((_, index) => (
            <Indicator
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type='button'
              active={index === currentSlide}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </IndicatorContainer>
      </CarouselListeners>
    </CarouselContainer>
  );
}

export default AdCarousel;
