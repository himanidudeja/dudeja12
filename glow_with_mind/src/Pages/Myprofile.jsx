import React, { useEffect, useState } from 'react';

const Myprofile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData || {});
  }, []);

  return (
    <div>
      <section
        className="h-[85vh] w-full bg-cover bg-center flex"
        style={{
          backgroundImage: "url('/download (2).jpeg')",
        }}
      >
        <div className="flex bg-black/30 backdrop-blur-none h-110 rounded-lg w-full !p-10 !m-10 gap-20 items-center">
          <div className="flex flex-col gap-6 text-white w-full max-w-2xl">
            <h1 className="text-4xl font-bold border-b pb-2 border-gray-300">
              My Profile
            </h1>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Full Name:</strong> {user?.firstname || 'N/A'}
              </p>
              <p>
                <strong>Email:</strong> {user?.email || 'N/A'}
              </p>
              <p>
                <strong>Role:</strong> {user?.role || 'User'}
              </p>
              {/* Add more profile fields here as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Myprofile;
