import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { createTheme } from "@mui/material/styles";
import InputBase from '@mui/material';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlinedIcon from "@mui/icons-materialPersonOutlined";
import SearchIcon from "@mui/icons-materSearchIcon";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        
      </Box>
      <IconButton></IconButton>
    </Box>
  );
};

export default Topbar;

// import React, { Component } from "react";
// import {
//   Collapse,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   NavItem,
//   NavLink,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { LoginMenu } from "./api-authorization/LoginMenu";
// import "./NavMenu.css";

// const Topbar = () => {
//   return (
//       <header>
//         <Navbar
//           className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
//           container
//           light
//         >
//           <NavbarBrand tag={Link} to="/">
//             meks.frontend
//           </NavbarBrand>
//           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//           <Collapse
//             className="d-sm-inline-flex flex-sm-row-reverse"
//             isOpen={!this.state.collapsed}
//             navbar
//           >
//             <ul className="navbar-nav flex-grow">
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/">
//                   Home
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/counter">
//                   Information
//                 </NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink tag={Link} className="text-dark" to="/fetch-data">
//                   Related
//                 </NavLink>
//               </NavItem>
//               <LoginMenu></LoginMenu>
//             </ul>
//           </Collapse>
//         </Navbar>
//       </header>
//     );
// }

// export default Topbar;

// export class NavMenu extends Component {
//   static displayName = NavMenu.name;

//   constructor(props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true,
//     };
//   }

//   toggleNavbar() {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   }

//   render() {
    
//   }
// }
