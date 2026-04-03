import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { LandlordsPage } from './pages/LandlordsPage';
import { ApartmentsPage } from './pages/ApartmentsPage';
import { ParkingPage } from './pages/ParkingPage';
import { PetsPage } from './pages/PetsPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { ExpensesPage } from './pages/ExpensesPage';
import { SpecialAssessmentsPage } from './pages/SpecialAssessmentsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landlords" element={<LandlordsPage />} />
          <Route path="/apartments" element={<ApartmentsPage />} />
          <Route path="/parking" element={<ParkingPage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/special-assessments" element={<SpecialAssessmentsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
