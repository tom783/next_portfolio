import React from 'react';
import Head from 'next/head';
import { Provider } from "react-redux";
import store from '../store';


import BaseTemplate from '../components/base/template/BaseTemplate';

function GlobalPage(props) {
  const {
    Component
  } = props;

  return (
    <Provider store={store}>
      <Head>
        <title>next</title>
      </Head>
      <BaseTemplate>
        <Component /> 
      </BaseTemplate>
    </Provider>
  );
}

export default GlobalPage;