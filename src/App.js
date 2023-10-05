import Topbar from "./pages/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import ContactsInfo from "./pages/contactsInfo";
import Balances from "./pages/balances";
import Profile from "./pages/profile";
import Calendar from "./pages/calendar";
import FAQ from "./pages/faq";
import Sidebar_Menu from "./pages/global/Sidebar_Menu";
import { Route, Routes } from "react-router-dom";
import Bar from "./pages/bar";
import PieChart from "./pages/pie";
import Line from "./pages/line";
import GeoChart from "./pages/geo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar_Menu />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contactsInfo" element={<ContactsInfo />} />
              <Route path="/balances" element={<Balances />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/barChart" element={<Bar />} />
              <Route path="/pieChart" element={<PieChart />} />
              <Route path="/lineChart" element={<Line />} />
              <Route path="/geoChart" element={<GeoChart />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
