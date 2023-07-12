import { Header, GridContainer, Grid, SubHeading } from '../StyledModule';
import withGrid from './withGrid';

const Template = ({data, name}) => {
	return(
		<>
			<Header>
				{name}
			</Header>
			<SubHeading>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, eos alias deleniti eveniet modi reprehenderit fuga neque esse placeat.
			</SubHeading>
			<GridContainer>
				{
					data.map(element => {
						return(
							<Grid $rowStart={element.rowStart} $columnStart={element.columnStart} $rowEnd={element.rowEnd} $columnEnd={element.columnEnd} />
						)
					})
				}
			</GridContainer>
		</>
	)
}

export default withGrid(Template)