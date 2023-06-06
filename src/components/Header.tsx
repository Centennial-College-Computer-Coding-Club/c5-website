import c5Logo from '../../public/imgs/C5.png';
import {Navigation} from "./Navigation.tsx";
import {NavigationWidget} from "./NavigationWidget.tsx";
import {Link} from "react-router-dom";


export const Header = () => {
	return (
		<>
			<header>
				<Navigation />
				<main>
					<Link to={`/`}><img className="logo" src={c5Logo} alt="Logo" /></Link>
					<h1>CCSAI Computer and Coding Club</h1>
				</main>
			</header>
			<NavigationWidget />
		</>
	)
}