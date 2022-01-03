import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SideMenu from "./SideMenu";
import styles from "./styles/NavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
function NavBar() {
	const [showMenu, setShowMenu] = useState(false);
	const [showDDMenu, setShowDDMenu] = useState(false);
	const closeMenu = () => setShowMenu(false);
	return (
		<>
			<div className={`${styles["nav-bar"]} d-none d-sm-flex`}>
				<Col className={`${styles["menu-item"]} `} md={3}>
					<a href="/">Home</a>
					<a href="/">Tour</a>
					<a href="/">Blog</a>
				</Col>

				<Col className={styles["logo"]} md={6} xs={12}>
					<a href="/">
						<img src="../assets/trello.gif" />
					</a>
				</Col>
				<Col className={`${styles["registration"]}`} md={3}>
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
			<div className={`${styles["nav-bar"]} d-block d-sm-none`}>
				<div className={`${styles["mobile-menu"]} d-block d-sm-none`}>
					<AiOutlineMenu
						className={styles["mobile-menu-icon"]}
						onClick={() => setShowDDMenu(!showDDMenu)}
					/>
					<div
						className={`${styles["dropdown-menu"]} ${
							showDDMenu ? styles["show"] : ""
						}`}
					>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Tour</a>
							</li>
							<li>
								<a href="/">Blog</a>
							</li>
							<li>
								<a
									href="#"
									className={`btn btn-success ${styles["btn-custom-success"]}`}
								>
									Sign up
								</a>
							</li>
							<li>
								<a
									href="#"
									className={`btn btn-primary ${styles["btn-custom-primary"]}`}
								>
									Log in
								</a>
							</li>
						</ul>
					</div>
				</div>
				<Col className={styles["logo"]} md={6} xs={12}>
					<a href="/">
						<img src="../assets/trello.gif" />
					</a>
				</Col>
				<SideMenu closeMenu={closeMenu} showMenu={showMenu} />
			</div>
		</>
	);
}

export default NavBar;
