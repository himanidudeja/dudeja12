import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for API calls

const SessionBooking = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Get logged-in user from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData || {});

    // Fetch bookings from backend
    const fetchSessions = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/auth/bookings');
        // Filter bookings for the current user by email
        const userBookings = res.data.filter(
          (session) => session.email === userData?.email
        );

        // Add 'key' property for each session (useful for list rendering)
        const sessionsWithKeys = userBookings.map((session) => ({
          ...session,
          key: session._id,
        }));

        setDataSource(sessionsWithKeys);
      } catch (err) {
        console.error('Failed to load sessions', err);
      } finally {
        setLoading(false);
      }
    };

    if (userData?.email) {
      fetchSessions();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <section
        className="h-[85vh] w-full bg-cover bg-center flex overflow-y-auto"
        style={{
          backgroundImage: "url('/download (2).jpeg')",
        }}
      >
        <div className="flex flex-col bg-black/30 backdrop-blur-none h-fit rounded-lg w-full !p-10 !m-10 text-white">
          <h1 className="text-4xl font-bold border-b pb-2 border-gray-300 mb-4">
            My Bookings
          </h1>

          <p className="text-lg mb-6">
            Hello {user?.firstName || user?.firstname || 'User'}, here are your therapy session bookings.
          </p>

          {loading ? (
            <p>Loading your bookings...</p>
          ) : dataSource.length > 0 ? (
            <ul className="space-y-4">
              {dataSource.map((booking) => (
                <li
                  key={booking.key}
                  className="p-4 rounded-lg border border-gray-300 bg-white/10"
                >
                  <p><strong>Name:</strong> {booking.name}</p>
                  <p><strong>Email:</strong> {booking.email}</p>
                  <p><strong>Mobile:</strong> {booking.mobile}</p>
                  <p><strong>Problem:</strong> {booking.problem}</p>
                  <p><strong>Date:</strong> {new Date(booking.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic text-gray-300">No bookings found for you.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default SessionBooking;
