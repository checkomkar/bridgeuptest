import React from "react";
import ListEditor from "./ListEditor";
import shortid from "shortid";
import EditButtons from "./EditButtons";
function AddList() {
	return (
		<div className="Add-List-Editor">
			<ListEditor
				title={title}
				handleChangeTitle={this.handleChangeTitle}
				onClickOutside={toggleAddingList}
				saveList={this.createList}
			/>

			<EditButtons
				handleSave={this.createList}
				saveLabel={"Add list"}
				handleCancel={toggleAddingList}
			/>
		</div>
	);
}

export default AddList;
