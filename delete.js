const [ enteredValue, setEnteredValue ] = useState('');

	// const [ confirmed, setConfirmed ] = useState(false);
	// const [ selectedNumber, setSelectedNumber ] = useState();

	// const numberInputHandler = (enteredValue) => {
	// 	setEnteredValue(enteredValue.replace(/_/g, '-'));
	// };

	// const resetInputHandler = () => {
	// 	setEnteredValue('');
	// 	setConfirmed(false);
	// };
	// const confirmInputHandler = () => {
	// 	const choosenNumber = parseInt(enteredValue);
	// 	if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
	// 		console.log('Invalid number', 'Number should be between 1 to 99', [
	// 			{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }
	// 		]);

	// 		return;
	// 	}
	// 	setConfirmed(true);
	// 	setSelectedNumber(choosenNumber);
	// 	setEnteredValue('');
	// };

	// let confirmedOutput;
	// if (confirmed) {
	// 	confirmedOutput = { selectedNumber };
	// 	console.log(confirmedOutput);
	// }
