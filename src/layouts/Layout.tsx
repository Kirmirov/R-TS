import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ToastContainer, Bounce } from 'react-toastify';

export const Layout = () => {
	const pTheme 	= useSelector((state: RootState) => state.themeList.pTheme);

	return (
		<ThemeProvider theme={pTheme}>
			<GlobalStyle/>
			<Header/>
			<Outlet/>
			<ToastContainer
					position="bottom-left"
					autoClose={3000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
			/>
		</ThemeProvider>
	)
}