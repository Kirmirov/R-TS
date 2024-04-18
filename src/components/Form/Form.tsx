import { useState } from 'react';
import classes from './Form.module.scss';
export const Form = ({ createToDoItem }: { createToDoItem: Function }) => {

	const [strTitle, setTitle] = useState<string>('');

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (strTitle) {
			createToDoItem(strTitle);
			setTitle('');
		}
	};

	return (
		<div className={classes.wrapper}>
			<form action="#" 
				  className={classes.form}
				  onSubmit={formSubmit}
			>
				<label>
					<input  onChange={(e) => setTitle(e.target.value)}
							value={strTitle}
							type="text"
					/>
					<button></button>
				</label>
			</form>
		</div>
	)
};