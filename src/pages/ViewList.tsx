import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem";
import { ToDoItem } from "../models/todo-item";
import { RootState } from "../store";

export const ViewList = () => {
	const aToDoList = useSelector((state: RootState) => state.todoList.aToDoItems);
	return (
		<div className="container">
			{
				aToDoList.map((pItem: ToDoItem, nInd: number) => {
					return (
						<ListItem pListItem={pItem} 
								  key={nInd}
						/>
					)
				})
			}
		</div>
	)
};