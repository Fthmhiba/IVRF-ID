import React, { useState } from 'react';

function Uhf_Faq() {
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
        question: "Who are the top UHF RFID hardware suppliers in Dubai?",
        answer: "Dubai hosts several leading suppliers, but IV RFID SOLUTIONS LLC stands out as one of the top UHF RFID hardware suppliers in Dubai due to their wide range of advanced RFID readers, antennas, tags, and complete integration services.",
    },
    {
        question: "What makes IV RFID SOLUTIONS LLC one of the top UHF RFID hardware suppliers in Dubai?",
        answer: "IV RFID SOLUTIONS LLC offers high-performance UHF RFID devices, excellent customer support, and tailored solutions for businesses in logistics, manufacturing, retail, and asset tracking, making them a trusted choice in Dubai.",
    },
    {
        question: "Do IV RFID SOLUTIONS LLC provide digital locker locks in Dubai?",
        answer: "Yes. IV RFID SOLUTIONS LLC not only supplies UHF RFID hardware but also provides secure and smart digital locker locks designed for offices, gyms, schools, and industrial environments.",
    },
    {
        question: "Why choose digital locker locks with IV RFID SOLUTIONS LLC?",
        answer: "Their digital locker locks are powered by RFID technology, offering contactless access, enhanced security, easy user management, and compatibility with various access control systems.",
    },
    {
        question: "How can UHF RFID solutions improve our business operations?",
        answer: "Using UHF RFID hardware from top suppliers like IV RFID SOLUTIONS LLC helps businesses automate tracking, reduce manual errors, improve warehouse efficiency, and enhance real-time visibility of assets.",
    },
    {
        question: "Are digital locker locks from IV RFID SOLUTIONS LLC suitable for employee lockers?",
        answer: "Absolutely. Their digital locker locks are ideal for employee lockers, delivering convenience through RFID cards or tags, along with secure access and usage logging features.",
    },
    {
        question: "Where can I buy UHF RFID readers and antennas in Dubai?",
        answer: "You can purchase high-quality UHF RFID readers and antennas from top suppliers in Dubai like IV RFID SOLUTIONS LLC who offer both product sales and technical support.",
    },
    {
        question: "Are IV RFID SOLUTIONS LLC solutions customizable?",
        answer: "Yes, IV RFID SOLUTIONS LLC provides customized RFID and digital locker lock solutions based on specific industry requirements.",
    },
    {
        question: "Do they provide installation and technical support in Dubai?",
        answer: "Yes, IV RFID SOLUTIONS LLC offers complete installation, configuration, and technical support for all their UHF RFID hardware and digital locker lock systems.",
    },
    {
        question: "How to contact IV RFID SOLUTIONS LLC to get a quotation?",
        answer: "You can contact IV RFID SOLUTIONS LLC via their website or customer support number to get a quotation for UHF RFID hardware or digital locker locks in Dubai.",
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

export default Uhf_Faq;