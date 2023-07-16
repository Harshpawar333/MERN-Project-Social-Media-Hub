# MERN Project: Social Media Hub

Welcome to the MERN Project: Social Media Hub! This repository contains the source code for a web application that provides a unified platform for logging in, signing up, and accessing multiple social media networks in one place. This document will guide you through the process of cloning the repository and deploying it on Netlify.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running instance or connection URL)

### Installation

1. Clone the repository to your local machine using the following command:
      git clone  https://github.com/Harshpawar333/Social-Media-Account-Manager.git

2. Navigate to the project directory:
      cd Social-Media-Account-Manager
   
3. Install the dependencies:
      npm install
  
### Running the Application Locally

The application will start running on `http://localhost:3000`.

**Note:** Start the MongoDB server on your system before running the application.

Navigate to the `Backend` folder in another Git Bash command line and follow these steps:

1. Install backend dependencies:
      npm install

2. Start the backend server:
      node index.js


### Deploying on Netlify

To deploy the application on Netlify, you can follow these steps:

1. Sign up for a Netlify account at [https://www.netlify.com](https://www.netlify.com).

2. Create a new site from the Netlify dashboard, linking it to your GitHub repository.

3. Configure the build settings as follows:
   - Build command: `npm run build`

4. Click on "Deploy site" to initiate the deployment process. Netlify will automatically build and deploy your application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

Special thanks to the MERN stack and the various social media platforms for their APIs and SDKs, which made this project possible.

      
      
