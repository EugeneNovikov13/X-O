import { connect } from 'react-redux';
import { REFRESH_FIELD } from '../../actions';
import { Component } from 'react';

export class ContinueContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className="border w-[154px] h-[40px] text-xl mt-1"
				onClick={this.props.continueButtonClick}
			>
				Заново
			</button>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	continueButtonClick: () => {
		dispatch(REFRESH_FIELD);
	},
});

export const Continue = connect(null, mapDispatchToProps)(ContinueContainer);
