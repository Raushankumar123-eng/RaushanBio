import express from "express";

const app = express();

const RaushanBio = {
  Name: "Raushan Kumar",
  Email: "tiwariraushan60@gmail.com",
  PhoneNo: "7254848660",
  currentAdress:
    "Greater Noida Sector 17A, Gautam Buddha Nagar , Dankaur , Uttar Pradesh",
  PermanentAddress: "Bokane Kalan , East Champaran , Bihar",
  DOB: "20/04/2004",
  HigherEducation: "MCA(Masters Of Computer Application) From Galgotias University",
  Heigh: "5.4",
  Weight: "62",
  Color: "White",
  Cast: "Brahman",
  Gender: "Male",
  Gotra: "Sandilya",
  JOb: "Software Developer",
  Salary: "6LPA",
  CompanyName: "SkillBuds",
  FatherName: "Kameshwar Tiwari",
  MothersName: "Mina Devi",
  BrotherName: "Big - Mirtunjay Tiwari , Mid- Rahul kumar Tiwari",
  SisterName: "Married Big - Alka Dubey , Mid , Married - Khusbu Devi (Surbhi Devi)",
  Instagram: "https://www.instagram.com/raushantiwari920/",
  LinkedIn: "https://www.linkedin.com/in/raushankumar123/",
};

app.get("/", (req, res) => {
  res.json(RaushanBio);
});

// 🔑 Render ya Heroku ke liye PORT dynamic rakho
const PORT = process.env.PORT || 5400;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
