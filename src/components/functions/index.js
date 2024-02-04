import API from '../../shared/adviceApi';

export const getQuote = (setter) => {
	API.get('advice')
		.then((resp) => {
			// console.log(resp);
			setter(resp.data.slip);
		})
		.catch((err) => {
			console.log(err);
		});
};
