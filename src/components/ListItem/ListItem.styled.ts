import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(NavLink)<{$status: boolean}>`
	text-decoration: none;
	padding: 10px;
	color: ${(props) => props.$status ? 'green' : 'red'};
`;