import { styled } from 'styled-components'

export const FrameWrapper = styled.div`
    display: flex;
	flex-flow: row wrap;
    border: 1px solid rgba(194, 224, 255, 0.08);
    background: rgba(0, 30, 60, 0.2);
    border-radius: 12px;
    width: 780px;
    height: 430px;
    overflow: hidden;
`

export const FrameHeader = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	flex-basis: 100%;
	padding-left: 16px;
	padding-right: 16px;
	height: 30px;
	border-bottom: 1px solid rgba(194, 224, 255, 0.08);
`
export const Circle = styled.span`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${props => props.fill};
`

export const BodyWrapper = styled.div`
	display: inline-flex;
	flex-basis: 75%;
	height: calc(100% - 30px);
	justify-content: center;
	flex-direction: column;
	padding: 12px;
	box-sizing: border-box;
`

export const SidebarWrapper = styled.div`
	flex-basis: 25%;
	background: rgb(0, 30, 60);
	border-right: 1px solid rgba(194, 224, 255, 0.08);
	box-sizing: border-box;
`

export const Nav = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
	gap: 2px;
`

export const NavList = styled.li`
	list-style: none;
	a {
		display: flex;
		color: rgba(255, 255, 2255, 0.5);
		text-decoration: none;
		padding: 8px 16px;
		border-radius: 8px;
		font-size: 0.875rem;
		&:hover {
			background-color: rgba(0, 0, 0, 0.2);
		} 
	}
	&.active {
		& > a {
			background-color: rgba(0, 0, 0, 0.2);
		}
		ul {
			display: flex;
		}
	}
	ul {
		display: none;
	}
`

export const Header = styled.h3`
	opacity: 0.5;
	margin: 5px 0;
`

export const SubHeading = styled.p`
	opacity: 0.25;
	margin: 4px 0 16px;
	font-size: 0.75rem;
	width: 75%;
`

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-column-gap: 12px;
	grid-row-gap: 12px;
	width: 100%;
	height: 100%;
`
export const Grid = styled.div`
	grid-area: ${props => props.$rowStart} / ${props => props.$columnStart} / ${ props => props.$rowEnd} / ${props => props.$columnEnd};
	background: rgba(255,255,255,0.05);
	border-radius: 4px;
`