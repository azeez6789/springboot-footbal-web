import { useState } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X } from 'lucide-react';
import Logo from '../assets/parkbay.png';
import { useNavigate } from 'react-router-dom';

export default function ParkingLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I modify my parking reservation?",
      answer: "Yes, you can modify your parking reservation up to 2 hours before your scheduled time through our app or website."
    },
    {
      question: "Is there an education discount?",
      answer: "We offer special rates for students and educational institutions."
    },
    {
      question: "Can we add users later?",
      answer: "Absolutely! You can add or remove users from your account at any time."
    },
    {
      question: "How are payments processed?",
      answer: "We use secure payment processing with multiple options."
    },
    {
      question: "How do I get support?",
      answer: "Our support team is available 24/7."
    },
    {
      question: "Do I need to upgrade?",
      answer: "You can start with our free plan and upgrade later."
    },
    {
      question: "Can booking be done online?",
      answer: "Yes, you can book a parking spot online from anywhere."
    }
  ];

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Header */}
      <header className="p-6 shadow-md bg-white">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="ParkBay Logo" className="h-12" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-blue-900">
          Smart Parking Solution
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Find and reserve parking spaces instantly.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 bg-white rounded-lg shadow"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <span>{faq.question}</span>
              {openFaq === index ? <ChevronDown /> : <ChevronRight />}
            </button>

            {openFaq === index && (
              <div className="p-4 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}