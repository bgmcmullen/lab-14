'use strict';

let canvasElem = document.getElementById('chart')

// Instantiate a new AppState
let state = new AppState();

// Load vote data from localStorage.
state.loadItems();


function renderChart() {
  let votesArray = [];
  let viewsArray = [];
  let namesArray = [];
  for(let i = 0; i < state.allProducts.length; i++){

    votesArray.push(state.allProducts[i].timesClicked);
    viewsArray.push(state.allProducts[i].timesShown);
    namesArray.push(state.allProducts[i].name);
  }
  let chartObj = {
    type: 'bar',
    data: {
      labels: namesArray,
      datasets: [{
        label: 'Votes',
        data: votesArray,
        backgroundColor: 'blue'
      },
      {
        label: 'Views',
        data: viewsArray,
        backgroundColor: 'red'
      }
    ]
  },
    options: {

      scales: {
        y: {
          ticks: {
            color: 'black'
          },
          beginAtZero: true
        },
        x: {
          ticks: {
            color: 'black'
          },
        }
      }
    }
  }
  new Chart(canvasElem, chartObj);
  console.log(chartObj);
}

renderChart();
