import React, { useState } from 'react';

function RfidtagFaq() {
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
        question: "Where can I find the best RFID tags in Dubai?",
        answer: "If you're looking for the best RFID tags in Dubai, IV RFID SOLUTIONS LLC is your trusted provider. They offer high-quality RFID tags suitable for various industries including retail, logistics, healthcare, and more.",
    },
    {
        question: "Where can I find the best RFID tags in Dubai?",
        answer: "IV RFID SOLUTIONS LLC stands out for its reliable products, expert technical support, and custom RFID solutions. As a leading provider of RFID tags in UAE, they deliver exceptional service across multiple sectors.",
    },
    {
        question: "Do IV RFID SOLUTIONS LLC offer custom RFID tag solutions in Dubai?",
        answer: "Yes, IV RFID SOLUTIONS LLC provides custom RFID tags tailored to specific business needs. Whether you require passive or active tags, they can design solutions that work best for your operations.",
    },
    {
        question: "Which industries benefit from using RFID tags in UAE?",
        answer: "Industries such as logistics, retail, healthcare, manufacturing, and event management widely benefit from RFID tags in UAE. IV RFID SOLUTIONS LLC supplies tags optimized for each of these applications.",
    },
    {
        question: "How can I get in touch with IV RFID SOLUTIONS LLC to buy RFID tags in Dubai?",
        answer: "You can contact IV RFID SOLUTIONS LLC through their official website or customer support line. They will assist you in selecting the best RFID tags in Dubai based on your business requirements.",
    },
    {
        question: "Are RFID tags from IV RFID SOLUTIONS LLC suitable for harsh environments?",
        answer: "Yes, IV RFID SOLUTIONS LLC offers rugged and durable RFID tags that perform reliably in tough industrial, outdoor, and high-temperature environments—making them among the best RFID tags in Dubai.",
    },
    {
        question: "Do RFID tags from IV RFID SOLUTIONS LLC support real-time tracking?",
        answer: "Absolutely. IV RFID SOLUTIONS LLC provides advanced RFID tags in UAE that enable real-time asset tracking, enhancing operational efficiency and reducing human error",
    },
    {
        question: "Can RFID tags from IV RFID SOLUTIONS LLC be integrated with existing systems?",
        answer: "Yes, their RFID tags are highly compatible and can be easily integrated with most existing inventory or asset management systems, ensuring a smooth upgrade process.",
    },
    {
        question: "Are there bulk purchase options available for RFID tags in UAE?",
        answer: "Yes, IV RFID SOLUTIONS LLC offers competitive pricing and bulk purchase options for businesses across the UAE. Whether you need hundreds or thousands of tags, they’ve got you covered.",
    },
    {
        question: "What type of RFID tags does IV RFID SOLUTIONS LLC supply in Dubai?",
        answer: "They supply a wide range of RFID tags in Dubai, including passive tags, active tags, high-frequency (HF), ultra-high-frequency (UHF), and low-frequency (LF) tags for various applications.",
    },
]



  return (
    <div className='min-h-screen bg-gray-50 m-3 p-6'>
        <h1 className=' font-bold text-center mb-8 p-2'>Frequently Asked Questions</h1>
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

export default RfidtagFaq;
