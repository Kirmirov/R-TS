import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import { ToDoItem } from "../../models/todo-item";
import { ToDoListCompleted, ToDoListContainer, ToDoListFailed } from "./ToDoList.styled";

export const ToDoList = (
	{ aToDoItems, fUpdateToDoItem, fDeleteToDoItem }
	: 
	{ aToDoItems: Array<ToDoItem>; fUpdateToDoItem: Function; fDeleteToDoItem: Function;}
) => {
	const renderToDoList = (a_aFilteredArray: Array<ToDoItem>) => {
		return a_aFilteredArray.map((pItem: ToDoItem) => {
			return (
				<ToDoListItem item={pItem}
							  fDeleteToDoItem={fDeleteToDoItem}
							  fUpdateToDoItem={fUpdateToDoItem} 
							  key={pItem.id}
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
		<ToDoListContainer>
			<ToDoListFailed>
				{ renderToDoList(filterByIsDone(false)) }
			</ToDoListFailed>
			<ToDoListCompleted>
				{ renderToDoList(filterByIsDone(true)) }
			</ToDoListCompleted>
		</ToDoListContainer>
	)
};