import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kcuqjvf", "template_6xvw5we", form.current, "SskOfvSSSINYHUgCy")
      .then(
        () => {
          setMessageSent(true); // Set message sent state to true
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 via-teal-100 to-teal-200 flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-teal-600 text-center">Contact Us</h1>
        <p className="text-gray-600 mt-4 text-center">
          Have questions or opportunities? Feel free to drop me a message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
          <input
            className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            type="text"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            type="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Your Message"
            name="message"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Success Message Popup */}
      {messageSent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-teal-600">Message Sent!</h2>
            <p className="text-gray-600 mt-2">
              Your message has been sent successfully. Thank you!
            </p>
            <button
              onClick={() => setMessageSent(false)}
              className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
