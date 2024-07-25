# BookNook Frontend

## Project Overview

This project is the frontend of the BookNook application, a platform for book enthusiasts to search for books, view detailed information, and manage reviews and favorites. The frontend is built with React.js, following best practices for component structure, state management, and CSS styling. The application integrates with the Google Books API and a custom backend API to provide comprehensive book details and user-specific functionalities.

## Features

- **Search for Books:** Users can search for books by title and view a list of matches from the Google Books API.
- **Book Details:** Detailed information about a selected book, including title, authors, description, and thumbnail.
- **User Reviews and Ratings:** Display a list of user reviews and the average rating for each book.
- **Favorites Management:** Users can add books to their favorites and view their favorites list.
- **User Authentication:** Secure JWT-based authentication for managing reviews and favorites.


### Book Search and Details

- **Book Search:** Search for books by title and display a list of matches using the Google Books API.
- **Book Detail Page:** 
  - Display detailed information about a selected book.
  - Show a list of user reviews and the average rating.
  - Show the favorite status of the book for the current user.

### Reviews and Favorites

- **Favorite a Book:** Allow logged-in users to favorite a book.
- **Leave a Review:** Allow logged-in users to leave a review for a book.
- **View Favorites:** Display a list of user's favorite books.
- **Edit Review:** Allow users to edit their reviews.
- **Delete Review:** Allow users to delete their reviews.
- **Unfavorite a Book:** Allow users to unfavorite a book.

## Technologies Used

- **Frontend:**
  - React.js
  - JavaScript
  - HTML
  - CSS
- **API Integration:**
  - Google Books API
  - Axios for making HTTP requests
