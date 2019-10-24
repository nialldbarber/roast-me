import styled from 'styled-components'

export const Wrapper = styled.button`
	white-space: nowrap;
	display: inline-block;
	height: 40px;
	width: 100%;
	line-height: 40px;
	padding: 0 14px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.02);
	border-radius: 4px;
	background-color: #f0f3f5;
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .025em;
	text-decoration: none;
	transition: .125s ease;

	&.active {
		background-color: #fff;
	}
`
