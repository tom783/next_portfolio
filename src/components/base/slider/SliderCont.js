import React from 'react';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import {useSelector} from 'react-redux';

function SliderCont(props) {
  const {
    slideInfo = [],
    width = '100%',
    height = '400px',
    type = 'slide',
  } = props;
  
  const {slider} = useSelector(state => state);
  const {viewSlideIdx} = slider;

  const slideItem = slideInfo.map( i => {
    return (
      <li className="slider_item" key={i.id}>
        <img className="img" src={i.img} />
        <span className="title">{i.title}</span>
        <span className="subtitle">{i.subtitle}</span>
      </li>
    )
  });

  return (
    <Styled.Slider {...props} viewSlideIdx={viewSlideIdx}>
      <ul className={`${type}`}>
        {slideItem}
      </ul>
    </Styled.Slider>
  );
}

const Styled = {
  Slider: styled.div`
    overflow: hidden;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};

    & > ul.slide {
      width: ${props => props.width ? `calc(${props.width} * ${props.slideInfo.length})` : `calc(100% * ${props.slideInfo.length})`};
      height: ${props => props.height ? props.height : '100%'};
      font-size: 0;
      transition: transform 0.3s linear;
      transform: ${props => `translateX(calc(-100% / ${props.slideInfo.length} * ${props.viewSlideIdx}))`};

      .slider_item {
        display: inline-block;
      }
    }
    
    & > ul.fade {
      width: 100%;
      height: 100%;
      position: relative;

      .slider_item {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        transition: opacity 0.3s ease-in;
        
        &:nth-of-type(${props => props.viewSlideIdx+1}){
          opacity: 1;
        }
      }
    }

    .slider_item {
      width: ${props => props.width ? props.width : `calc(100% / ${props.slideInfo.length})`};
      height: ${props => props.height ? props.height : '100%'};
      
      & .img {
        display: block;
        width: 100%;
      }
      
      & .title {
        display: block;
        font-size: 14px;
      }

      & .subtitle {
        display: block;
        font-size: 12px;
      }
    }
  `,
}

export default SliderCont;