import React from 'react';

function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Welcome to My Company
        </h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start">
          <label htmlFor="firstName" className="text-sm text-gray-700 dark:text-gray-200 mb-2">First Name:</label>
          <input type="text" id="firstName" name="firstName" className="w-full px-3 dark:bg-gray-200 dark:border-gray-900 py-2 rounded-md" />
          
          <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mb-2">Last Name:</label>
          <input type="text" id="lastName" name="lastName" className="w-full px-3 dark:bg-gray-200 dark:border-gray-900 py-2 rounded-md" />
          
          <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mb-2">Username:</label>
          <input type="text" id="username" name="username" className="w-full px-3 dark:bg-gray-200 dark:border-gray-900 py-2 rounded-md" />
          
          <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full px-3 dark:bg-gray-200 dark:border-gray-900 py-2 rounded-md" />
          
          <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mb-2">Password:</label>
          <input type="password" id="password" name="password" className="w-full px-3 dark:bg-gray-200 dark:border-gray-900 py-2 rounded-md" />
          
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;