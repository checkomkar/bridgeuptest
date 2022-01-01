import styled from "styled-components";

const EditButtonsStyled = styled.div`
	.Edit-Buttons {
		display: flex;
	}

	.Edit-Button {
		cursor: pointer;
		box-shadow: 0 1px 0 0 #3f6f21;
		width: fit-content;
		margin: 0 5px 10px;
		padding: 6px 12px;
		border-radius: 5px;
		color: white;
		font-weight: 700;
		outline: none;
	}

	.Edit-Button:hover {
		opacity: 0.7;
	}

	.Edit-Button-Cancel {
		cursor: pointer;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		font-size: 20px;
		opacity: 0.5;
		outline: none;
	}

	.Edit-Button-Cancel:hover {
		opacity: 1;
	}
`;

export default EditButtonsStyled;
