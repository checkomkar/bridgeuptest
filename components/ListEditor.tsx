import React, { useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
function ListEditor({
	list,
	title,
	handleChangeTitle,
	onClickOutside,
	saveList,
	deleteList,
}) {
	const ref = useRef(null);
	const onEnter = (e) => {
		if (e.keyCode === 13) {
			e.preventDefault();
			saveList();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick, false);
		return () => {
			document.removeEventListener("click", handleClick, false);
		};
	}, []);

	const handleClick = (e) => {
		const node = ref.current;

		if (node.contains(e.target)) {
			return;
		}

		onClickOutside();
	};
	return (
		<div className="List-Title-Edit" ref={ref}>
			<TextareaAutosize
				autoFocus
				className="List-Title-Textarea"
				placeholder="Enter list title..."
				value={title}
				onChange={handleChangeTitle}
				onKeyDown={onEnter}
				style={{ width: deleteList !== undefined ? 220 : 245 }}
			/>
			{deleteList && <span onClick={deleteList}>Del</span>}
		</div>
	);
}

export default ListEditor;
