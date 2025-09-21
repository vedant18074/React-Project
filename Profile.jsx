import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Send formData to your backend here
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2>Update Profile</h2>
        <p>Keep your information up to date</p>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write something about yourself"
          ></textarea>

          <button type="submit">Save Changes</button>
        </form>

        {/* Back to Home button */}
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Profile;
