import React from 'react';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import {useSelector} from 'react-redux';

function SliderCont(props) {
  const {
    slideInfo,
    width,
    height,
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
      <ul>
        {slideItem}
      </ul>
    </Styled.Slider>
  );
}

const Styled = {
  Slider: styled.div`
    overflow: hidden;
    width: ${props => props.width ? props.width : '400px'};
    height: ${props => props.height ? props.height : '400px'};

    & > ul {
      width: ${props => props.width ? `calc(${props.width} * ${props.slideInfo.length})` : `calc(400px * ${props.slideInfo.length})`};
      height: ${props => props.height ? props.height : '400px'};
      font-size: 0;
      transition: transform 0.3s linear;
      transform: ${props => `translateX(calc(-100% / ${props.slideInfo.length} * ${props.viewSlideIdx}))`};
    }
    
    .slider_item {
      display: inline-block;
      width: ${props => props.width ? props.width : '400px'};
      height: ${props => props.height ? props.height : '400px'};
      
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