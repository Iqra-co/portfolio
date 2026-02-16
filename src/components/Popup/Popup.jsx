import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

 const handleOrder = (e) => {
  e.preventDefault();

  // Simple regex for Gmail validation
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!name.trim() || !email.trim() || !address.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill all fields!',
    });
    return;
  }

  if (!gmailRegex.test(email.trim())) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid Gmail address (example@gmail.com)',
    });
    return;
  }

  // Success alert
  Swal.fire({
    icon: 'success',
    title: 'Order Placed!',
    text: 'Your order has been successfully placed.',
    showConfirmButton: false,
    timer: 2000,
  });

  // Clear inputs and close popup
  setName('');
  setEmail('');
  setAddress('');
  setOrderPopup(false);
};
  // Disable button if any field is empty
  const isButtonDisabled = !name.trim() || !email.trim() || !address.trim();

  return (
    <>
      {/* Main Order Form Popup */}
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-md shadow-lg p-6 w-[320px] animate-scaleUp">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Order Now</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>

            {/* Form */}
            <form onSubmit={handleOrder} className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`w-full py-2 rounded-full text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 ${
                  isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Order Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Popup;
