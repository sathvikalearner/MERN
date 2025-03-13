router.post("/enable-mfa", async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) return res.status(400).json({ message: "User not found" });
  
      const secret = speakeasy.generateSecret({ length: 20 });
  
      user.mfaSecret = secret.base32;
      user.isMFAEnabled = true;
      await user.save();
  
      QRCode.toDataURL(secret.otpauth_url, (err, imageUrl) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "MFA enabled", secret: secret.base32, qrCodeUrl: imageUrl });
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  