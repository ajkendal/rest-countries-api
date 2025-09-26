# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Getting Started](#getting-started)

- [My process](#my-process)

  - [Built with](#built-with)
  - [API Call Flow](#api-call-flow)
  - [What I learned](#what-i-learned)
  - [Testing](#testing)
  - [Failsafe Data](#failsafe-data)
  - [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Features

- Light/Dark mode toggle
- Responsive design for all devices
- Search and filter countries by name and region
- Border country navigation
- Failsafe local data fallback
- Design system page

### Screenshot

![Homepage Layout](./public/images/Screenshot%202025-09-26%20at%202.07.06 PM.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/ajkendal/rest-countries-api)
- Live Site URL: [Live Demo](https://rest-countries-api-ajkendal.vercel.app/)
- Design System URL: [Design System](https://rest-countries-api-ajkendal.vercel.app/design-system)

### Getting Started

1. Clone the repo:

```sh
git clone https://github.com/ajkendal/rest-countries-api.git
cd rest-countries-api
```

2. Install dependencies:

```sh
npm install
```

3. Run the dev server (with Turbopack):

```sh
npm run dev
```

4. Run tests:

```sh
npm test
```

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [REST Countries API](https://restcountries.com/) - Country data API
- [Figma](https://www.figma.com/) - Design and prototyping tool
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For unit and integration testing
- [Babel](https://babeljs.io/) - Used for transpiling code during testing with Jest

### API Call Flow

```mermaid
flowchart TD
  A[User visits homepage] --> B[Fetch countries from REST Countries API]
  B -- Success --> C[Display countries]
  B -- Failure --> D[Fetch countries from local data.json]
  D --> C
  C --> E[User searches/filter]
  E --> F[Filter countries client-side]
  C --> G[User clicks country card]
  G --> H[Fetch country details from API or local data]
  H --> I[Display country details]
  I --> J[User clicks border country]
  J --> H
```

### What I learned

Throughout this project, I learned and applied several key concepts:

- **Next.js App Directory:** Leveraged the new app directory for server/client separation, routing, and layout management.
- **Fallback Data Strategy:** Implemented a failsafe mechanism to use local `data.json` if the REST Countries API is unavailable, ensuring reliability.
- **Theme Switching:** Integrated `next-themes` and Tailwind CSS to provide seamless light/dark mode toggling with hydration guard to prevent SSR/client mismatches.
- **Responsive Design:** Used Tailwind CSS and Flexbox/Grid to create a mobile-first, fully responsive UI that adapts to all device sizes.
- **Dynamic Filtering & Sorting:** Built custom dropdowns and search/filter logic for countries and regions, including combining 'All Regions' and specific regions.
- **Border Country Lookup:** Translated border country codes to names and enabled navigation between countries.
- **Hydration Error Prevention:** Applied hydration guards and conditional rendering to eliminate hydration errors from theme toggling and dynamic content.
- **Reusable Components:** Developed modular components (Header, CountryCard, ErrorCard, LoadingIconDiv) for maintainable and scalable code.

Example: Hydration Guard for Theme Toggle

```js
const [mounted, setMounted] = useState(false)
useEffect(() => {
  setMounted(true)
}, [])
if (!mounted) return null // Prevents hydration errors
```

This project reinforced best practices in React/Next.js development, error handling, and modern CSS workflows.

### Testing

This project uses Jest and React Testing Library for unit and integration tests. Babel is required for testing Next.js app directory components. The test and dev scripts automatically switch the Babel config as needed.

To run tests:

```sh
npm test
```

### Failsafe Data

If the REST Countries API is unavailable, this project will automatically use a local `data.json` file located in `public/json/data.json` as a fallback to ensure the app remains functional.

### Useful resources

- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet) - A comprehensive reference for Tailwind CSS classes and utilities.

## Author

- Website - [Amanda J Kendal-Brown](https://ajkendal.github.io/)
- LinkedIn - [@akendalb](https://www.linkedin.com/in/akendalb)
- GitHub - [@ajkendal](https://github.com/ajkendal/)
- Frontend Mentor - [@ajkendal](https://www.frontendmentor.io/profile/ajkendal)
