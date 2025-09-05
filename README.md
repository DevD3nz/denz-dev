# Alden Calatrava - Web Developer Portfolio

A modern, responsive portfolio website built with Angular, showcasing web development expertise in WordPress and Angular applications.

## 🌟 Features

- **Modern Design**: Clean, minimal, professional Base44-inspired design
- **Responsive**: Fully responsive across all devices and screen sizes
- **Performance Optimized**: Fast loading with optimized assets and animations
- **SEO Ready**: Comprehensive SEO meta tags and structured data
- **Interactive**: Smooth scrolling, hover effects, and micro-animations
- **Contact Form**: Functional contact form with validation
- **Accessibility**: WCAG compliant with proper semantic markup

## 🛠 Tech Stack

- **Framework**: Angular 18+
- **Language**: TypeScript
- **Styling**: SCSS with CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Build**: Angular CLI
- **Responsive**: CSS Grid & Flexbox

## 📱 Sections

### 🏠 Hero Section
- Professional introduction
- Key statistics
- Call-to-action buttons
- Floating technology cards
- Profile image with animations

### 👨‍💻 About Section
- Personal background
- Core competencies
- Achievement highlights
- Quick info sidebar
- Specialty tags
- CV download

### 🎯 Skills Section
- Technical skills with progress bars
- Frontend, Backend, and Tools categories
- Technology showcase with icons
- Certifications and learning

### 💼 Experience Section
- Professional work history
- Timeline layout
- Education background
- Professional statistics

### 🚀 Portfolio Section
- Featured projects showcase
- Project filtering (All, WordPress, Angular, E-commerce)
- Project details and technologies
- Client testimonials
- Live project links

### 🔧 Services Section
- Service offerings
- Development process
- Service packages
- Pricing information
- Additional services

### 📧 Contact Section
- Contact form with validation
- Contact information
- Social media links
- FAQ section
- Location and availability

## 🎨 Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Secondary**: #10b981 (Green)
- **Accent**: #f59e0b (Amber)
- **Text**: #1a202c (Dark Gray)
- **Background**: #ffffff (White)

### Typography
- **Font Family**: Inter
- **Headings**: 700-800 weight
- **Body**: 400-500 weight
- **Scale**: Responsive clamp() sizing

### Spacing
- **Container**: 1200px max-width
- **Grid**: CSS Grid with responsive columns
- **Gaps**: 1rem base unit with multipliers

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open in browser**
   ```
   http://localhost:4200
   ```

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── about/           # About section
│   │   ├── skills/          # Skills & technologies
│   │   ├── experience/      # Work experience & education
│   │   ├── works/           # Portfolio showcase
│   │   ├── services/        # Services offered
│   │   ├── contact/         # Contact form & info
│   │   └── footer/          # Footer with links
│   ├── app.component.ts     # Main app component
│   └── app.routes.ts        # Routing configuration
├── styles.scss              # Global styles & variables
└── index.html               # Main HTML with SEO meta
```

## 🔧 Customization

### Personal Information
Update personal details in components:
- `hero.component.ts` - Name, title, description
- `about.component.ts` - Background, achievements
- `contact.component.ts` - Contact information
- `experience.component.ts` - Work history, education

### Projects & Portfolio
Add/modify projects in `works.component.ts`:
```typescript
projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    image: '/assets/projects/project-image.jpg',
    technologies: ['WordPress', 'Angular'],
    liveUrl: 'https://project-url.com',
    // ...other properties
  }
];
```

### Services & Pricing
Update services in `services.component.ts`:
```typescript
mainServices = [
  {
    title: 'Service Name',
    description: 'Service description',
    features: ['Feature 1', 'Feature 2'],
    startingPrice: 500
  }
];
```

### Styling
Modify colors and design in `src/styles.scss`:
```scss
:root {
  --primary: #2563eb;
  --secondary: #10b981;
  // ...other variables
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1200px
- **Large**: > 1200px

## ⚡ Performance Features

- Lazy loading for images
- Optimized animations
- Minimal JavaScript bundle
- CSS optimization
- Font display optimization
- Preconnect for external resources

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD)
- Optimized images with alt texts
- Clean URL structure
- Fast loading times

## 📧 Contact Information

- **Email**: calatravaalden@gmail.com
- **Phone**: +63 912 345 6789
- **Location**: Philippines
- **LinkedIn**: linkedin.com/in/alden-calatrava
- **GitHub**: github.com/alden-calatrava

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Built with Angular best practices
- Responsive design principles
- Performance optimization techniques