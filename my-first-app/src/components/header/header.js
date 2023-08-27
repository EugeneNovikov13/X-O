import { connect } from 'react-redux';
import { Component } from 'react';

export class HeaderContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="text-center box-border h-10 w-40 text-2xl">
				{this.props.victory
					? `Победил ${this.props.sym}`
					: `Ходит ${this.props.sym}`}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	victory: state.victory,
	sym: state.sym,
});

export const Header = connect(mapStateToProps)(HeaderContainer);
