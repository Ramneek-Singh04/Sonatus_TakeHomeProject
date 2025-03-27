# User List App

A React application that displays a list of users fetched from a mock API, with features like filtering, sorting, detail toggling, dark mode, and smooth animations.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview

This project is built using React. It fetches a list of users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and displays each user’s name and email in a clean, card-like layout. Clicking on a user’s name toggles a drop-down box with more detailed information (address, phone, company). The app is responsive, supports search and sort functionality, and includes a dark mode toggle with smooth animations powered by Framer Motion.

## Features

- **Data Fetching:**  
  Retrieves user data from the mock API at `https://jsonplaceholder.typicode.com/users`.

- **User List Display:**  
  Shows a list of users with their name and email.

- **Detailed Information Toggle:**  
  Clicking a user’s name opens a drop-down box displaying additional details like address, phone, and company.

- **Search Functionality:**  
  A search bar filters users by name or email.

- **Sorting Options:**  
  Users can sort the list by name or email in ascending or descending order.

- **Dark Mode:**  
  A dark mode toggle changes the entire theme of the application (including the background of the page, container, and UI elements) to ensure a cohesive dark appearance.

- **Smooth Animations:**  
  Uses Framer Motion to animate the opening and closing of the detailed information drop-down.

- **Responsive Design:**  
  The layout is designed to work well on both mobile and desktop devices.

- **Unit & Integration Tests:**  
  Tests are written using Jest and React Testing Library to cover key functionalities.

- **Custom Branding:**  
  The project uses Sonatus-inspired colors (e.g., a signature red) and the Montserrat font to match branding.

## Technologies Used

- **React** – For building the user interface.
- **Framer Motion** – For adding smooth animations and transitions.
- **React Icons** – For icons (e.g., user icon).
- **Jest & React Testing Library** – For testing.
- **CSS** – For styling, including responsive and dark mode styles.
- **JSONPlaceholder API** – A mock API to fetch user data.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install Dependencies**
    npm install

3. **Start the Development Server:**
    npm start

Your app should now be running at http://localhost:3000.


## Usage
Search Users: Type in the search bar to filter the user list by name or email.

Sort Users: Use the dropdowns to sort by name or email in ascending or descending order.

View Details: Click on a user’s name (or header) to toggle a drop-down box with additional information.

Dark Mode: Click the dark mode toggle button in the header to switch between light and dark themes.

## Testing
Run tests with 
npm test

This command runs the Jest test runner in interactive mode. The tests cover:

Rendering a loading message.

Displaying the user list after fetching data.

Toggling user details.

Filtering users via the search input.



your-repo/
├── public/                
├── src/
│   ├── assets/            # Contains sonatus-logo.png and other images
│   ├── App.js             # Main React component
│   ├── App.css            # Main CSS styles (including dark mode & responsive styles)
│   ├── index.js           # Entry point that renders the App component
│   ├── App.test.js        # Tests for the App component
│   └── ...                
├── package.json           # Project configuration and dependencies
└── README.md              # This file
