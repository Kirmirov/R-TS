import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem";
import { ToDoItem } from "../models/todo-item";
import { RootState } from "../store";

export const ViewList = () => {
	const aToDoList: ToDoItem[] 	= useSelector((state: RootState) => state.todoList.aToDoItems);
	const aDoneToDo: ToDoItem[] 	= aToDoList.filter((pItem: ToDoItem) => pItem.isDone);
	const aNotDoneToDo: ToDoItem[] 	= aToDoList.filter((pItem: ToDoItem) => !pItem.isDone);
	return (
		<div className="container">
			{
				aNotDoneToDo.map((pItem: ToDoItem) => {
					return (
						<ListItem pListItem={pItem} 
								  key={pItem.id}
						/>
					)
				})
			}
			{
				aDoneToDo.map((pItem: ToDoItem) => {
					return (
						<ListItem pListItem={pItem} 
								  key={pItem.id}
						/>
					)
				})
			}
		</div>
	)
};