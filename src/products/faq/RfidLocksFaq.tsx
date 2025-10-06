import React, { useState } from 'react';

function RfidLocksFaq() {
    interface FaqItem {
    question: string;
    answer: string;
}

const [openIndex, setOpenIndex] = useState<number | null>(null);
const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const faqs: FaqItem[] = [
    {
        question: "What is the Best RFID Scanner for Supply Chain Management in UAE?",
        answer: "The best RFID scanner for supply chain management in UAE is one that ensures real-time tracking, fast data capture, and seamless integration with warehouse systems. At IV RFID Solutions LLC, we provide advanced handheld and fixed RFID scanners designed to improve inventory accuracy, reduce errors, and streamline logistics operations.",
    },
    {
        question: "How does an RFID Display Case Locking System work?",
        answer: "An RFID display case locking system uses RFID-enabled locks to secure products in retail or showroom display cases. Authorized staff can easily unlock cases using RFID cards or tags, enhancing both security and customer experience. IV RFID Solutions LLC offers smart display case locking systems tailored for jewelry stores, electronics showrooms, and luxury retail outlets.",
    },
    {
        question: "What are Fire Rated Smart Locks and why are they important?",
        answer: "Fire rated smart locks are advanced locking systems tested to withstand high temperatures during fire incidents, ensuring safety and compliance with UAE standards. They combine RFID or biometric access with fire-resistant durability. IV RFID Solutions LLC provides certified fire rated smart locks that offer maximum security and peace of mind for commercial and residential properties.",
    },
    {
        question: "Why choose IV RFID Solutions LLC for RFID and Smart Lock solutions in the UAE?",
        answer: " With years of expertise, IV RFID Solutions LLC delivers customized RFID scanners, RFID display case locking systems, and fire rated smart locks designed to meet industry-specific needs. Our solutions ensure efficiency, safety, and reliability across retail, logistics, healthcare, and corporate environments.",
    },
    {
        question: "Can RFID scanners improve warehouse efficiency in UAE?",
        answer: "Absolutely. Advanced RFID scanners for supply chain management in UAE help track inventory in real-time, reduce manual errors, and speed up warehouse operations. IV RFID Solutions LLC provides scanners optimized for high-volume warehouses and logistics centers.",
    },
    {
        question: "Are RFID display case locking systems suitable for high-value items?",
        answer: "Yes. RFID display case locking systems are ideal for securing jewelry, electronics, and luxury items. IV RFID Solutions LLC offers robust systems that restrict access to authorized personnel while maintaining easy usability for staff.",
    },
    {
        question: "How are fire rated smart locks different from regular smart locks?",
        answer: "Fire rated smart locks are specifically designed to withstand high temperatures and protect against fire damage. Unlike standard locks, they comply with UAE fire safety regulations. IV RFID Solutions LLC provides certified solutions that combine fire safety with smart access control.",
    },
    {
        question: "Can IV RFID Solutions LLC customize RFID solutions for different industries?",
        answer: "Yes. IV RFID Solutions LLC offers tailored RFID solutions including scanners, display case locks, and smart locks for retail, logistics, healthcare, and corporate sectors in the UAE. Customization ensures maximum efficiency and security.",
    },
]



  return (
    <div className='min-h-screen bg-gray-50 m-3 p-6'>
        <h1 className='font-bold text-center mb-8 p-2'>Frequently Asked Questions</h1>
        <div className="max-w-2xl mx-auto space-y-4 ">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow p-4 m-2  cursor-pointer transition"
                onClick={()=> toggleFaq(index)}
                >
                    <div className="" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <h3 className=" font-semibold  ">{faq.question}</h3>
                        <h2 className=" font-semiblod">{openIndex === index ? "−" : "+"}</h2>
                    </div>

                    {openIndex === index && (
                    <p className="mt-3 text-gray-700">{faq.answer}</p>
                    )}
                </div>  
            ))}
        </div>
    </div>
  );
}

export default RfidLocksFaq;
