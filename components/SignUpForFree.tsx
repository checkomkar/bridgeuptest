import React from "react";
import styles from "./styles/SignUpForFree.module.scss";
function SignUpForFree() {
	return (
		<>
			<div
				className={`${styles["sign-up-for-free-container"]} ${styles["mod-warning"]}`}
			>
				<span>Visually collaborate with anyone, anywhere.</span>
				<a href="#" className={`btn ${styles["btn-custom-primary"]}`}>
					Sign up for free
				</a>
			</div>
		</>
	);
}

export default SignUpForFree;
