import styled from "styled-components";

const ListEditorStyled = styled.div`
	.List-Title-Edit {
		display: flex;
		align-items: center;
	}

	.List-Title-Edit ion-icon {
		cursor: pointer;
		padding: 2px;
		margin: 1px 3px;
		font-size: 23px;
		border-radius: 5px;
		color: rgba(0, 0, 0, 0.5);
	}

	.List-Title-Edit ion-icon:hover {
		background: rgba(211, 211, 211, 1);
	}

	.List-Title-Textarea {
		margin: 6px 0 5px 6px;
		border-radius: 3px;
		border: none;
		resize: none;
		outline: none;
		font-size: 15px;
		padding: 5px;
	}

	.List-Title-Textarea:focus {
		box-shadow: inset 0 0 0 2px #0079bf;
	}
`;
