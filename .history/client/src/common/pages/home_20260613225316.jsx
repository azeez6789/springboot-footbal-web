import { useState } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X } from 'lucide-react';
import Logo from '../assets/parkbay.png'
import {useNavigate} from 'react-router-dom'

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
      answer: "We offer special rates for students and educational institutions. Contact our support team for more details."
    },
    {
      question: "Can we add users later?",
      answer: "Absolutely! You can add or remove users from your account at any time through the admin dashboard."
    },
    {
      question: "How are payments processed?",
      answer: "We use secure payment processing with multiple options including credit cards, digital wallets, and monthly billing."
    },
    {
      question: "How do I get support?",
      answer: "Our support team is available 24/7 through live chat, email, or phone. Premium users get priority support."
    },
    {
      question: "Do I need to upgrade?",
      answer: "You can start with our free plan and upgrade as your parking needs grow. We'll recommend the best plan for your usage."
    },
    {
      question: "can booking be done online? ",
      answer: "You can done the booking online wise that is you can book a parking spot from the comfort of your home or office."
    }
  ];


  

  return (
    <div className="bg-blue-400 min-h-screen">
   
    </div>
  );
}