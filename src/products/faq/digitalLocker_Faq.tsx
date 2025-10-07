import React, { useState } from 'react';

function DigitalLocker_Faq() {
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
        question: "What is an RFID card locker lock?",
        answer: "An RFID card locker lock is an electronic lock system that uses RFID (Radio Frequency Identification) technology to grant access through RFID cards or tags, offering secure and contactless locker access.",
    },
    {
        question: "Why choose smart locker locks over traditional locks?",
        answer: "Smart locker locks eliminate the need for keys, reduce maintenance costs, and enhance user convenience with touch-free access through RFID cards, keypads, or mobile apps.",
    },
    {
        question: "Which are the best smart locks for lockers in Dubai?",
        answer: "Yes. IV RFID SThe best smart locks for lockers in Dubai are those offering durability, data security, and easy integration—like the RFID-based locker systems provided by IV RFID Solutions LLC.",
    },
    {
        question: "How do RFID card locker locks improve security?",
        answer: "RFID card locker locks store encrypted access data, making duplication nearly impossible. They also allow administrators to monitor access logs for enhanced control and accountability.",
    },
    {
        question: "Can smart locker locks be customized for different industries?",
        answer: "Yes. IV RFID Solutions LLC offers customized smart locker locks for gyms, offices, educational institutions, hospitals, and residential facilities to match specific operational needs.",
    },
    {
        question: "Are RFID locker locks suitable for gyms and fitness centers?",
        answer: "Absolutely. RFID card locker locks are ideal for gyms, offering seamless member access, high security, and easy locker assignment—all without keys or combinations.",
    },
    {
        question: "What makes IV RFID Solutions LLC a trusted provider of smart locker systems?",
        answer: "IV RFID Solutions LLC is a leading RFID technology provider in the UAE, delivering advanced RFID card locker locks and smart locker solutions with professional installation and technical support.",
    },
    {
        question: "How are smart locker locks powered?",
        answer: "Most smart locker locks are battery-operated, ensuring long-lasting performance. Some advanced models also support wired power and low-battery alerts for maintenance efficiency.",
    },
    {
        question: "Can I integrate RFID locker locks with access control systems?",
        answer: "Yes, RFID locker locks from IV RFID Solutions LLC can be easily integrated with building access control systems for centralized management and synchronized security.",
    },
    {
        question: "Where can I buy the best RFID card locker locks in Dubai?",
        answer: "You can find high-quality RFID card locker locks and smart locker systems at IV RFID Solutions LLC, your trusted RFID technology partner in Dubai and across the UAE.",
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

export default DigitalLocker_Faq;