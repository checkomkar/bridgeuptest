import styled from "styled-components";

const CardStyled = styled.div`
	.Card {
		position: relative;
		cursor: pointer;
		background: white;
		margin: 5px;
		padding: 10px;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.12);
		box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
		font-size: 15px;
		overflow-wrap: break-word;
		min-height: 18px;
	}

	.Card:hover {
		background: #f5f6f7;
	}

	.Card-Icons {
		position: absolute;
		top: 5px;
		right: 5px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.Card-Icon {
		cursor: pointer;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		margin: 1px;
		color: rgba(0, 0, 0, 0.5);
		background: #f5f6f7;
		opacity: 0.9;
	}

	.Card-Icon:hover {
		opacity: 1;
		background: rgba(220, 220, 220, 1);
	}
`;

export default CardStyled;
