import { useEffect, useState } from "react";
import { ToDoItem } from "../models/todo-item";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewListItem = () => {
	const aToDoList 				= useSelector((state: RootState) => state.todoList.aToDoItems);
	const { id } 					= useParams();
	const navigate 					= useNavigate();
	const [pToDoItem, setToDoItem] 	= useState<ToDoItem>();

	useEffect(() => {
		const pSearchItem: ToDoItem | undefined = aToDoList.find((pItem: ToDoItem) => {
			return pItem.id === Number(id);
		});

		if (pSearchItem)
			setToDoItem(pSearchItem);
		else
			navigate('/404');
		
	}, [aToDoList, id, navigate]);

	return (
		<div className="container">
			<h1>{pToDoItem?.title}</h1>
		</div>
	)	
};