import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./styles/SideMenu.module.scss";
import { FaTrello } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
function SideMenu({ closeMenu, showMenu }) {
	return (
		<>
			<div
				className={`${styles["side-menu"]} ${
					showMenu ? styles["open"] : ""
				}`}
			>
				<div className={styles["side-menu__header"]}>
					<div className={styles["side-menu__header-logo"]}>Menu</div>
					<span
						className={styles["side-menu__close"]}
						onClick={closeMenu}
					>
						&times;
					</span>
				</div>
				<div className={styles["hr"]}></div>
				<div className={styles["side-menu__content"]}>
					<Row className={styles["menu-item-container"]}>
						<Col md={12} className={styles.item}>
							<div className={`${styles.icon}`}>
								<FaTrello />
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									About this board
								</span>
							</div>
						</Col>
						<Col md={12} className={styles.item}>
							<div className={`${styles.icon}`}>
								<FiMoreHorizontal />
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>More</span>
							</div>
						</Col>
					</Row>
					<div className={styles["hr"]}></div>
					<Row className={styles["menu-item-container"]}>
						<Col md={12} className={styles.item}>
							<div className={`${styles.icon}`}>
								<BsListUl />
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>Activity</span>
							</div>
						</Col>
						{/* activity history */}
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								made this board visible to the public
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
						<Col
							md={12}
							className={`${styles.item} ${styles["sub-item"]}`}
						>
							<div className={`${styles.icon}`}>
								<span className={styles.rounded}>AH</span>
							</div>
							<div className={styles.text}>
								<span className={styles.bold}>
									Andrew Hyde{" "}
								</span>
								added{" "}
								<span className={styles.underline}>
									Helpdesk Call EE999
								</span>{" "}
								to Development
								<span className={styles.timestamp}>
									Mar 12, 2020 at 8:51 PM
								</span>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}

export default SideMenu;
