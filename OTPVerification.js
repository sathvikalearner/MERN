import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function OTPVerification() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", {
        email: location.state.email,
        otp,
      });

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      console.error("OTP Verification failed", error);
    }
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleVerifyOTP}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default OTPVerification;
