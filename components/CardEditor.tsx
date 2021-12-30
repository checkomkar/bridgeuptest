import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import EditButtons from "./EditButtons";
function CardEditor() {
	const handleChangeText = (event) =>
		this.setState({ text: event.target.value });

	const onEnter = (e) => {
		const { text } = this.state;

		if (e.keyCode === 13) {
			e.preventDefault();
			this.props.onSave(text);
		}
	};
	return (
		<div className="Edit-Card">
			<div className="Card">
				<TextareaAutosize
					autoFocus
					className="Edit-Card-Textarea"
					placeholder="Enter the text for this card..."
					value={text}
					onChange={this.handleChangeText}
					onKeyDown={this.onEnter}
				/>
			</div>
			<EditButtons
				handleSave={() => onSave(text)}
				saveLabel={adding ? "Add card" : "Save"}
				handleDelete={onDelete}
				handleCancel={onCancel}
			/>
		</div>
	);
}

export default CardEditor;
