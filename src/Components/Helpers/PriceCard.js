import React from "react";

const PriceCard = () => {
  return [
    {
      title: "BASIC",
      adds: ["Advertising copy written", "Email Response to Company HR"],
      recommendations: ["2 Instant 10 matches Batches"],
      updates: ["Updates Of daily applicants Applied On ADDs"],
      pricing: "25,000 PKR / per candidates\nCompany pay 50% upfront and 50% at the end",
    },
    {
      title: "Advance",
      adds: ["Complete Basic Package"],
      recommendations: ["2 Instant 15 Matches Batches"],
      updates: ["Cheking CV/Resume", "Schedule Physical On online Interview"],
      pricing: "35,000 PKR / per candidates\nCompany pay 60% upfront and 40% at the end",
    },
    {
      title: "Premium",
      adds: ["Complete Basic And Advance Package."],
      recommendations: ["Talent Accusation First (DK conduct an Interview then recruit it to you)", "Proper Feedback", "From First Step to on boarding candidates with contract.", "3 Month Replacement"],
      pricing: "50% Of First month Salary\nCost For a 50K or less job salaries\nCompany pay 60% Upfront and 40% at the end",
    }
  ];
};

export default PriceCard;
