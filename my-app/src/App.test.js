// App.test.js
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    AnimatePresence: ({ children }) => <>{children}</>,
    motion: {
      div: React.forwardRef((props, ref) => <div ref={ref} {...props} />)
    }
  };
});




// Create some fake user data to mock the API response
const fakeUsers = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874"
    },
    company: {
      name: "Romaguera-Crona"
    }
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771"
    },
    company: {
      name: "Deckow-Crist"
    }
  }
];

// Mock the global fetch API
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(fakeUsers),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders loading message initially', () => {
  render(<App />);
  expect(screen.getByText(/loading users/i)).toBeInTheDocument();
});

test('renders user list after fetching data', async () => {
  render(<App />);
  // Wait for the user list to render
  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.getByText(/Ervin Howell/i)).toBeInTheDocument();
  });
});

test('toggles user details when clicking on a user header', async () => {
  render(<App />);
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
  });

  // Click the header (user name) to show details
  fireEvent.click(screen.getByText(/Leanne Graham/i));

  // Check that details (e.g., address) are rendered
  await waitFor(() => {
    expect(screen.getByText(/Kulas Light/i)).toBeInTheDocument();
  });

  // Click again to collapse details
  fireEvent.click(screen.getByText(/Leanne Graham/i));

  await waitFor(() => {
    expect(screen.queryByText(/Kulas Light/i)).not.toBeInTheDocument();
  });
});

test('filters users based on search input', async () => {
  render(<App />);
  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.getByText(/Ervin Howell/i)).toBeInTheDocument();
  });

  // Find the search input and type a query
  const searchInput = screen.getByPlaceholderText(/search by name or email/i);
  fireEvent.change(searchInput, { target: { value: 'Leanne' } });

  // Only Leanne should be visible, Ervin should be filtered out
  await waitFor(() => {
    expect(screen.getByText(/Leanne Graham/i)).toBeInTheDocument();
    expect(screen.queryByText(/Ervin Howell/i)).not.toBeInTheDocument();
  });
});
