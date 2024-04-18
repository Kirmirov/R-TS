import { NavLink } from "react-router-dom"

export const NotFoundPage = () => {
	return (
		<div className="container">
			<h1>Page not found</h1>
			<NavLink to="/">
				To home
			</NavLink>
		</div>
	)
}