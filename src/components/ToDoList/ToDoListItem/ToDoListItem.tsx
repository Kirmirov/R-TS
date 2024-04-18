import './ToDoListItem.scss';
import { ToDoItem } from '../../../models/todo-item';

export const ToDoListItem = (
	{
		item,
		fDeleteToDoItem,
		fUpdateToDoItem
	}
	: 
	{ 
		item:ToDoItem
		fDeleteToDoItem: Function
		fUpdateToDoItem: Function
	}
) => {
	return (
		<li className="todo-list-item__wrapper">
			<span>{item.title}</span>
			<div className="todo-list-item__buttons">
				<button onClick={() => fDeleteToDoItem(item)}
						className="btn-trash"
				></button>
				<button onClick={() => fUpdateToDoItem(item)}
						className={`btn-${item.isDone ? 'check' : 'uncheck'}`}
				></button>
			</div>
		</li>
	)
};