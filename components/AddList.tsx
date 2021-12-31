import React, { useState, useEffect } from "react";
import ListEditor from "./ListEditor";
import shortid from "shortid";
import EditButtons from "./EditButtons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
function AddList({ toggleAddingList }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const handleChangeTitle = (e) => setTitle(e.target.value);
	const createList = async () => {
		toggleAddingList();

		dispatch({
			type: actions.addList,
			payload: { listId: shortid.generate(), listTitle: title },
		});
	};
	return (
		<div className="Add-List-Editor">
			<ListEditor
				title={title}
				handleChangeTitle={handleChangeTitle}
				onClickOutside={toggleAddingList}
				saveList={createList}
				deleteList={undefined}
			/>

			<EditButtons
				handleSave={createList}
				saveLabel={"Add list"}
				handleCancel={toggleAddingList}
			/>
		</div>
	);
}

export default AddList;
