import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";
import styles from "./styles/CardEditor.module.scss";
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
		<div className={styles["edit-card"]}>
			<div className={styles["card"]}>
				<TextareaAutosize
					autoFocus
					className={styles["edit-card-textarea"]}
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
