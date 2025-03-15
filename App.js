import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import OTPVerification from "./OTPVerification";
import MFASetup from "./MFASetup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/mfa-setup" element={<MFASetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
