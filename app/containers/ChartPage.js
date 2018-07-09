//@flow
import React from 'react';
import { render } from 'react-dom';
import Chart from '../components/Chart';
import { getData } from "../components/utils"

import { TypeChooser } from "react-stockcharts/lib/helper";


export default class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}
