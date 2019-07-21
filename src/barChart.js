import React from 'react';
import Plot from 'react-plotly.js';

class BarChart extends React.Component {
  render() {
    return (
        <Plot
        data={[
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                name: 'SF Zoo',
                type: 'bar'
            },
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [12, 18, 29],
                name: 'LA Zoo',
                type: 'bar'
            }
        ]}
      />
    );
  }
}

export default BarChart;