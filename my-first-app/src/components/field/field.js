import { connect } from 'react-redux';
import { Cell } from '../index';
import { Component } from 'react';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="flex flex-wrap  gap-[2px]">
				{this.props.cells.map(({ label, value }) => (
					<Cell key={'cell' + label} label={label} value={value} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	cells: state.cells,
});

export const Field = connect(mapStateToProps)(FieldContainer);
