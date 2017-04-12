const ADD_DATASET = "ADD_DATASET";
const CREATE_CHART = "CREATE_CHART";
const SET_ACTIVE_CHART_INDEX = "SET_ACTIVE_CHART_INDEX";

const initialState = {
  activeChartIndex: 0,
  charts: [{
  // Labels corresponding to the corners of the chart.
  labels: [ "Red", "Blue", "Yellow", "Green", "Purple", "Orange" ]
  // The name of the chart
, name: "Example Chart"
  // The data required for rendering values to the chart
, datasets: [
		{
			  // The name of the dataset
			  label: "My First dataset"
			  // Each of these numbers corresponds to one of the labels above,
			  // based on index
			, data: [65, 59, 90, 81, 56, 55, 40]
		}
		, {
			  label: "My Second dataset"
			, data: [28, 48, 40, 19, 96, 27, 100]
		}
	]
}]
};

// Reducer
export default function chart(state=initialState, action) {
    switch(action.type) {
      case ADD_DATASET: {
			const { activeChartIndex, charts } = state;
			const activeChart = charts[ activeChartIndex ];
			return {
				  activeChartIndex,
				  charts: [...charts.slice( 0, activeChartIndex ),
					 Object.assign({}, activeChart,
						 { datasets: [ ...activeChart.datasets, action.dataset ] }
					),
					 ...charts.slice( activeChartIndex + 1, charts.length )
				]
			}
		}
      case CREATE_CHART:
        return {
          activeChartIndex: 0,
          charts: [action.chart, ...state.charts]
        };
      case SET_ACTIVE_CHART_INDEX:
        return {
          activeChartIndex: action.index,
          charts: state.charts
        };
        default: return state;
    }
}

export function addDataset(dataset) {
  return{dataset, type: ADD_DATASET};
}

export function createChart(labels, name) {
  return {
    chart: {labels, name, datasets: []},
    type: CREATE_CHART
  }
}

export function setActiveChartIndex(index) {
  return {index, type: SET_ACTIVE_CHART_INDEX};
}
