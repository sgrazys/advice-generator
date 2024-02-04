import '../components/Card.css';
import Button from './Button';

function Card() {
	return (
		<div className='card'>
			<h1 className='advice-number'>ADVICE # 117</h1>
			<q className='quote'>CITATA</q>
			<div
				className='divider'
				role='presentation'></div>

			<Button />
		</div>
	);
}

export default Card;
