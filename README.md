# Stones Spring Minerals - React Website

This is a React conversion of the original HTML/CSS/JavaScript website for Stones Spring Minerals. The conversion maintains 1:1 visual and functional parity with the original site.

## Features

- **Exact Visual Match**: All styles, layouts, animations, and responsive behavior preserved
- **React Router**: Client-side routing for seamless navigation
- **TypeScript**: Type-safe React components
- **Bootstrap Integration**: Maintains original Bootstrap functionality
- **EmailJS Integration**: Contact form with working email functionality
- **AOS Animations**: Scroll-based animations preserved
- **Responsive Design**: Mobile-first responsive design maintained

## Pages

- **Home** (`/`) - Main landing page with hero section
- **About** (`/about`) - Company information and overview
- **About Oman** (`/about-oman`) - Strategic objectives and "Why Choose Us"
- **Message** (`/message`) - Board of Directors message with Vision & Mission
- **Products** (`/products`) - Product specifications and applications
- **Production Technology** (`/production-technology`) - Manufacturing capabilities
- **Contact** (`/contact`) - Contact form with EmailJS integration

## Tech Stack

- **React 18** with TypeScript
- **React Router DOM** for routing
- **Bootstrap 5.3** for UI components
- **AOS (Animate On Scroll)** for animations
- **EmailJS** for contact form functionality
- **Original CSS** preserved and integrated

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Shared navigation component
├── pages/
│   ├── Home.tsx            # Homepage component
│   ├── About.tsx           # About page component
│   ├── AboutOman.tsx       # About Oman page component
│   ├── Message.tsx         # Message page component
│   ├── Products.tsx        # Products page component
│   ├── ProductionTechnology.tsx # Technology page component
│   └── Contact.tsx         # Contact page component
├── App.tsx                 # Main app component with routing
├── styles.css              # Original CSS styles (preserved)
└── index.tsx               # App entry point

public/
├── images/                 # Image assets
├── *.png                   # Logo and image files
├── *.pdf                   # Document assets
└── index.html              # HTML template
```

## Key Conversion Details

### Preserved Functionality
- ✅ **Bootstrap Navbar**: Dropdowns, mobile menu, active states
- ✅ **Scroll Animations**: Intersection Observer API for scroll-triggered animations
- ✅ **EmailJS Integration**: Contact form sends emails using original configuration
- ✅ **Responsive Design**: All breakpoints and mobile behavior preserved
- ✅ **Asset Loading**: All images, fonts, and external resources maintained
- ✅ **CSS Classes**: All original class names and styling preserved
- ✅ **Accessibility**: ARIA labels, alt text, and semantic HTML maintained

### React Conversions
- **HTML → JSX**: `class` → `className`, `for` → `htmlFor`, self-closing tags
- **DOM Manipulation → React Hooks**: `useEffect` for lifecycle events
- **State Management**: `useState` for form data and UI state
- **Event Handling**: React synthetic events instead of vanilla JS
- **Routing**: React Router for client-side navigation

### EmailJS Configuration
The contact form uses the original EmailJS configuration:
- **Service ID**: `service_9tlmo5i`
- **Template ID**: `template_3iiezxs`
- **Public Key**: `4IXgyhRnH5anGACYM`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Original image assets preserved
- **CSS**: Single stylesheet for optimal loading
- **Bundle Size**: Optimized React build

## Deployment

The built application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## Original Website Comparison

This React version maintains complete visual and functional parity with the original HTML website, including:
- Exact same visual appearance
- Identical animations and transitions
- Same responsive behavior
- Working contact form with email integration
- All navigation and user interactions preserved

## Development Notes

- All original CSS preserved in `src/styles.css`
- Bootstrap 5.3 CDN used for consistency with original
- TypeScript provides type safety without changing functionality
- Component structure allows for easy maintenance and updates
- Original JavaScript animations converted to React hooks and effects# stone-spring
# stone-spring
