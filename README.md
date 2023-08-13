**This project is a Netflix clone built using React and Redux for state management, and Firebase for authentication. It replicates the core functionality of Netflix, allowing users to sign up, sign in, browse a collection of movies and TV shows, and play trailers for selected content. This README file provides an overview of the project's features, setup instructions, and how to get started.**

## Table of Contents

*Demo*

*Features*

*Prerequisites*

*Installation*

*Configuration*

*Usage*

*Contributing*

*License*

## Demo

[Netflix_clone](https://netflix-clone-d61b5.web.app/)

## Features

**User Authentication:**

**Sign Up**: Users can create accounts using their email and password.

**Sign In**: Existing users can log in with their credentials.

**Home Screen:**

Displays a top banner with featured content.

Shows a grid of movie and TV show posters.

**Trailer Playback:**

Clicking on a poster opens a modal with a trailer playback option.

## Prerequisites

Before you begin, ensure you have met the following requirements:

Node.js and npm are installed on your machine.

You have a Firebase account for authentication and Firestore database.

You have a TMDB API key to fetch movie and TV show data.

## Installation

1.Clone this repository to your local machine.

2.Navigate to the project directory:

cd netflix-clone

3.Install the required npm packages:

npm install

## Configuration

1.Create a .env file in the project root.

2.Add your Firebase configuration and TMDB API key to the .env file:

*REACT_APP_FIREBASE_API_KEY=your_firebase_api_key*

*REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain*

*REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id*

*REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket*

*REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id*

*REACT_APP_FIREBASE_APP_ID=your_firebase_app_id*

*REACT_APP_TMDB_API_KEY=your_tmdb_api_key*

## Usage

Start the development server:

npm start

Open your web browser and navigate to *http://localhost:3000*.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

## License

This project is licensed under the MIT License.
