import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Train, ZoomIn, ZoomOut, X, IndianRupee } from 'lucide-react';
import routeMapImage from 'figma:asset/c1a1df521a535a84419d6a8959b258b68c006a5a.png';

export function RouteMapSection() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [classType, setClassType] = useState('standard');
  const [fareResult, setFareResult] = useState<{ fare: number; time: number } | null>(null);

  // Station data with distance from starting point (in km)
  const stationList = [
    { id: 1, name: 'Sahibabad', distance: 0 },
    { id: 2, name: 'Ghaziabad', distance: 5 },
    { id: 3, name: 'Guldhar', distance: 11 },
    { id: 4, name: 'Duhai', distance: 16 },
    { id: 5, name: 'Duhai Depot', distance: 19 },
    { id: 6, name: 'Muradnagar', distance: 25 },
    { id: 7, name: 'Modinagar South', distance: 31 },
    { id: 8, name: 'Modinagar North', distance: 35 },
    { id: 9, name: 'Meerut South', distance: 48 },
    { id: 10, name: 'Meerut Central', distance: 55 },
    { id: 11, name: 'Begumpul', distance: 62 },
    { id: 12, name: 'Partapur', distance: 68 },
    { id: 13, name: 'Modipuram', distance: 73 },
    { id: 14, name: 'Shuchita', distance: 78 },
    { id: 15, name: 'Meerut North', distance: 82 },
  ];

  // Calculate fare and time
  const calculateFareAndTime = () => {
    if (!fromStation || !toStation || fromStation === toStation) {
      setFareResult(null);
      return;
    }

    const from = stationList.find(s => s.name === fromStation);
    const to = stationList.find(s => s.name === toStation);

    if (!from || !to) {
      setFareResult(null);
      return;
    }

    const distance = Math.abs(to.distance - from.distance);
    
    // Fare calculation: Base fare + distance-based fare
    // Standard: ₹10 base + ₹2 per km
    // Premium: ₹20 base + ₹3 per km
    let fare = 0;
    if (classType === 'standard') {
      fare = Math.round(10 + (distance * 2));
    } else {
      fare = Math.round(20 + (distance * 3));
    }

    // Time calculation: Assuming average speed of 80 km/h including stops
    // Add 2 minutes per station stop
    const stationsBetween = Math.abs(to.id - from.id);
    const travelTimeHours = distance / 80;
    const stopTime = (stationsBetween * 2) / 60; // Convert minutes to hours
    const totalTimeMinutes = Math.round((travelTimeHours + stopTime) * 60);

    setFareResult({ fare, time: totalTimeMinutes });
  };

  useEffect(() => {
    calculateFareAndTime();
  }, [fromStation, toStation, classType]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleMapClick = () => {
    setIsMapOpen(true);
    setZoomLevel(1);
  };

  const handleCloseMap = () => {
    setIsMapOpen(false);
    setZoomLevel(1);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background Map Image with Darker Blur */}
      <div className="absolute inset-0 opacity-50 blur-md">
        <img 
          src={routeMapImage} 
          alt="Route Map Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40 dark:bg-gray-950/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Visualization */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl h-full flex flex-col transition-colors duration-300">
            <h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
              style={{ 
                fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
                background: 'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Route Network
            </h2>
            
            {/* Map Image */}
            <div 
              className="bg-white dark:bg-gray-600 rounded-xl p-4 shadow-sm flex-1 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={handleMapClick}
            >
              <img 
                src={routeMapImage} 
                alt="Delhi-Ghaziabad-Meerut Namo Bharat Corridor Route Map" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Ticket Booking / Info Panel */}
          <div className="bg-white dark:bg-gray-700 rounded-2xl border-2 border-gray-200 dark:border-gray-600 p-8 shadow-xl h-full flex flex-col transition-colors duration-300">
            <h2 
              className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
              style={{ 
                fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
                background: 'linear-gradient(135deg, #1e40af 0%, #f97316 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Plan Your Journey
            </h2>
            
            <div className="space-y-6 flex-1 flex flex-col">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>From Station</label>
                <select 
                  value={fromStation}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition-colors font-medium" 
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }} 
                  onChange={(e) => setFromStation(e.target.value)}
                >
                  <option value="">Select Departure Station</option>
                  {stationList.map(station => (
                    <option key={station.id} value={station.name}>{station.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>To Station</label>
                <select 
                  value={toStation}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition-colors font-medium" 
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }} 
                  onChange={(e) => setToStation(e.target.value)}
                >
                  <option value="">Select Arrival Station</option>
                  {stationList.map(station => (
                    <option key={station.id} value={station.name}>{station.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Class Type</label>
                <select 
                  value={classType}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:border-orange-500 transition-colors font-medium" 
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }} 
                  onChange={(e) => setClassType(e.target.value)}
                >
                  <option value="standard">Standard Class</option>
                  <option value="premium">Premium Class</option>
                </select>
              </div>

              {/* Fare and Time Result - Prominent Display */}
              {fareResult ? (
                <div className="mt-auto bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-800 dark:to-gray-600 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700 transition-colors duration-300">
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                      {fromStation} → {toStation}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="px-2 py-1 bg-white dark:bg-gray-700 rounded" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                        {classType === 'standard' ? 'Standard Class' : 'Premium Class'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-300">
                      <div className="flex items-center justify-center mb-2">
                        <IndianRupee className="w-6 h-6 text-green-600 dark:text-green-400" />
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300" style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
                          {fareResult.fare}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Total Fare</div>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center transition-colors duration-300">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-1" />
                        <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300" style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}>
                          {fareResult.time}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>Minutes</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 text-center transition-colors duration-300">
                  <Train className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium" style={{ fontFamily: '"Inter", system-ui, sans-serif' }}>
                    Select stations and class to view fare and travel time
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Map */}
      {isMapOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-5xl max-h-5xl">
            <img 
              src={routeMapImage} 
              alt="Delhi-Ghaziabad-Meerut Namo Bharat Corridor Route Map" 
              className="w-full h-full object-contain rounded-lg"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
            />
            <div className="absolute top-4 right-4">
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handleCloseMap}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handleZoomIn}
              >
                <ZoomIn className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4">
              <button
                className="bg-white rounded-full p-2 shadow-md"
                onClick={handleZoomOut}
              >
                <ZoomOut className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}