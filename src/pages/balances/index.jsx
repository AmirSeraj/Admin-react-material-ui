import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid} from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Balances = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 2,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          $ {params.row.cost}
        </Typography>
      ),
    },
  ];

  return (
    <Box>
      <Header
        title="INVOICES BALANCES INFORMATION"
        subtitle="List of Invoice Balances"
      />
      <Box
        px="7px"
        sx={{
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[500]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          // pageSizeOptions={[5]}
        />
      </Box>
    </Box>
  );
};

export default Balances;
