import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import Link from 'next/link';

import {HamburgerMenu} from '../menu';

function BaseTemplate(props) {
  const {children} = props;

  const lintInfo = [
    {
      title: 'HOME',
      link: '/'
    },
    {
      title: 'ABOUT',
      link: '/about'
    },
    {
      title: 'WORKS',
      link: '/works'
    },
    {
      title: 'NOTICE',
      link: '/notice'
    },
  ]

  const menuList = lintInfo.map((i, idx) => {
    return (
      <li key={idx}><Link href={i.link}><a>{i.title}</a></Link></li>
    )
  });

  return (
    <>
    <Styled.GlobalStyles />
    <Styled.BaseTemplate>
      <header>
        <h1 className="logo">
          LOGO
        </h1>
        <HamburgerMenu>
          <ul>
            {menuList}
          </ul>
        </HamburgerMenu>
      </header>
      <main>
        {children}
      </main>
    </Styled.BaseTemplate>
    </>
  );
}

const Styled = {
  BaseTemplate: styled.div`
    position: relative;

    header { 
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      padding: 0 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        height: 0;
        background-color: #ffa502;
        transition: height 0.3s ease-in;
        z-index: -1;
      }

      &.on:after {
        height: 80px;
      }

      .logo {
        display: flex;
        align-content: center;
      }
    }
  
  `,
  GlobalStyles: createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    li {
      list-style: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `,
}

export default BaseTemplate;