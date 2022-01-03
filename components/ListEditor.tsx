import React, { useRef, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./styles/ListEditor.module.scss";
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
		<div className={styles["list-title-edit"]} ref={ref}>
			<TextareaAutosize
				autoFocus
				className={styles["list-title-textarea"]}
				placeholder="Enter list title..."
				value={title}
				onChange={handleChangeTitle}
				onKeyDown={onEnter}
				style={{ width: deleteList !== undefined ? 220 : 245 }}
			/>
			{deleteList && (
				<span onClick={deleteList}>
					<MdDeleteOutline />
				</span>
			)}
		</div>
	);
}

export default ListEditor;
