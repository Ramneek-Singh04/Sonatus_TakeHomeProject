import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa'; // We'll use this icon for users
import { AnimatePresence, motion } from 'framer-motion'; // For smooth animations
import sonatusLogo from './assets/sonatus-logo.png'; // Our cool Sonatus logo
import './App.css';

function App() {
  // States for our data and UI
  const [users, setUsers] = useState([]); // Holds our user list
  const [loading, setLoading] = useState(true); // Are we still loading data?
  const [error, setError] = useState(null); // Error message, if something goes wrong
  const [expandedUserId, setExpandedUserId] = useState(null); // Which user's details are open?
  const [searchTerm, setSearchTerm] = useState(''); // Search bar text
  const [sortField, setSortField] = useState('name'); // Sort by name or email
  const [sortOrder, setSortOrder] = useState('asc'); // Ascending or descending
  const [darkMode, setDarkMode] = useState(false); // Dark mode toggle

  // Fetch user data from the mock API on first render
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setError('Error fetching users. Please try again later.');
        setLoading(false);
      });
  }, []);

  // When dark mode changes, add or remove a "dark" class on the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  // Simple handlers for our inputs
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortFieldChange = (e) => setSortField(e.target.value);
  const handleSortOrderChange = (e) => setSortOrder(e.target.value);

  // Filter users based on search text
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort our filtered list based on chosen field and order
  const sortedUsers = filteredUsers.sort((a, b) => {
    const fieldA = a[sortField].toLowerCase();
    const fieldB = b[sortField].toLowerCase();
    if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Toggle the details for a user when their header is clicked
  const toggleDetails = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  // Toggle dark mode on/off
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className="app-container">
      <header className="header">
        <img src={sonatusLogo} alt="Sonatus Logo" className="logo" />
        <h1>User List</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="sort-controls">
          <label>
            Sort by:
            <select value={sortField} onChange={handleSortFieldChange}>
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
          </label>
          <label>
            Order:
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>
      </div>

      {loading && <p>Loading users...</p>}
      {error && <p className="error">{error}</p>}

      <ul className="user-list">
        {sortedUsers.map(user => (
          <li key={user.id} className="user-item">
            <div className="user-header" onClick={() => toggleDetails(user.id)}>
              <FaUser className="user-icon" />
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
            <AnimatePresence>
              {expandedUserId === user.id && (
                <motion.div
                  className="user-details-dropdown"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>
                    <span className="info-label">Email:</span> {user.email}
                  </p>
                  <p>
                    <span className="info-label">Phone:</span> {user.phone}
                  </p>
                  <p>
                    <span className="info-label">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                  </p>
                  <p>
                    <span className="info-label">Company:</span> {user.company.name}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
