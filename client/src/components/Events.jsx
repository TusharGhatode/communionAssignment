import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Loader from "./Loader";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]); // Store filtered events
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      setEvents(storedEvents);
      setFilteredEvents(storedEvents); // Show all events initially
      setLoading(false);
    }, 2000);
  }, []);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);

    if (selectedCategory === "All") {
      setFilteredEvents(events); // Show all events
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  };

  return (
    <div className="h-full w-screen">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="relative z-10">
            <Navigation />
            <div className="w-full flex flex-wrap justify-center mt-8">
              {["All", "Religious", "Social", "Charity"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategorySelect(cat)}
                  className={`p-2 w-20 rounded-xl cursor-pointer text-black font-medium mr-2 mt-2 ${
                    category === cat ? "bg-[#41644A] text-white" : "bg-[#C1CFA1]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap py-20 justify-center gap-8 z-0 p-12">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex w-80 flex-col rounded-xl bg-white shadow-md"
                >
                  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-semibold text-black">{event.title}</h5>
                    <p className="text-sm text-gray-600">
                      {event.desc.length > 100 ? event.desc.substring(0, 100) + "..." : event.desc}
                    </p>
                    <p className="text-sm mt-2 text-gray-500">📍 {event.location} | ☘ {event.category}</p>
                    <p className="text-xs text-gray-500 mt-1">📅 {event.from} - {event.to}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg">No events found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
