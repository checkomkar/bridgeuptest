//import styles from "./Board.css";
import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import shortid from "shortid";
import * as actions from "../store/actions";
import List from "./List";
import AddList from "./AddList";
function Board(props) {
	const styles = {
		board: { height: "92%", display: "flex", overflowX: "auto" },
	};
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
	};

	useEffect(() => {
		dispatch({
			type: actions.addList,
			payload: { listId: firstListId, listTitle: "First list" },
		});
		// addListAction({ listId: firstListId, listTitle: "First list" });
	}, []);

	useEffect(() => {
		console.log("board", board, cardsById, listsById);
	}, [board]);

	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="board" direction="horizontal" type="COLUMN">
				{(provided, _snapshot) => (
					<div className="Board" ref={provided.innerRef}>
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

						{/* <div className="Add-List">
							{addingList ? (
								<AddList
									toggleAddingList={this.toggleAddingList}
								/>
							) : (
								<div
									onClick={this.toggleAddingList}
									className="Add-List-Button"
								>
									<ion-icon name="add" /> Add a list
								</div>
							)}
						</div> */}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}

export default Board;
