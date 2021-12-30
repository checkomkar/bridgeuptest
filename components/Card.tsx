import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
function Card() {
	const startEditing = () =>
		this.setState({
			hover: false,
			editing: true,
			text: this.props.card.text,
		});

	const endEditing = () => this.setState({ hover: false, editing: false });

	const editCard = async (text) => {
		const { card, dispatch } = this.props;

		this.endEditing();

		dispatch({
			type: "CHANGE_CARD_TEXT",
			payload: { cardId: card._id, cardText: text },
		});
	};

	const deleteCard = async () => {
		const { listId, card, dispatch } = this.props;

		if (window.confirm("Are you sure to delete this card?")) {
			dispatch({
				type: "DELETE_CARD",
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
						onMouseEnter={this.startHover}
						onMouseLeave={this.endHover}
					>
						{hover && (
							<div className="Card-Icons">
								<div
									className="Card-Icon"
									onClick={this.startEditing}
								>
									<ion-icon name="create" />
								</div>
							</div>
						)}

						{card.text}
					</div>
				)}
			</Draggable>
		);
	} else {
		return (
			<CardEditor
				text={card.text}
				onSave={this.editCard}
				onDelete={this.deleteCard}
				onCancel={this.endEditing}
			/>
		);
	}
}

export default Card;
