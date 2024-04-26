import { ToDoItem } from "../../models/todo-item";
import { ListItemLink } from "./ListItem.styled";

export const ListItem = ({pListItem}: {pListItem: ToDoItem}) => {	
	return (
		<ListItemLink 	$status={pListItem.isDone}
			   	  		to={`/list/${pListItem.id}`}
		>
			{pListItem.title}
		</ListItemLink>
	)
};