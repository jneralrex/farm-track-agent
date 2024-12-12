import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../Layout/DashboardLayout";
import Thumb from "../../assets/missing-data-vector-49849220-removebg-preview.png";
import farm from "../../assets/images/pexels-photo-1595104.jpeg";
import farmer from "../../assets/images/pexels-photo-614810.webp";
import { Link } from "react-router-dom";

const SoilTesterList = () => {
  const base_url = import.meta.env.VITE_API_URL;
  const [soilTesters, setSoilTesters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSoilTesters = async () => {
    try {
      setLoading(true);
      const storedUser = JSON.parse(localStorage.getItem('SOIL_TESTER') || '{}');
      const response = await axios.get(`${base_url}/agent/requests`, {
        headers: {
          "Authorization": `Bearer ${storedUser.token}`,
        },
      });
      setSoilTesters(response.data.data);
    } catch (err) {
      console.error('Error response:', err.response); 
      setError("Failed to load soil testers. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const encodeId = (id) => {
    return btoa(id); 
  };

  useEffect(() => {
    fetchSoilTesters();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800"; 
      case "assigned":
        return "bg-gray-200 text-gray-800"; 
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800"; 
      case "cancelled":
        return "bg-red-100 text-red-800"; 
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">{error}</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {soilTesters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soilTesters.map((tester) => (
              <div key={tester._id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img src={farmer} alt="Farmer" className="h-16 w-16 rounded-full border border-gray-300 mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-700">
                      {`${tester.farmer.profile.firstName} ${tester.farmer.profile.lastName}`}
                    </h2>
                    <p className="text-gray-500">{tester.land.location.address}</p>
                  </div>
                </div>
                <img src={farm} alt="Farm" className="w-full h-40 object-cover rounded-md mb-4" />
                <div className="text-gray-600 mb-4">
                  <p>Lat: {tester.land.location.coordinates.latitude}, Lon: {tester.land.location.coordinates.longitude}</p>
                  <p>State: {tester?.land?.location?.state || 'N/A'}, LGA: {tester?.land?.location?.lga || 'N/A'}, Ward: {tester?.land?.location?.ward || 'N/A'}</p>
                  <p>Land size: {tester.land.totalArea.value} {tester.land.totalArea.unit}</p>
                  <p className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(tester.status)}`}>
                    {tester.status}
                  </p>
                </div>
                <div className="text-gray-500 mb-4">
                  <p>Additional Note: {tester.additionalNotes}</p>
                </div>
                <div className="flex justify-between items-center">
                  <Link to={`/single/test-request/${encodeId(tester._id)}`}>
                    <button className="bg-blue-400 text-white rounded-md hover:bg-blue-600">
                      View More
                    </button>
                  </Link>
                  <p className="text-xs text-gray-500">
                    Request Date: {new Date(tester.requestDate).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="notfound relative h-screen flex flex-col items-center justify-center">
            <img
              src={Thumb}
              alt=""
              className="w-44 mb-4"
            />
            <span>No tester data</span>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SoilTesterList;
