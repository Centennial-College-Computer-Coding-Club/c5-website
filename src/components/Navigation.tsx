import {Link} from "react-router-dom";


export const Navigation = () => {
	return (
		<>
			<nav className="nav">
				<ul>
					<li><Link to={`/`}>Home</Link></li>
					<li><Link to={`/about`}>About</Link></li>
					<li><Link to={`/events`}>Events</Link></li>
					<li><Link to={`/projects`}>Projects</Link></li>
					<li><Link to={`/contact`}>Contact</Link></li>
				</ul>
			</nav>
		</>
	)
}