import { connect } from 'react-redux';
import { CHANGE_SYMBOL, CHECK_VICTORY, fieldClick } from '../../actions';
import { Component } from 'react';

export class CellContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className="border-black border-[1px] w-[50px] h-[50px] text-[50px] pb-[5px] flex justify-center items-center cursor-pointer"
				onClick={() =>
					this.props.value === ''
						? this.props.handleCellClick(this.props.label, this.props.victory)
						: null
				}
			>
				{this.props.value}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	victory: state.victory,
	label: ownProps.label,
	value: ownProps.value,
});

const mapDispatchToProps = dispatch => ({
	handleCellClick: (lab, vic) => {
		if (vic) return;
		dispatch(fieldClick(lab));
		dispatch(CHECK_VICTORY);
		dispatch(CHANGE_SYMBOL);
	},
});

export const Cell = connect(mapStateToProps, mapDispatchToProps)(CellContainer);
