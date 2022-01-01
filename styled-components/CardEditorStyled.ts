import styled from "styled-components";

const CardEditorStyled = styled.div`
	.Edit-Card .Card {
		min-height: 50px;
		padding-left: 8px;
		padding-right: 15px;
	}

	.Edit-Card .Card:hover {
		background: white;
	}

	.Edit-Card-Textarea {
		width: 100%;
		border: none;
		resize: none;
		outline: none;
		font-size: 15px;
	}
`;

export default CardEditorStyled;
