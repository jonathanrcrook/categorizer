import React, { Component } from "react";
import {connect} from "react-redux";

import "./App.css";

import {addDataset, createChart, setActiveChartIndex} from '../ducks/chart';

import AddDataset from './AddDataset/AddDataset';
import ActiveChart from './ActiveChart/ActiveChart';
import NewChart from "./NewChart/NewChart";
import Sidebar from "./Sidebar/Sidebar";

class App extends Component {
	render() {
		const {
			addDataset,
			activeChart,
			charts,
			createChart,
			setActiveChartIndex
		} = this.props;
		return (
			<div className="app">
				<Sidebar
					charts={charts}
					setActiveChartIndex={setActiveChartIndex}
				/>
				<main className="app__main">
					<header className="app__header">
						<h1 className="app__title">Categorizer</h1>

						<div className="app__new-chart">
							<NewChart createChart={createChart} />
						</div>
					</header>
						<div className="app_active-chart">
							<ActiveChart chart={activeChart}/>
							<AddDataset addDataset={addDataset}
								labels={activeChart.labels}/>
						</div>
				</main>
			</div>
		);
	}
}


function mapStateToProps({activeChartIndex, charts}) {
	return {
		activeChart: charts[ activeChartIndex ],
		charts: charts
	};
}

export default connect(mapStateToProps, {addDataset, createChart, setActiveChartIndex})(App);
