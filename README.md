# FocalPoint

FocalPoint is a task management application built with Next.js. It allows users to create, manage, and track their daily tasks efficiently.

## Features

- Create new tasks
- Mark tasks as completed
- Delete tasks
- View active and completed tasks separately
- Responsive design for various screen sizes

## Technologies Used

- Next.js
- React
- TypeScript
- SCSS Modules
- Docker

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/YeffersonSilva/FocalPoint.git
   ```

2. Navigate to the project directory:
   ```
   cd FocalPoint
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Docker

To run the application using Docker:

1. Build the Docker image:
   ```
   docker build -t focalpoint .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 focalpoint
   ```

3. Access the application at [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).