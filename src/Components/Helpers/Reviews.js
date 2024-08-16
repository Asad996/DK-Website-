import React from 'react'
import reviewer1 from "../../assets/testemonial-pic.jpg"
import reviewer2 from "../../assets/WhatsApp-Image-2024-03-14-at-16.10.40_6fc1cadc.jpg"
import reviewer3 from "../../assets/WhatsApp-Image-2024-03-14-at-16.10.43_94b43575.jpg"
import reviewer4 from "../../assets/PXL_20240306_1257328522-1-scaled.jpg"
const Reviews = () => {
  return (
    [
        {
            url:reviewer1,
            name:"Furqan",
            email:"furqan974",
            text:"DK Recruitment provided exceptional service throughout the hiring process. Their team was proactive, responsive, and dedicated to finding the right candidate for our team. We couldn't be happier with the outcome."
        },
        {
            url:reviewer2,
            name:"Mohsin",
            email:"mohsin738",
            text:"We've partnered with DK Recruitment multiple times and have always been impressed by their professionalism and efficiency. They take the time to understand our needs and consistently deliver high-quality candidates. Highly recommend their services."
        
        },
        {
            url:reviewer3,
            name:"Arshad",
            email:"arshad897",
            text:"DK Recruitment goes above and beyond to ensure client satisfaction. Their attention to detail and personalized approach set them apart in the recruitment industry. We're grateful for their partnership and continued support."
        
        },
        {
            url:reviewer4,
            name:"Ali",
            email:"ali923",
            text:"We've had a fantastic experience working with DK Recruitment. Their team is knowledgeable, responsive, and always willing to go the extra mile to find the perfect candidate. We look forward to continuing our partnership with them in the future."
        
        },
    ]
  )
}

export default Reviews
