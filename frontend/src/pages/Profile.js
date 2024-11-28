import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../utils";
import Sidebar from "./Sidebar";
import { Edit } from 'react-feather';

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    localStorage.getItem("selectedImage") ||
      "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [languageFlag, setLanguageFlag] = useState("");
  const navigate = useNavigate();

  const languageFlags = {
    en: 'https://img.freepik.com/free-psd/american-flag_23-2150587468.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
    hi: 'https://img.freepik.com/free-photo/india-republic-day-celebration-digital-art-with-flag_23-2151070781.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
    fr: 'https://img.freepik.com/free-photo/french-flag-white_144627-24628.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
    sp: 'https://img.freepik.com/free-photo/spanish-flag-white_144627-24632.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
    ge: 'https://img.freepik.com/free-photo/wavy-flag-germany-texture-background-generative-ai_169016-29913.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
    ja: 'https://img.freepik.com/free-photo/japan-national-flag-isolated-3d-white-background_1379-394.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid',
  };


  useEffect(() => {
    const username = localStorage.getItem("loggedInUser");
    if (!username) {
      navigate("/login");
    } else {
      setLoggedInUser(username);
    }

    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguageFlag(languageFlags[storedLanguage]);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleImageChange = (img) => {
    setSelectedImage(img);
    localStorage.setItem("selectedImage", img); // Save the selected image in localStorage
    setIsModalOpen(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="ml-[15rem] fixed bg-gray-800 text-white p-4 flex justify-between items-center shadow-md w-5/6 z-10 top-0 left-0">
          <h1 className="text-xl font-bold ml-[2rem]">Profile</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Welcome, {loggedInUser}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Profile Content */}
        <main className="p-8 mt-16 overflow-y-auto">
          <div className="bg-blue-100 rounded-lg p-4 ml-96 mr-96 relative">
            <img
              src={selectedImage}
              alt="Profile placeholder"
              className="w-80 h-80 rounded-lg"
            />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-1 right-2 bg-white p-1 rounded-full shadow"
          >
            <Edit className="w-5 h-4 text-red-500" /> {/* Feather Edit icon */}
          </button>
          </div>

          {/* Image Selection Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg ml-[14rem]">
                <h3 className="text-lg font-bold mb-4">Select a new profile image</h3>
                <div className="flex space-x-4">
                  <img
                    src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
                    alt="Option 1"
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleImageChange("https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid")}
                  />
                  <img
                    src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869145.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
                    alt="Option 2"
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleImageChange("https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869145.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid")}
                  />
                  <img
                    src="https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869159.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
                    alt="Option 3"
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleImageChange("https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869159.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid")}
                  />
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303045.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
                    alt="Option 4"
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleImageChange("https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303045.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid")}
                  />
                      <img
                    src="https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid"
                    alt="Option 4"
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleImageChange("https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303048.jpg?uid=R119405142&ga=GA1.1.1995806244.1728212278&semt=ais_hybrid")}
                  />
               
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 px-4  py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="mt-4">
            <h1 className="text-2xl font-bold">{loggedInUser}</h1>
            <p className="text-gray-500">{loggedInUser}132560</p>
            <p className="text-gray-500">Joined November 2024</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500">
                0 Following
              </a>
              <a href="#" className="text-blue-500">
                0 Followers
              </a>
            </div>
          </div>
          <div className="mt-8 flex items-center">
            <h2 className="text-xl font-semibold mr-4">Selected Language:</h2>
            <img
              src={languageFlag}
              alt="Language flag"
              className="w-12 h-8"
            />
          </div>
          <hr className="my-4" />

          {/* Statistics and Friends */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div >
              <h2 className="text-xl font-bold">Statistics</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <i className="fas fa-fire text-gray-400 text-2xl"></i>
                  <p className="text-gray-500 mt-2">0</p>
                  <p className="text-gray-500">Day streak</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <i className="fas fa-bolt text-gray-400 text-2xl"></i>
                  <p className="text-gray-500 mt-2">0</p>
                  <p className="text-gray-500">Total XP</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <i className="fas fa-trophy text-gray-400 text-2xl"></i>
                  <p className="text-gray-500 mt-2">None</p>
                  <p className="text-gray-500">Current league</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                  <i className="fas fa-medal text-gray-400 text-2xl"></i>
                  <p className="text-gray-500 mt-2">0</p>
                  <p className="text-gray-500">Top 3 finishes</p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="flex justify-between items-center border-b pb-2 mb-2">
                  <h2 className="text-xl font-bold">FOLLOWING</h2>
                  <h2 className="text-xl font-bold text-gray-400">FOLLOWERS</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/a925a18c6be921a81bf0e13102983168.svg"
                    alt="Group of people illustration"
                    className="w-28 h-28"
                  />
                  <p className="text-gray-500">
                    Learning is more fun and effective when you connect with
                    others.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow mt-4 border border-gray-200">
                <h2 className="text-xl font-bold">Add friends</h2>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-search text-gray-500"></i>
                    <a href="#" className="text-gray-500">
                      Find friends
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-envelope text-green-500"></i>
                    <a href="#" className="text-gray-500">
                      Invite friends
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;

