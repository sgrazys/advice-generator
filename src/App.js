import './App.css';
import { getQuote } from '../src/components/functions';

import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
	const [quote, setQuoute] = useState('');

	const handleQuote = () => {
		getQuote(setQuoute);
	};

	useEffect(() => {
		getQuote(setQuoute);
	}, []);

	return (
		<div className='App'>
			<Card
				quote={quote.advice}
				number={quote.id}
				onHandleQuote={handleQuote}
			/>
		</div>
	);
}

export default App;
