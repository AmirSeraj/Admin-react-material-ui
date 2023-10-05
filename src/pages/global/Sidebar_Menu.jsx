import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupIcon from "@mui/icons-material/Group";
// import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from "@mui/icons-material/Logout";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Sidebar_Menu = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar className="sidebar">
      <Menu>
        <MenuItem
          className="menu1"
          icon={
            <MenuRoundedIcon
              onClick={() => {
                collapseSidebar();
              }}
            />
          }
        >
          <Typography variant="h3" color={colors.grey[500]}>
            ADMINS
          </Typography>
        </MenuItem>

        {/* <MenuItem> */}
        {/* USER */}
        {!isCollapsed && (
          <Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="70px"
                height="70px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center" mb="20px">
              <Typography
                variant="h4"
                fontWeight="bold"
                color={colors.grey[400]}
              >
                Ed Roph
              </Typography>
            </Box>
          </Box>
        )}
        {/* </MenuItem> */}

        <MenuItem
          onClick={() => setSelected("Dashboard")}
          className={selected === "Dashboard" && "active"}
          component={<Link to="/" />}
          icon={<GridViewRoundedIcon />}
        >
          Dashboard
        </MenuItem>
        <SubMenu label="Data" icon={<BubbleChartIcon />}>
          <MenuItem
            onClick={() => setSelected("Team")}
            className={selected === "Team" && "active"}
            component={<Link to="/team" />}
            icon={<GroupIcon />}
          >
            Manage Team
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("contactsInfo")}
            className={selected === "contactsInfo" && "active"}
            component={<Link to="/contactsInfo" />}
            icon={<ContactsOutlinedIcon />}
          >
            Contacts Informations
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("balances")}
            className={selected === "balances" && "active"}
            component={<Link to="/balances" />}
            icon={<ReceiptOutlinedIcon />}
          >
            Invoices Balances
          </MenuItem>
        </SubMenu>
        <SubMenu label="Pages" icon={<AutoStoriesIcon />}>
          <MenuItem
            onClick={() => setSelected("profile")}
            className={selected === "profile" && "active"}
            component={<Link to="/profile" />}
            icon={<PersonOutlinedIcon />}
          >
            Profile Form
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("calendar")}
            className={selected === "calendar" && "active"}
            component={<Link to="/calendar" />}
            icon={<CalendarTodayOutlinedIcon />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("faq")}
            className={selected === "faq" && "active"}
            component={<Link to="/faq" />}
            icon={<HelpOutlinedIcon />}
          >
            FAQ Page
          </MenuItem>
        </SubMenu>
        <SubMenu label="Charts" icon={<DataThresholdingIcon />}>
          <MenuItem
            onClick={() => setSelected("bar")}
            className={selected === "bar" && "active"}
            component={<Link to="/barChart" />}
            icon={<BarChartOutlinedIcon />}
          >
            Bar Chart
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("pie")}
            className={selected === "pie" && "active"}
            component={<Link to="/pieChart" />}
            icon={<PieChartOutlinedIcon />}
          >
            Pie Chart
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("line")}
            className={selected === "line" && "active"}
            component={<Link to="/lineChart" />}
            icon={<TimelineOutlinedIcon />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            onClick={() => setSelected("geo")}
            className={selected === "geo" && "active"}
            component={<Link to="/geoChart" />}
            icon={<MapOutlinedIcon />}
          >
            Geography Chart
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<LogoutIcon />}> Logout </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidebar_Menu;
