import { Continue, Field, Header } from './components';
import { Component } from 'react';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.message);
	}

	render() {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="w-40">
					<Header />
					<Field />
					<Continue />
				</div>
			</div>
		);
	}
}
