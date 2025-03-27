# User List App

A React application that displays a list of users fetched from a mock API, with features like filtering, sorting, detail toggling, dark mode, and smooth animations.

---

## Overview

This project is built using React. It fetches a list of users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and displays each user’s name and email in a clean, card-like layout. Clicking on a user’s name toggles a drop-down box with more detailed information (address, phone, company). The app is responsive, supports search and sort functionality, and includes a dark mode toggle with smooth animations powered by Framer Motion.

---

## Features

- **Data Fetching:** Retrieves user data from the mock API at `https://jsonplaceholder.typicode.com/users`.
- **User List Display:** Shows a list of users with their name and email.
- **Detailed Information Toggle:** Clicking a user’s name opens a drop-down box displaying additional details like address, phone, and company.
- **Search Functionality:** A search bar filters users by name or email.
- **Sorting Options:** Users can sort the list by name or email in ascending or descending order.
- **Dark Mode:** A dark mode toggle changes the entire theme of the application (including the background of the page, container, and UI elements) to ensure a cohesive dark appearance.
- **Smooth Animations:** Uses Framer Motion to animate the opening and closing of the detailed information drop-down.
- **Responsive Design:** The layout is designed to work well on both mobile and desktop devices.
- **Unit & Integration Tests:** Tests are written using Jest and React Testing Library to cover key functionalities.
- **Custom Branding:** The project uses Sonatus-inspired colors (e.g., a signature red) and the Montserrat font to match branding.

---

## Technologies Used

- React
- Framer Motion
- React Icons
- Jest & React Testing Library
- CSS (responsive and dark mode styles)
- JSONPlaceholder API

---

## Installation and Setup

-- Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

--Install Dependencies
```bash
    npm install
```
-- Start the development server:
```bash
    npm start
```

The app will be live at: http://localhost:3000
