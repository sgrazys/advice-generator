import '../components/Card.css';
import Button from './Button';

function Card({ quote, number, onHandleQuote }) {
	return (
		<div className='card'>
			<h1 className='card-top '>ADVICE # {number}</h1>
			<q className='quote'>{quote}</q>
			<div
				className='divider'
				role='presentation'></div>

			<Button onClick={onHandleQuote} />
		</div>
	);
}

export default Card;
