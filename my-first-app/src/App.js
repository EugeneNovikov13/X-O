import { useState } from 'react';
import styles from './App.module.css';

const calculation = expr => {
	const operatorIndex = expr.search(/[+-]/);
	if (operatorIndex !== -1) {
		const operator = expr.at(operatorIndex);
		const operands = expr.split(operator);
		const operand1 = +operands[0];
		const operand2 = +operands[1];
		if (operator === '+') return operand1 + operand2;
		else if (operator === '-') return operand1 - operand2;
	}
};

const buttons = [
	{ label: '1', value: '1' },
	{ label: '2', value: '2' },
	{ label: '3', value: '3' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
	{ label: '6', value: '6' },
	{ label: '7', value: '7' },
	{ label: '8', value: '8' },
	{ label: '9', value: '9' },
	{ label: '+', value: '+' },
	{ label: '0', value: '0' },
	{ label: '-', value: '-' },
	{ label: 'C', value: 'reset' },
	{ label: '=', value: '=' },
];

export const Calculator = () => {
	const [result, setResult] = useState(false);
	const [input, setInput] = useState('');

	const handleButtonClick = value => {
		if (value === 'reset') {
			setInput('');
		} else if (value === '=') {
			setInput(calculation(input));
			setResult(true);
		} else if (['+', '-'].includes(value)) {
			setInput(input + value);
			setResult(false);
		} else if (result) {
			setInput(value);
			setResult(false);
		} else setInput(input + value);
	};

	return (
		<div className={styles.calcCnt}>
			<div className={styles.calculator}>
				<input
					type="text"
					className={`${styles.screen} ${result ? styles.red : styles.black}`}
					value={input}
					readOnly
				/>
				{buttons.map(({ value, label }) => (
					<button
						key={'button' + value}
						className={styles.button}
						onClick={() => handleButtonClick(value)}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};
