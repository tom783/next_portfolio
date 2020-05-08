import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {Actions} from '../store/actionCreator';


function index(props) {

  return (
    <Styled.Home>
      home
    </Styled.Home>
  );
}

const Styled = {
  Home: styled.div`
    
  `,
}

export default index;