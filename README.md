# Personal Site - React TypeScript Template

A basic React TypeScript template with React Router for creating a personal website.

## Features

- ⚛️ React 18 with TypeScript
- 🛣️ React Router for navigation
- 📱 Responsive design
- 🎨 Clean, minimal styling
- 🚀 Ready to deploy

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RuntimeRuntime/personalSite.git
cd personalSite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Home.tsx        # Home page component
│   ├── About.tsx       # About page component
│   └── Contact.tsx     # Contact page component
├── App.tsx             # Main app component with routing
├── App.css             # Main styles
└── index.tsx           # App entry point
```

## Customization

### Adding New Pages

1. Create a new component in `src/components/`
2. Add a route in `src/App.tsx`
3. Add a navigation link in `src/components/Header.tsx`

### Styling

- Main styles are in `src/App.css`
- Component-specific styles can be added inline or in separate CSS files
- Consider using CSS modules or styled-components for larger projects

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository and build with `npm run build`
- **Vercel**: Import your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@RuntimeRuntime](https://github.com/RuntimeRuntime)
