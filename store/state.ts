import { AppState } from "./types";
let initialState = {};
if (localStorage.getItem("state") !== null) {
	initialState = JSON.parse(localStorage.getItem("state"));
}

export default initialState;
