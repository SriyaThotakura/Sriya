# Hosting & Modification Instructions

## Running Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open http://localhost:3001 in your browser

## Building for Production

```bash
pnpm build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Adding New Pages

### Step 1: Create the Page Component

Create a new folder and file in `src/pages/`. For example, to add a "Blog" page:

```
src/pages/blog/index.jsx
```

```jsx
import Header from "../../components/header";
import Footer from "../../components/footer";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const BlogPage = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Blog</h1>
        {/* Your content here */}
      </Main>
      <Footer />
    </>
  );
};

export default BlogPage;
```

### Step 2: Add the Route

Open `src/App.jsx` and add your new route:

```jsx
import HomePage from "./pages/home";
import InProgress from "./pages/inProgress";
import PondPage from "./pages/pondPage";
import BlogPage from "./pages/blog";  // Add this import
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pond" element={<PondPage />} />
        <Route path="/inProgress" element={<InProgress />} />
        <Route path="/blog" element={<BlogPage />} />  {/* Add this route */}
      </Routes>
    </div>
  );
}

export default App;
```

### Step 3: Add Navigation Link (Optional)

To add a link in the header, edit `src/components/header/index.jsx` and add a navigation item.

## Using Existing Components

### Available Components

- **Header** - Navigation header with scroll-to-section support
- **Footer** - Site footer
- **PolygonPond** - Interactive Matter.js physics background
- **StoryBlock** - Content block component
- **Timeline** - Timeline display component
- **TextInput / TextArea** - Form input components
- **ArrowIcon** - Decorative arrow for section dividers

### Using PolygonPond

Wrap your content with `PolygonPond` to add the interactive physics background:

```jsx
import PolygonPond from "../../components/polygonPond";

const MyPage = () => {
  return (
    <PolygonPond>
      <h1>Content with physics background</h1>
    </PolygonPond>
  );
};
```

### Styling Constants

Import shared styles from `src/constants.jsx`:

```jsx
import { colors, mobileBreakPoint } from "../../constants";

// Available colors:
// colors.fontBlack - "#31373F"
// colors.lightGrey - "#AFAFAF"
// colors.accent - "#AB9DFF"
// colors.background - "#FAF8F6"
// colors.lightBlue - "#E1E9FA"
// colors.offWhite - "#EEF4F1"
// colors.midBlue - "#D8D8F4"

// Mobile breakpoint: 824px
```

## Project Structure

```
src/
├── App.jsx              # Route definitions
├── main.jsx             # React entry point
├── constants.jsx        # Shared colors and breakpoints
├── index.css            # Global styles
├── components/          # Reusable components
│   ├── header/
│   ├── footer/
│   ├── polygonPond/     # Matter.js physics component
│   └── ...
└── pages/               # Page components
    ├── home/
    │   └── homePageSections/  # Home page sections
    ├── pondPage/
    └── inProgress/
```
