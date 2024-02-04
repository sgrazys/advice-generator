import './Button.css';
import { ReactComponent as DiceIcon } from '../icon-dice.svg';

function Button() {
	return (
		<button
			className='btn'
			type='submit'>
			<DiceIcon />
		</button>
	);
}

export default Button;
