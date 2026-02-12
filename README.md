# Lancing Hub - Modern Animated ERP SaaS Website

A high-performance, animated, conversion-optimized ERP SaaS website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Animations
- ✨ Hero typing effect with gradient background
- 🎯 Scroll-triggered fade-in animations
- 🎨 Hover effects on cards and buttons
- 📊 Animated counters
- 🌊 Parallax backgrounds
- 🎬 Page transitions
- 💫 Ripple button effects
- 🌈 Gradient shifting animations
- 📱 Mobile menu slide-in

### Functionality
- 🔝 Sticky navbar with blur effect on scroll
- 📱 Responsive mobile navigation
- 💰 Pricing toggle (monthly/yearly)
- 🔄 Testimonial carousel with auto-play
- ⚡ Smooth scrolling between sections
- 📝 Form validation ready

### Design
- 🎨 Light theme with modern color palette
- 📐 Clean typography hierarchy
- 📏 Consistent spacing system
- 💎 Professional shadows and blur effects
- 🎯 Conversion-optimized layout

## Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod (ready to integrate)

## Project Structure

```
lancing-hub/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── CTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   └── animations/
│   │       └── ScrollReveal.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   └── useTypingEffect.ts
│   ├── utils/
│   │   └── animations.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Getting Started

### Development

```bash
npm run dev
```

Visit http://localhost:5173 (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Sections

1. **Hero** - Eye-catching intro with typing effect and animated gradient background
2. **Features** - 6 key features with hover animations and icons
3. **Product Showcase** - Interactive tabbed interface showing product capabilities
4. **Stats** - Animated counters displaying key metrics
5. **Pricing** - 3 pricing tiers with monthly/yearly toggle
6. **Testimonials** - Auto-playing carousel with customer reviews
7. **CTA** - Final call-to-action with animated background
8. **Footer** - Comprehensive footer with newsletter signup

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ },
  accent: { /* your colors */ },
}
```

### Content

- Update section content in respective component files
- Modify pricing tiers in `Pricing.tsx`
- Change testimonials in `Testimonials.tsx`
- Update features in `Features.tsx`

### Animations

All animation variants are centralized in `src/utils/animations.ts` for easy customization.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using transform/opacity
- Lazy loading ready
- Code splitting for sections
- Responsive images support
- Reduced motion support for accessibility

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Alt text for images
- Focus visible states

## License

MIT

## Support

For support, email support@lancinghub.com or join our community.

---

Built with ❤️ for modern web experiences
