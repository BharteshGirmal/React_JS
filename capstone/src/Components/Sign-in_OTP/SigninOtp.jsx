import React, { useState } from "react";
import { signInWithPhone } from "../../Utils/Firebase/Firebase.utils";
import '../Sign-in/sign-in.styles.scss'
const PhoneAuthComponent = () => {
      const [phoneNumber, setPhoneNumber] = useState("");
      const [otp, setOtp] = useState("");
      const [message, setMessage] = useState("");

      const handleSendOtp = async () => {
            try {
                  await signInWithPhone(phoneNumber);
                  setMessage("OTP sent successfully. Please check your phone.");
            } catch (error) {
                  setMessage("Failed to send OTP. Please try again.");
            }
      };

      const handleVerifyOtp = async () => {
            try {
                  const confirmationResult = window.confirmationResult;
                  await confirmationResult.confirm(otp);
                  setMessage("Phone number verified successfully!");
            } catch (error) {
                  setMessage("Invalid OTP. Please try again.");
            }
      };

      return (
            <div>
                  <div id="recaptcha-container"></div>
                  <input
                        type="text"
                        placeholder="Enter phone number (e.g., +1234567890)"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <button onClick={handleSendOtp}>Send OTP</button>

                  <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                  />
                  <button onClick={handleVerifyOtp}>Verify OTP</button>

                  <p>{message}</p>
            </div>
      );
};

export default PhoneAuthComponent;
