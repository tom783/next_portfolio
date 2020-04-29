import React from 'react';
import styled from 'styled-components';
import {useImmer} from 'use-immer';

const initState = {
  HamburgerMenu: {
    on: false
  }
}

function HamburgerMenu(props) {
  const {
    _width,
    _bgColor,
    _color,
    _listGap,
  } = props;

  const [valuse, setValuse] = useImmer(initState);

  const {
    HamburgerMenu: {on}
  } = valuse;

  const handleToggle = () => {
    setValuse(draft => {
      draft.HamburgerMenu.on = !valuse.HamburgerMenu.on;
    });
  }

  return (
    <Styled.HamburgerMenu {...props}>
      <button 
        className={`menu_bar ${on ?'on': ''}`}
        onClick={handleToggle}
      >
        <span className="btn_line"></span>
      </button>
      <div className={`menu ${on ?'on': ''}`}>
        {props.children}
      </div>
    </Styled.HamburgerMenu>
  );
}

const Styled = {
  HamburgerMenu: styled.div`
    .menu_bar {
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      z-index: 10;
      padding: 0;
      
      .btn_line {
        width: 100%;
        height: 2px;
        background-color: #2f3542;
      }
      &:focus {
        outline: none;        
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        height: 2px;
        background-color: #2f3542;
        transition: width 0.3s ease-out;
      }

      &:before {
        left: 0;
        top: 0;
        width: 100%;
      }
      &:hover:before {
        width: 80%;
      }

      &:after {
        bottom: 0;
        right: 0;
        width: 80%;
      }
      &:hover:after {
        width: 100%;
      }

      
      &.on {
        .btn_line{
          display: none;
        }

        &:before,
        &:after {
          transition: transform 0.3s ease-out;
          background-color: #ffa502;
        }

        &:before {
          left: 0;
          top: 50%;
          width: 100%;
          transform: rotate(45deg);
        }
        &:hover:before {
          width: 100%;
        }

        &:after {
          left: 0;
          right: auto;
          bottom: 50%;
          width: 100%;
          transform: rotate(-45deg);
        }
        &:hover:after {
          width: 100%;
        }
      }
    }

    .menu {
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      right: ${props => props._width? `-${props._width}` : '-10%'};
      width: ${props => props._width? props._width : '10%'};
      height: 100vh;
      background-color: ${props => props._bgColor? props._bgColor : '#2f3542'};
      transition: transform 0.3s ease-out;
      color: ${props => props._color? props._color : '#ffa502'};
      z-index: 9;

      &.on {
        transform: translateX(-100%);
      }

      ul {
        li {

        }

        li + li {
          margin-top: ${props => props._listGap? props._listGap : '10px'};
        }
      }
    }
  `,
}

export default HamburgerMenu;