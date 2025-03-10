import React, { useRef, useState } from "react";
import Navigation from "./Navigation";

const AddEvent = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  // Handle image upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle category selection
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      image,
      title,
      from,
      to,
      location,
      category,
      desc,
    };

    let existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.unshift(newEvent);
    localStorage.setItem("events", JSON.stringify(existingEvents));

    setImage(null);
    setTitle("");
    setFrom("");
    setTo("");
    setLocation("");
    setCategory("");
    setDesc("");

    alert("Event added successfully!");
  };

  return (
    <div>
      <div className="relative z-10">
        <Navigation />
      </div>
      <div className="h-full bg-[#d1dbe4] sm:p-8 p-4 w-screen flex flex-wrap justify-center items-center">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            {/* Image Upload Section */}
            <div className="relative -mt-6 h-40 overflow-hidden rounded-xl shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
              <img
                src={image || "https://spectrumfm.net/wp-content/uploads/2017/07/dummy.jpg"}
                className="object-cover w-full h-full"
                alt="Upload"
              />

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                required
                onChange={handleFileChange}
              />

              {/* Upload Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="absolute inset-0 cursor-pointer m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 text-3xl font-bold shadow-md hover:bg-blue-600 hover:text-white transition"
              >
                +
              </button>
            </div>

            {/* Title Input */}
            <div className="form-group">
              <h1 className="font-medium text-gray-600 text-sm">Title</h1>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-black bg-white border border-gray-800 w-full p-2"
                required
              />
            </div>

            {/* Date Inputs */}
            <div className="flex gap-2 w-full">
              <div className="block w-1/2">
                <h1 className="font-medium text-gray-600 text-sm">From</h1>
                <input
                  type="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="input bg-white cursor-pointer text-black border w-full border-gray-800 mt-2 py-2"
                  onFocus={(e) => e.target.showPicker && e.target.showPicker()} // Ensure calendar opens
                  required
                />
              </div>

              <div className="w-1/2">
                <h1 className="font-medium text-gray-600 text-sm">To</h1>
                <input
                  type="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="input bg-white cursor-pointer text-black border w-full border-gray-800 mt-2 py-2"
                  onFocus={(e) => e.target.showPicker && e.target.showPicker()} // Ensure calendar opens
                  required
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="form-group">
              <h1 className="font-medium text-gray-600 text-sm">Location</h1>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-black bg-white border border-gray-800 w-full p-2"
                required
              />
            </div>

            {/* Category Selection */}
            <div className="form-group">
              <h1 className="font-medium text-gray-600 text-sm">Categories</h1>
              <div>
                {["Religious", "Social", "Charity"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={`p-2 w-20 rounded-xl cursor-pointer  text-black font-medium   mr-2 mt-2 ${
                      category === cat ? "bg-[#41644A] text-white" : "bg-[#C1CFA1]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="form-group">
              <h1 className="font-medium text-gray-600 text-sm">Description</h1>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="text-black bg-white border border-gray-800 w-full p-2"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-wrap justify-between items-center mx-auto">
              <div className="button-borders">
                <button className="primary-button sm:w-80 w-60" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
