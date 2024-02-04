import './Button.css';
import { ReactComponent as DiceIcon } from '../icon-dice.svg';

function Button({ onClick }) {
	return (
		<button
			onClick={onClick}
			className='btn'
			type='submit'>
			<DiceIcon />
		</button>
	);
}

export default Button;
