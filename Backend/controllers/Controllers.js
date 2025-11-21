// controllers/runnerController.js
const Runner = require("../models/Runner");
const Coupon = require("../models/CouponSchema");
const axios = require("axios");

// Generate Unique BIB Number: e.g., RUN25001, RUN21005
const generateBib = async (distance) => {
  const prefix = distance === "21km" ? "HM" : distance === "10km" ? "TEN" : distance === "5km" ? "FIV" : "FUN";
  const count = await Runner.countDocuments({ distance }) + 1001;
  return `${prefix}${count}`;
};

exports.registerRunner = async (req, res) => {
  const {
    name, mobile, email, dob, bloodGroup, gender, distance, tshirtSize,
    emergencyContact, runningClub, medicalHistory, couponCode
  } = req.body;

  try {
    // Check duplicate mobile
    const existing = await Runner.findOne({ mobile });
    if (existing) return res.status(400).json({ message: "Mobile already registered!" });

    // Amount logic
    const amountMap = { "2km": 100, "5km": 200, "10km": 350, "21km": 600 };
    const amountPaid = amountMap[distance];

    // Generate BIB
    const bibNumber = await generateBib(distance);

    // Save Runner
    const runner = await Runner.create({
      name, mobile, email, dob, bloodGroup, gender, distance, tshirtSize,
      emergencyContact, runningClub, medicalHistory,
      couponCode: couponCode || "N/A",
      amountPaid,
      bibNumber
    });

    // SMS to Runner
    const msg = `Congrats ${name}! Your RUNATHON 2025 registration is confirmed!\nBIB: ${bibNumber}\nDistance: ${distance.toUpperCase()}\nEvent: 28 Dec 2025\nSee you at the start line!\n-Taaza TV & Bidhannagar City Police`;
    
    await axios.get(`http://web.poweredsms.com/submitsms.jsp?user=TAZATV&key=YOUR_KEY&mobile=${mobile}&message=${encodeURIComponent(msg)}&senderid=RUNATHN&accusage=1`);

    res.status(201).json({
      success: true,
      message: "Registration Successful!",
      data: { bibNumber, amountPaid, name, distance }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};