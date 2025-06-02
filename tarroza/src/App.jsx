import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CertificateOfRegistration from "./CertificateOfRegistration";

function App() {
  return (
    <Router>
      <Routes>
        {/* Option 1: Add a route for the root path */}
        <Route path="/" element={<CertificateOfRegistration />} />
        
        {/* Keep your existing route */}
        <Route path="/certificate" element={<CertificateOfRegistration />} />
        
        {/* Option 2: Or alternatively, redirect from root to /certificate */}
        {/* <Route path="/" element={<Navigate to="/certificate" replace />} /> */}
        
        {/* Add a catch-all route for any undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;