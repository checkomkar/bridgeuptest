import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Pipe from "./Pipe";
import styles from "./styles/KanBanMenu.module.scss";
import { GoGlobe } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import SideMenu from "./SideMenu";

function KanBanMenu() {
	const [showMenu, setShowMenu] = useState(false);
	const closeMenu = () => setShowMenu(false);
	const openMenu = (e) => {
		e.preventDefault();
		setShowMenu(true);
	};
	return (
		<>
			<Row className={styles.kanban}>
				<Col md={6} lg={3}>
					<Row>
						<Col md={4} className={styles["kanban-title"]}>
							Kanban Board
						</Col>
						<Col md={4} className={styles["kanban-btn"]}>
							<Pipe />
							<a
								href="#"
								className={`btn ${styles["btn-custom-sub"]} ${styles["btn-public"]}`}
							>
								<GoGlobe className={styles.icon} />
								Public
							</a>
							<Pipe />
						</Col>
						<Col
							md={4}
							lg={2}
							className={styles["kanban-initials"]}
						>
							<a href="#" className={styles["initials"]}>
								AH
								<span
									className={styles.arrow}
									style={{
										backgroundImage:
											"url('./assets/up-arrows.png')",
									}}
								>
									{/* <img src="./assets/up-arrows.png" alt="" /> */}
								</span>
							</a>
						</Col>
					</Row>
				</Col>
				<Col md={2} lg={3}></Col>
				<Col md={4} lg={6} className={styles["third-col"]}>
					<Pipe />
					<a href="/" className={`btn ${styles["btn-custom-sub"]}`}>
						<BsFilter className={styles.icon} />
						Filter
					</a>
					<a
						href="#"
						className={`btn ${styles["btn-custom-sub"]}`}
						onClick={openMenu}
					>
						<HiDotsHorizontal className={styles.icon} />
						Show Menu
					</a>
				</Col>
			</Row>
			<SideMenu closeMenu={closeMenu} showMenu={showMenu} />
		</>
	);
}

export default KanBanMenu;
