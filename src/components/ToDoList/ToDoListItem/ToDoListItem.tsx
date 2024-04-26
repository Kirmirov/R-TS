import { ToDoItem } from '../../../models/todo-item';
import { ToDoItemBlock, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled';

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';

export const ToDoListItem = (
	{ item, fDeleteToDoItem, fUpdateToDoItem }
	: 
	{ item:ToDoItem; fDeleteToDoItem: Function; fUpdateToDoItem: Function }
) => {
	return (
		<ToDoItemBlock>
			<ToDoItemText>
				{item.title}
			</ToDoItemText>
			<ToDoItemControls>
				<ToDoItemControl onClick={() => fDeleteToDoItem(item.id)}
								 $iconURL={trashIcon}
				></ToDoItemControl>
				<ToDoItemControl onClick={() => fUpdateToDoItem(item)}
								 $iconURL={item.isDone ? checkIcon : uncheckIcon}
				></ToDoItemControl>
			</ToDoItemControls >
		</ToDoItemBlock>
	)
};