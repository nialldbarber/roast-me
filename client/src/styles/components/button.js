import styled from 'styled-components'

export const Btn = styled.button`
	white-space: nowrap;
	display: inline-block;
	height: 40px;
	line-height: 40px;
	padding: 0 14px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05), 0 3px 6px rgba(0, 0, 0, 0.02);
	border-radius: 4px;
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .025em;
	text-decoration: none;
	transition: all .15s ease;

	&:hover {
		box-shadow: 0 13px 27px -5px rgba(50, 50, 93, .25), 0 8px 16px -8px rgba(0, 0, 0, .3),
			0 -6px 16px -6px rgba(0, 0, 0, .025);
	}
`
