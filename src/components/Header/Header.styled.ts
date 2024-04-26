import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 50px;
	background-color: ${({theme}) => theme.colors.backgroundPrimary};
	display: flex;
	align-items: center;
	transition: background-color .3s ease;
`;

export const HeaderContainer = styled.div`
	position: relative;
	max-width: 97%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const HeaderLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px;
	color: #fff;
	&.active {
		color: #ffffff33;
	}
`;

export const HeaderToggle = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`;