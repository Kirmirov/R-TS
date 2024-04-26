import { useDispatch } from 'react-redux';
import { HeaderContainer, HeaderHeader, HeaderLink, HeaderToggle } from './Header.styled';
import { toggleThemeAction } from '../../feature/themeList';
export const Header = () => {
	const dispatch = useDispatch();

	return (
		<HeaderHeader>
			<HeaderContainer>
				<HeaderLink to="/">
					ToDo
				</HeaderLink>
				<HeaderLink to="/list">
					List
				</HeaderLink>
				<HeaderToggle>
					<button onClick={() => dispatch(toggleThemeAction())}>
						Toggle
					</button>
				</HeaderToggle>
			</HeaderContainer>
		</HeaderHeader>
	);
};
