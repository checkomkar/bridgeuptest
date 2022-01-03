import React, { useState, useEffect } from "react";
import * as actions from "../store/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import CardEditor from "./CardEditor";
import { TiEdit } from "react-icons/ti";
import { FaRegComment } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import styles from "./styles/Card.module.scss";
function Card(props) {
	const dispatch = useDispatch();
	const { cardsById } = useSelector((state: any) => state);
	const { cardId, index, listId } = props;
	const card = cardsById[props.cardId];
	const [hover, setHover] = useState(false);
	const [editing, setEditing] = useState(false);
	const [text, setText] = useState("");
	const startEditing = () => {
		setEditing(true);
		setText(props.text);
		setHover(false);
	};

	const endEditing = () => {
		setEditing(false);
		setHover(false);
	};

	const startHover = () => setHover(true);
	const endHover = () => setHover(false);

	const editCard = async (text) => {
		endEditing();

		dispatch({
			type: actions.changeCardText,
			payload: { cardId: card?._id, cardText: text },
		});
	};

	const deleteCard = async () => {
		if (window.confirm("Are you sure to delete this card?")) {
			dispatch({
				type: actions.deleteCard,
				payload: { cardId: card._id, listId },
			});
		}
	};

	if (!editing) {
		return (
			<Draggable draggableId={card?._id} index={index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className={styles["card"]}
						onMouseEnter={startHover}
						onMouseLeave={endHover}
					>
						{hover && (
							<div className={styles["card-icons"]}>
								<div
									className={styles["card-icon"]}
									onClick={startEditing}
								>
									<TiEdit />
								</div>
							</div>
						)}
						<div
							className={`${styles["card-status"]} ${
								card?.status && card?.status == "red"
									? styles["red"]
									: ""
							}`}
						></div>
						{card?.text}
						<div className={styles["card-activities"]}>
							{card?.commentCount && (
								<div className={styles["activity"]}>
									<div className={styles["activity-icon"]}>
										<FaRegComment />
									</div>
									<div className={styles["activity-content"]}>
										{card?.commentCount}
									</div>
								</div>
							)}
							{card?.taskCount && (
								<div className={styles["activity"]}>
									<div className={styles["activity-icon"]}>
										<IoMdCheckboxOutline />
									</div>
									<div className={styles["activity-content"]}>
										{`${card?.completedTaskCount}/${card?.taskCount}`}
									</div>
								</div>
							)}
							{card?.likeCount && (
								<div className={styles["activity"]}>
									<div className={styles["activity-icon"]}>
										<BiLike />
									</div>
									<div className={styles["activity-content"]}>
										{card?.likeCount}
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</Draggable>
		);
	} else {
		return (
			<>
				<CardEditor
					text={card?.text}
					onSave={editCard}
					onDelete={deleteCard}
					onCancel={endEditing}
				/>
			</>
		);
	}
}

export default Card;
