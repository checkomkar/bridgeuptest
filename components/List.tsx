import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Droppable, Draggable } from "react-beautiful-dnd";
import * as actions from "../store/actions";
import Card from "./Card";
import CardEditor from "./CardEditor";
import ListEditor from "./ListEditor";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import styles from "./styles/List.module.scss";
export default function List(props) {
	const dispatch = useDispatch();
	const { board, cardsById, listsById } = useSelector((state: any) => state);
	const currState = useSelector((state: any) => state);
	const { listId, index } = props;
	const list = listsById[listId];
	const [editingTitle, setEditingTitle] = useState(false);
	const [title, setTitle] = useState(list?.title);
	const [addingCard, setAddingCard] = useState(false);
	useEffect(() => {
		console.log("currState", currState);
	}, [listsById, board, cardsById, currState]);
	const toggleAddingCard = () => {
		setAddingCard(!addingCard);
	};

	const toggleEditingTitle = () => {
		setEditingTitle(!editingTitle);
	};

	const handleChangeTitle = (e) => setTitle(e.target.value);

	const editListTitle = async () => {
		toggleEditingTitle();

		dispatch({
			type: actions.changeListTitle,
			payload: { listId, listTitle: title },
		});
	};

	const deleteList = async () => {
		if (window.confirm("Are you sure to delete this list?")) {
			dispatch({
				type: actions.deleteList,
				payload: { listId, cards: list.cards },
			});
		}
	};

	const addCard = async (cardText) => {
		toggleAddingCard();

		const cardId = shortid.generate();

		dispatch({
			type: actions.addCard,
			payload: { cardText, cardId, listId },
		});
	};

	return (
		<Draggable draggableId={list?._id} index={index}>
			{(provided, snapshot) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={styles["list"]}
				>
					{editingTitle ? (
						<ListEditor
							list={list}
							title={title}
							handleChangeTitle={handleChangeTitle}
							saveList={editListTitle}
							onClickOutside={editListTitle}
							deleteList={deleteList}
						/>
					) : (
						<div
							className={styles["list-title"]}
							onClick={toggleEditingTitle}
						>
							{list?.title}
						</div>
					)}

					<Droppable droppableId={list?._id}>
						{(provided, _snapshot) => (
							<div
								ref={provided.innerRef}
								className={styles["lists-cards"]}
							>
								{list?.cards &&
									list?.cards.map((cardId, index) => (
										<Card
											key={cardId}
											cardId={cardId}
											index={index}
											listId={list?._id}
										/>
									))}

								{provided.placeholder}

								{addingCard ? (
									<CardEditor
										onSave={addCard}
										onCancel={toggleAddingCard}
										adding
									/>
								) : (
									<div
										className={styles["toggle-add-card"]}
										onClick={toggleAddingCard}
									>
										+ Add a card
									</div>
								)}
							</div>
						)}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
}
