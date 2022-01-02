import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SideMenu from "./SideMenu";
import styles from "./styles/NavBar.module.scss";
function NavBar() {
	const [showMenu, setShowMenu] = useState(false);
	const closeMenu = () => setShowMenu(false);
	return (
		<>
			<div className={styles["nav-bar"]}>
				<Col className={styles["menu-item"]} md={3}>
					<a href="/">Home</a>
					<a href="/">Tour</a>
					<a href="/">Blog</a>
				</Col>

				<Col className={styles["logo"]} md={6}>
					<a href="/">
						<img src="../assets/trello.gif" />
					</a>
				</Col>
				<Col className={styles["registration"]} md={3}>
					<a
						href="#"
						className={`btn btn-success ${styles["btn-custom-success"]}`}
					>
						Sign up
					</a>
					<a
						href="#"
						className={`btn btn-primary ${styles["btn-custom-primary"]}`}
					>
						Log in
					</a>
				</Col>
				<SideMenu closeMenu={closeMenu} showMenu={showMenu} />
			</div>
		</>
	);
}

export default NavBar;
