import React, { useState, useEffect } from "react";
import * as actions from "../store/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import CardEditor from "./CardEditor";
import { TiEdit } from "react-icons/ti";
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
			payload: { cardId: card._id, cardText: text },
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
			<Draggable draggableId={card._id} index={index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className="Card"
						onMouseEnter={startHover}
						onMouseLeave={endHover}
					>
						{hover && (
							<div className="Card-Icons">
								<div
									className="Card-Icon"
									onClick={startEditing}
								>
									<TiEdit />
								</div>
							</div>
						)}
						<div className="Card-Status"></div>
						{card.text}
					</div>
				)}
			</Draggable>
		);
	} else {
		return (
			<>
				<CardEditor
					text={card.text}
					onSave={editCard}
					onDelete={deleteCard}
					onCancel={endEditing}
				/>
			</>
		);
	}
}

export default Card;
