import React from 'react';
import team1 from "../../assets/WhatsApp-Image-2024-03-13-at-16.18.13_22a2dc79-1.jpg";
import team2 from "../../assets/IMG_20240114_012458_666-1-1024x991.jpg";
import team3 from "../../assets/WhatsApp-Image-2024-03-23-at-6.03.29-PM-609x1024.jpeg";
import team4 from "../../assets/WhatsApp-Image-2024-03-14-at-16.32.37_3fa62b6c.jpg";

const Team = () => {
  return [
    {
      url: team1,
      name: "Danial Khan",
      type: "Founder",
    },
    {
      url: team2,
      name: "Farhan",
      type: "Sales Executive",
    },
    {
      url: team3,
      name: "Zara Nauman",
      type: "HR Manager",
    },
    {
      url: team4,
      name: "Ahmer",
      type: "Sales Executive",
    },
  ];
};

export default Team;
