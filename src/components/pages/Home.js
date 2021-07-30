import React, { Fragment } from 'react';
import Search from '../countries/Search';
import Countries from '../countries/Countries';

function Home() {
  return (
    <div>
      <Fragment>
        <Search />
        <Countries />
      </Fragment>
      

    </div>
  )
}

export default Home
