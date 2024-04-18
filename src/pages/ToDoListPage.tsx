import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, updateAction, deleteAction } from "../feature/todoList";

export const ToDoListPage = () => {
	const aToDoList = useSelector((state: RootState) => state.todoList.aToDoItems);
	const dispatch 	= useDispatch();

	const createToDoItem = (a_strTitle: string) => {
		dispatch(createAction(a_strTitle)); 
	};

	const updateToDoItem = (a_pUpdateToDoItem: ToDoItem) => {
		dispatch(updateAction(a_pUpdateToDoItem));
	};

	const deleteToDoItem = (a_nToDoItem: ToDoItem) => {
		dispatch(deleteAction(a_nToDoItem));
	};

	return (
		<>
			<Form createToDoItem={createToDoItem}/>
	
			<ToDoList aToDoItems={aToDoList}
					  fUpdateToDoItem={updateToDoItem}
					  fDeleteToDoItem={deleteToDoItem}
			/>
		</>
	)
};