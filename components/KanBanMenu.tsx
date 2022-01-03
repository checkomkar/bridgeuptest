import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Pipe from "./Pipe";
import styles from "./styles/KanBanMenu.module.scss";
import * as actions from "../store/actions";
import { GoGlobe } from "react-icons/go";
import { BsFilter } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import SideMenu from "./SideMenu";
import { useSelector, useDispatch } from "react-redux";
function KanBanMenu() {
	const dispatch = useDispatch();
	const { board, cardsById, listsById } = useSelector((state: any) => state);
	const [searchArray, setSearchArray] = useState([]);
	const [resultArray, setResultArray] = useState([]);
	const [search, setSearch] = useState("");
	const [showMenu, setShowMenu] = useState(false);
	const [showFilter, setShowFilter] = useState(false);
	const inputRef = useRef();
	const closeMenu = () => setShowMenu(false);
	const openMenu = (e) => {
		e.preventDefault();
		setShowMenu(true);
	};
	useEffect(() => {
		const copyCardsById = [];
		const copyListsById = [];
		for (const key in cardsById) {
			copyCardsById.push(cardsById[key]);
		}
		for (const key in listsById) {
			copyListsById.push(listsById[key]);
		}
		setSearchArray([...copyCardsById, ...copyListsById]);
		let copySearchArray = [...copyCardsById, ...copyListsById];

		copySearchArray.forEach((item) => {
			if (item.title) {
				item.searchText = item.title;
			}
			if (item.text) {
				item.searchText = item.text;
			}
		});
		console.log("searchArray", copySearchArray);
		setSearchArray(copySearchArray);
	}, [board, cardsById, listsById]);

	const handleSearch = (e) => {
		let searchResult = [];
		if (e.target.value == "" || e.target.value == null || !e.target.value) {
			searchResult = [];
			setResultArray([]);
			setShowFilter(false);
			return;
		}
		const searchValue = e.target.value;
		setSearch(searchValue);
		setShowFilter(true);
		searchResult = searchArray.filter((item) => {
			return item.searchText
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
		setResultArray(searchResult);
	};

	const handleSearchClick = (e, item) => {
		console.log("item", search, item);
		e.preventDefault();
		setSearch(item.searchText);
		setShowFilter(false);
		// inputRef.current.value = search;
		dispatch({
			type: actions.setSearchValue,
			payload: {
				searchValue: item,
				isCard: item.cards ? true : false,
			},
		});
	};

	useEffect(() => {
		console.log(search);
	}, [search]);

	return (
		<>
			<Row className={styles.kanban}>
				<Col md={6} lg={4}>
					<Row>
						<Col md={4} xs={12} className={styles["kanban-title"]}>
							Kanban Board
						</Col>
						<Col md={4} xs={12} className={styles["kanban-btn"]}>
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
				<Col md={2} lg={5}>
					{/* <div className={styles["input-group"]}>
						<input
							className="form-control py-2 border-right-0 border"
							type="text"
							placeholder="Search"
							id="search-input"
							//onBlur={() => setShowFilter(false)}
							onChange={handleSearch}
							value={search}
						/>
						{showFilter && (
							<div className={styles["search-results"]}>
								{resultArray.length > 0 && (
									<ul>
										{resultArray.map((item, index) => {
											return (
												<li
													key={index}
													onClick={(e) =>
														handleSearchClick(
															e,
															item
														)
													}
												>
													<a href="#">
														{item.searchText}
													</a>
												</li>
											);
										})}
									</ul>
								)}
							</div>
						)}
					</div> */}
				</Col>
				<Col md={4} lg={3} xs={12} className={styles["third-col"]}>
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
