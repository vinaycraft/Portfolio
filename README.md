# Portfolio Website

A modern, responsive portfolio website built with React.js, inspired by professional developer portfolios.

## Features

- **Modern Design**: Clean, gradient-based design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Skills Section**: Showcase your technical skills with interactive badges
- **Projects Gallery**: Display your professional and mini projects
- **GitHub Integration**: Link to your GitHub profile
- **Smooth Navigation**: Smooth scrolling between sections

## Technologies Used

- React 18.2.0
- CSS3 with modern features (Grid, Flexbox, Animations)
- Responsive Design Principles

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:

```bash
npm run build
```

## Customization

### Personal Information

Edit `src/App.js` to update:
- Your name in the hero section
- Skills list
- Projects and their details
- GitHub profile link

### Styling

Modify `src/index.css` to customize:
- Color scheme (currently using purple gradient)
- Typography
- Layout and spacing
- Animation effects

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Deployment

This portfolio can be easily deployed to various platforms:

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Host the static build files

## License

This project is open source and available under the MIT License.
