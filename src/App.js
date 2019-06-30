import React from 'react';

import Table from './containers/Table'
import Filters from './containers/Filters'

import './App.css';

function App() {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column">
          <h1 className="is-size-2 has-text-weight-bold">Footbal Player Finder</h1>
        </div>
      </div>
      <Filters />
      <Table />
    </div>
  );
}

export default App;
