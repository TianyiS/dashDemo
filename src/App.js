import React from 'react';
import PieChart from './pieChart';
import ScatterChart from './scatterChart';
import BarChart from './barChart';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ScatterChart></ScatterChart>
        <PieChart></PieChart>
        <BarChart></BarChart>
      </React.Fragment>
    );
  }
}

export default App;
