import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SidebarWrapper, Nav, NavList } from './StyledModule'

const Sidebar = () => {

	const location = useLocation()
	const [menu] = useState([
		{
			name: "Dashboard",
			path: "/"
		},
		{
			name: "Projects",
			path: "/projects",
			// submenu: [
			// 	{
			// 		name: "Test",
			// 		path: "projects/test"
			// 	},
			// 	{
			// 		name: "Project 2",
			// 		path: "/project2"
			// 	},
			// 	{
			// 		name: "Project 3",
			// 		path: "/project3"
			// 	}
			// ]
		},
		{
			name: "Team",
			path: "/team"
		},
		{
			name: "Calender",
			path: "/calendar"
		},
		{
			name: "Documents",
			path: "/documents"
		},
		{
			name: "Reports",
			path: "/reports"
		}
	])
		
	return(
		<SidebarWrapper>
			<Nav>
				{
					menu.map((item, index) => {
						return(
							<NavList key={index} className={`${location.pathname === item.path ? 'active' : ''}`}>
								<Link to={item.path}>{item.name}</Link>
								{item.submenu && 
									<Nav>
										{item.submenu.map((subitem) => {
											return(
												<NavList><Link>{subitem.name}</Link></NavList>
											)
										})}
									</Nav>
								}
							</NavList>
						)
					})
				}
			</Nav>
		</SidebarWrapper>
	)
}

export default Sidebar; 