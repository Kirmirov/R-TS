import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../models/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, updateAction, deleteAction } from "../feature/todoList";
import { toast, Zoom } from 'react-toastify';

export const ToDoListPage = () => {
	const aToDoList:ToDoItem[] 	= useSelector((state: RootState) => state.todoList.aToDoItems);
	const dispatch 				= useDispatch();

	const createToDoItem = (a_strTitle: string) => {
		dispatch(createAction(a_strTitle)); 
		toast.success('Новая задача создана!', {transition: Zoom});
	};

	const updateToDoItem = (a_pUpdateToDoItem: ToDoItem) => {
		dispatch(updateAction(a_pUpdateToDoItem));
		toast.info('Задача изменена!', {transition: Zoom});
	};

	const deleteToDoItem = (a_nToDoItemID: string) => {
		dispatch(deleteAction(a_nToDoItemID));
		toast.warn('Задача удалена!', {transition: Zoom});
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