import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from '../../feature/formTitle';
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled';
import strPlusIcon from '../../assets/images/plus.png';

export const Form = ({ createToDoItem }: { createToDoItem: Function }) => {

	const strTitle:string  	= useSelector((state: RootState) => state.formTitle.strTitle);
	const dispatch:Function	= useDispatch();

	const formSubmit = (event: React.SyntheticEvent):void => {
		event.preventDefault();
		if (strTitle) {
			createToDoItem(strTitle);
			dispatch(updateTitle(''));
		}
	};

	const changeTitle = (event: React.ChangeEvent<HTMLInputElement>):void => {
		dispatch(updateTitle(event.target.value));
	};

	return (
		<FormWrapper>
			<FormBlock  action="#"
				  		onSubmit={formSubmit}
			>
				<FormLabel>
					<FormField  onChange={changeTitle}
								value={strTitle}
								type="text"
					/>
					<FormControl $iconURL={strPlusIcon}/>
				</FormLabel>
			</FormBlock>
		</FormWrapper>
	)
};