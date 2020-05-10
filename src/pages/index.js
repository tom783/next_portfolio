import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {Actions} from '../store/actionCreator';

import {SliderCont} from '../components/base/slider';

const imgList = [
  {
    id: '1',
    img: 'https://cdn.pixabay.com/photo/2020/04/26/06/29/spotted-owlet-5093773__340.jpg',
    title: '새',
    subtitle: '부엉이',
  },
  {
    id: '2',
    img: 'https://cdn.pixabay.com/photo/2020/05/02/20/10/lonely-5122894__340.jpg',
    title: '바다',
    subtitle: '풍경',
  },
  {
    id: '3',
    img: 'https://cdn.pixabay.com/photo/2020/04/21/15/27/these-yahyal-waterfalls-5073464__340.jpg',
    title: '폭포',
    subtitle: '풍경',
  },
]

function index(props) {

  const testF = ({type}) => e => {
    if(type === 'left'){
      Actions.slideLeft(imgList.length);
    }
    if(type === 'right'){
      Actions.slideRight(imgList.length);
    }
  }

  return (
    <Styled.Home>
      home
      <div className="slide_div">
        <SliderCont
          slideInfo={imgList}
        />
      </div>
      <button onClick={testF({type: 'left'})}>left</button>
      <button onClick={testF({type: 'right'})}>right</button>
    </Styled.Home>
  );
}

const Styled = {
  Home: styled.div`
    .slide_div {
      width: 400px;
      height: 400px;
    }
  `,
}

export default index;