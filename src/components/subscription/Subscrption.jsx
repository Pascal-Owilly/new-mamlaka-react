import React, { useState } from "react";
import { BASE_URL } from '../config/Config';

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(`${BASE_URL}/blog/subscriptions/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // Parse the response to get the error message
        const errorData = await response.json();
        throw new Error(errorData.message || "Network response was not ok");
      }

      setSuccessMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field
    } catch (error) {
      // Display the actual error message from the response
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="subscription-form">
<h3 className="text-lg  mb-4 text-center">
  Subscribe to Our Newsletter for the Latest News and Events
</h3>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="p-2 mb-2 md:mb-0 md:mr-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-primary text-white p-2 rounded">
          Subscribe
        </button>
      </form>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default SubscriptionForm;
