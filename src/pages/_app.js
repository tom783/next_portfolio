import React from 'react';
import Head from 'next/head';

import BaseTemplate from '../components/base/template/BaseTemplate';

function GlobalPage(props) {
  const {
    Component
  } = props;

  return (
    <>
      <Head>
        <title>next</title>
      </Head>
      <BaseTemplate>
        <Component /> 
      </BaseTemplate>
    </>
  );
}

export default GlobalPage;