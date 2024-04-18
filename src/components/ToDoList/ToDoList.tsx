import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import classes from './ToDoList.module.scss';
import { ToDoItem } from "../../models/todo-item";

export const ToDoList = (
	{ aToDoItems, fUpdateToDoItem, fDeleteToDoItem }
	: 
	{ aToDoItems: Array<ToDoItem>; fUpdateToDoItem: Function; fDeleteToDoItem: Function;}
) => {
	const renderToDoList = (a_aFilteredArray: Array<ToDoItem>) => {
		return a_aFilteredArray.map((pItem: ToDoItem, nItemIndex: number) => {
			return (
				<ToDoListItem item={pItem}
							  fDeleteToDoItem={fDeleteToDoItem}
							  fUpdateToDoItem={fUpdateToDoItem} 
							  key={nItemIndex}
				/>
			)
		})
	};

	const filterByIsDone = (a_fIsDone: boolean) => {
		return aToDoItems.filter((pItem: ToDoItem) => {
			return pItem.isDone === a_fIsDone;
		});
	};

	return (
		<div className={classes.container}>
			<ul className={`${classes.list} ${classes.failed}`}>
				{ renderToDoList(filterByIsDone(false)) }
			</ul>
			<ul className={`${classes.list} ${classes.completed}`}>
				{ renderToDoList(filterByIsDone(true)) }
			</ul>
		</div>
	)
};