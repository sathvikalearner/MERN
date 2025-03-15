import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MFASetup() {
  const [qrCode, setQrCode] = useState("");
  const navigate = useNavigate();

  const fetchQRCode = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mfa/setup");
      setQrCode(response.data.qrCode);
    } catch (error) {
      console.error("Failed to fetch QR code", error);
    }
  };

  const handleEnableMFA = async () => {
    navigate("/otp-verification");
  };

  return (
    <div>
      <h2>Enable MFA</h2>
      <button onClick={fetchQRCode}>Generate QR Code</button>
      {qrCode && <img src={qrCode} alt="Scan to enable MFA" />}
      <button onClick={handleEnableMFA}>Continue</button>
    </div>
  );
}

export default MFASetup;
