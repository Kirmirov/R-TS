import { NavLink } from "react-router-dom";
import { ToDoItem } from "../../models/todo-item";
import classes from "./ListItem.module.scss";

export const ListItem = ({pListItem}: {pListItem: ToDoItem}) => {	
	return (
		<NavLink  className={`${classes.link} ${pListItem.isDone ? classes.done : classes.notDone}`}
			   	  to={`/list/${pListItem.id}`}
		>
			{pListItem.title}
		</NavLink>
	)
};