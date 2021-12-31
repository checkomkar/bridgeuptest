import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";
function CardEditor(props) {
	const { text, onSave, onDelete, onCancel, adding } = props;
	const [textState, setTextState] = useState(text);
	const handleChangeText = (event) => setTextState(event.target.value);

	const onEnter = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			onSave(textState);
		}
	};
	return (
		<div className="Edit-Card">
			<div className="Card">
				<TextareaAutosize
					autoFocus
					className="Edit-Card-Textarea"
					placeholder="Enter the text for this card..."
					value={textState}
					onChange={handleChangeText}
					onKeyDown={onEnter}
				/>
			</div>
			<EditButtons
				handleSave={() => onSave(textState)}
				saveLabel={adding ? "Add card" : "Save"}
				handleDelete={onDelete}
				handleCancel={onCancel}
			/>
		</div>
	);
}

export default CardEditor;
