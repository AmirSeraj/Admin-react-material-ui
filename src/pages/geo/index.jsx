
import GeographyChart from '../../components/GeographyChart';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const GeoChart = () => {
  return (
    <Box m='20px'>
      <Header title="Geography Chart" subtitle="a simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default GeoChart;