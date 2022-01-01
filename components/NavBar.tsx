import React from "react";
import { Col } from "react-bootstrap";
import styles from "./styles/NavBar.module.scss";
function NavBar() {
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
			</div>
		</>
	);
}

export default NavBar;
