import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from '../../components/BarChart';
import GeographyChart from "../../components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[600],
            fontSize: "13px",
            fontWeight: "bold",
            padding: "10px 15px 10px 5px",
          }}
          variant="contained"
        >
          <DownloadOutlinedIcon sx={{ marginRight: "10px" }} />
          DOWNLOAD REPORTS
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="100px"
        gap="20px"
      >
        {/* row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
        >
          <StatBox
            title="12.361"
            subtitle="Emails Sent"
            icon={<EmailIcon />}
            progress="0.8"
            increase="45"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
        >
          <StatBox
            title="431.225"
            subtitle="Sales Obtained"
            icon={<PointOfSaleIcon />}
            progress="0.6"
            increase="21"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
        >
          <StatBox
            title="32.441"
            subtitle="New Clients"
            icon={<PersonAddIcon />}
            progress="0.29"
            increase="5"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
        >
          <StatBox
            title="1.325.134"
            subtitle="Traffic Received"
            icon={<TrafficIcon />}
            progress="0.8"
            increase="43"
          />
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gap="20px"
        mt="10px"
      >
        <Box
          gridColumn="span 8"
          p="10px 25px 0px 25px"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="column">
              <Typography variant="h5">Revenue Generated</Typography>
              <Typography color={colors.greenAccent[300]} fontWeight="bold">
                $59,342.32
              </Typography>
            </Box>
            <DownloadOutlinedIcon
              sx={{
                fontSize: "23px",
                color: colors.greenAccent[500],
                cursor: "pointer",
              }}
            />
          </Box>
          <Box height="250px" mt="-30px">
            <LineChart />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          height="272px"
          overflow="auto"
          backgroundColor={colors.primary[400]}
          // sx={{ overflowY: "scroll" }}
        >
          <Box borderBottom="2px solid #141b2d" p="10px">
            <Typography variant="h5">Recent Transactions</Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p="10px"
              borderBottom="2px solid #141b2d"
            >
              <Box display="flex" flexDirection="column">
                <Typography color={colors.greenAccent[300]}>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.date}
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: "blue" }}
              >
                ${transaction.cost}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gap="20px">
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="25px 20px"
        >
          <Typography>Campaign</Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <ProgressCircle progress="0.75" size="120" />
            <Typography m="5px" color={colors.greenAccent[500]}>
              $48,352 revenue generated
            </Typography>
            <Typography color={colors.grey[300]}>
              Includes etra misc expenditures and costs
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="25px 20px"
        >
          <Typography>Sales Quantity</Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="25px 20px"
        >
          <Typography>Geography Based Traffic</Typography>
          <Box height="30vh">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
