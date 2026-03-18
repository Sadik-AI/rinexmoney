import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import GrievancePage from './pages/GrievancePage'
import HomePage from './pages/HomePage'
import LegalHubPage from './pages/LegalHubPage'
import NotFoundPage from './pages/NotFoundPage'
import PartnersPage from './pages/PartnersPage'
import PolicyPage from './pages/PolicyPage'
import { privacyPolicy, termsOfUse } from './siteContent'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/legal" element={<LegalHubPage />} />
          <Route path="/privacy-policy" element={<PolicyPage document={privacyPolicy} />} />
          <Route path="/terms-of-use" element={<PolicyPage document={termsOfUse} />} />
          <Route path="/partner-lenders" element={<PartnersPage />} />
          <Route path="/grievance-redressal" element={<GrievancePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
