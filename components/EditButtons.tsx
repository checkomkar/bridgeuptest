import React from "react";
import styles from "./styles/EditButtons.module.scss";
function EditButtons({ handleSave, saveLabel, handleDelete, handleCancel }) {
	return (
		<div className={styles["edit-buttons"]}>
			<div
				tabIndex={0}
				className={styles["edit-button"]}
				style={{ backgroundColor: "#5aac44" }}
				onClick={handleSave}
			>
				{saveLabel}
			</div>
			{handleDelete && (
				<div
					tabIndex={0}
					className={styles["edit-button"]}
					style={{ backgroundColor: "#EA2525", marginLeft: 0 }}
					onClick={handleDelete}
				>
					Delete
				</div>
			)}
			<div
				tabIndex={0}
				className={styles["edit-button-cancel"]}
				onClick={handleCancel}
			>
				&times;
			</div>
		</div>
	);
}

export default EditButtons;
