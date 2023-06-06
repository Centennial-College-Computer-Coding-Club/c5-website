import {Link} from "react-router-dom";

export const NavigationWidget = () => {
	function toggleCollapsed() {
		const x = document.getElementsByClassName("nav-widget")[0];
		const y = document.getElementsByClassName("dropbtn")[0];
		if (x?.classList.contains("collapsed")) {
			x?.classList.remove("collapsed");
			y.innerHTML = "▲";
		} else {
			x?.classList.add("collapsed");
			y.innerHTML = "▼";
		}
	}
	
	return (
		<>
			<nav className="nav-widget collapsed">
				<ul>
					<li><Link to={`/`}>Home</Link></li>
					<li><Link to={`/about`}>About</Link></li>
					<li><Link to={`/events`}>Events</Link></li>
					<li><Link to={`/projects`}>Projects</Link></li>
					<li><Link to={`/contact`}>Contact</Link></li>
				</ul>
				<button className="dropbtn" onClick={toggleCollapsed}>▼</button>
			</nav>

		</>
	)
}