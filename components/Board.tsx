//import styles from "./Board.css";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import shortid from "shortid";
import * as actions from "../store/actions";
import List from "./List";
import AddList from "./AddList";
import styles from "./styles/Board.module.scss";

function Board(props) {
	const dispatch = useDispatch();
	const firstListId = shortid.generate();
	const { board, cardsById, listsById } = useSelector((state: any) => state);
	// const { board } = store;
	const [addingList, setAddingList] = useState(false);

	const toggleAddingList = () => {
		setAddingList(!addingList);
	};

	const handleDragEnd = ({ source, destination, type }) => {
		if (!destination) {
			return;
		}

		// Move list
		if (type === "COLUMN") {
			// Prevent update if nothing has changed
			if (source.index !== destination.index) {
				dispatch({
					type: actions.moveList,
					payload: {
						oldListIndex: source.index,
						newListIndex: destination.index,
					},
				});
			}
			return;
		}

		// Move card
		if (
			source.index !== destination.index ||
			source.droppableId !== destination.droppableId
		) {
			dispatch({
				type: actions.moveCard,
				payload: {
					sourceListId: source.droppableId,
					destListId: destination.droppableId,
					oldCardIndex: source.index,
					newCardIndex: destination.index,
				},
			});
		}
	};

	useEffect(() => {
		console.log("board", board, cardsById, listsById);
	}, [board]);

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="board" direction="horizontal" type="COLUMN">
				{(provided, _snapshot) => (
					<div className={styles["board"]} ref={provided.innerRef}>
						{board?.lists.map((listId, index) => {
							return (
								<>
									<List
										listId={listId}
										key={listId}
										index={index}
									/>
								</>
							);
						})}

						{provided.placeholder}

						<div className={styles["add-list"]}>
							{addingList ? (
								<AddList toggleAddingList={toggleAddingList} />
							) : (
								<div
									onClick={toggleAddingList}
									className={styles["add-list-button"]}
								>
									+ Add a list
								</div>
							)}
						</div>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default Board;
