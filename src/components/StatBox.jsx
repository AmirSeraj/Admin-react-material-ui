import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, size, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      m="0 30px"
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      width="100%"
    >
      <Box display="flex" flexDirection="column">
        {icon}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
        <Typography variant="h6" sx={{ color: colors.greenAccent[300] }}>
          {subtitle}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <ProgressCircle progress={progress} size={size} />
        <Typography
          fontStyle="italic"
          variant="h6"
          sx={{ color: colors.greenAccent[100], margin: "5px auto" }}
        >
          + {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
