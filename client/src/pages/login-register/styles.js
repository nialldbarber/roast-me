import styled from 'styled-components'

export const TabContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: ${(props => props.theme.formMaxWidth)};
`

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
