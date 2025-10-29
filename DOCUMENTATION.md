# UILD - SaaS Landing Page Template

> A modern, responsive, and fully-featured SaaS landing page template built with Next.js 16, React 19, and TailwindCSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
- [Components](#components)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [SEO Optimization](#seo-optimization)
- [Performance](#performance)
- [Deployment](#deployment)
- [Support](#support)

---

## 🎯 Overview

**UILD** is a premium, production-ready landing page template designed specifically for SaaS businesses. It features a modern design with smooth animations, fully responsive layout, and optimized performance out of the box.

Perfect for:
- SaaS products
- Financial platforms
- Analytics tools
- B2B services
- Startup MVPs

---

## ✨ Features

### 🎨 Design & UI
- **Modern & Clean Design** - Professional look with orange accent color scheme
- **Fully Responsive** - Works flawlessly on mobile, tablet, and desktop
- **Dark Mode Ready** - Built with shadcn/ui components supporting dark mode
- **Custom Animations** - Smooth scroll animations powered by Framer Motion
- **Glassmorphism Effects** - Modern backdrop blur effects on navigation

### 📱 Mobile Experience
- **Animated Mobile Menu** - Smooth slide-in navigation with hamburger toggle
- **Touch Optimized** - All interactions work perfectly on touch devices
- **Mobile-First Approach** - Designed and tested for mobile screens first

### 🧩 Pre-built Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **Stats Section** - Display key metrics and achievements
3. **About/Mission** - Company story and values
4. **Features Grid** - 6 feature cards with icons
5. **Services** - 3 main service offerings
6. **Testimonials** - Customer reviews with avatars
7. **Pricing Tables** - 3-tier pricing (Starter, Professional, Enterprise)
8. **FAQ Section** - Accordion-style frequently asked questions
9. **CTA Section** - Call-to-action with gradient background
10. **Footer** - Complete footer with links and social media

### ⚡ Performance
- **Next.js 16** - Latest framework with App Router
- **Image Optimization** - Using Next.js Image component
- **Code Splitting** - Automatic route-based code splitting
- **SEO Friendly** - Semantic HTML and meta tags ready

---

## 🛠 Tech Stack

### Core Framework
- **Next.js 16.0** - React framework with App Router
- **React 19.2** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling
- **TailwindCSS 4.0** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **tw-animate-css** - Extended Tailwind animations

### UI Components
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible components
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-separator`
  - `@radix-ui/react-slot`
- **Lucide React** - Beautiful icon library

### Animations
- **Framer Motion 12.23** - Production-ready animation library

### Utilities
- **class-variance-authority** - Component variant styling
- **clsx** - Conditional class names
- **tailwind-merge** - Merge Tailwind classes intelligently

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Extract the template files**
   ```bash
   cd uild
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

---

## 📁 Project Structure

```
uild/
├── app/
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/
│   └── hero.jpg             # Hero section image (add your own)
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🎨 Customization Guide

### 1. Brand Colors

The template uses an orange theme by default. To change it:

**Option A: Replace orange with another Tailwind color**

Find and replace all instances in `app/page.tsx`:
- `bg-orange-500` → `bg-blue-500`
- `text-orange-500` → `text-blue-500`
- `hover:bg-orange-600` → `hover:bg-blue-600`
- etc.

**Option B: Define custom colors in Tailwind config**

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        // ... add your color scale
        900: '#7c2d12',
      },
    },
  },
}
```

Then use `bg-primary-500`, `text-primary-600`, etc.

### 2. Typography

**Change font family**

The template uses the default Geist font. To change:

1. Edit `app/layout.tsx`
2. Import your Google Font or local font
3. Apply to the body element

Example with Google Fonts:

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

**Font weights**

All buttons use `font-bold`. To change:
- `font-bold` → `font-semibold` or `font-medium`

### 3. Logo & Branding

**Logo Icon**

Replace the "A" icon in the navigation (line ~60):

```tsx
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
  <span className="text-lg font-bold text-white">A</span>
</div>
```

Replace with your logo:

```tsx
<Image src="/logo.svg" alt="Logo" width={32} height={32} />
```

**Company Name**

Replace "UILD" and "Advisora" throughout the file:
- Navigation: `<span>UILD</span>` → `<span>YourBrand</span>`
- Footer: Line ~740
- All mentions in testimonials and content

### 4. Hero Section

**Heading & Subheading**

Edit lines ~95-110:

```tsx
<h1>Your Custom Heading</h1>
<p>Your custom description...</p>
```

**Hero Image**

Add your image to `/public/hero.jpg` or update the path:

```tsx
<Image
  src="/your-image.jpg"
  alt="Your description"
  fill
  className="object-cover"
/>
```

### 5. Statistics

Edit lines ~155-170 to update stats:

```tsx
<p className="text-3xl font-bold">Your Stat</p>
<p className="text-sm text-muted-foreground">Your description</p>
```

### 6. Features

The features section has 6 cards (lines ~230-320). To customize:

**Change icons:**
```tsx
<BarChart3 className="h-6 w-6 text-orange-600" />
```

Replace with any [Lucide icon](https://lucide.dev/icons/).

**Update content:**
```tsx
<CardTitle>Your Feature Title</CardTitle>
<CardDescription>Your feature description...</CardDescription>
```

**Add/Remove features:**

Copy a complete `<motion.div><Card>...</Card></motion.div>` block and paste it. Adjust the grid if needed:

```tsx
// For 4 features
className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"

// For 8 features  
className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
```

### 7. Pricing

Three pricing tiers are included (lines ~485-610).

**Update prices:**
```tsx
<span className="text-4xl font-bold">$29</span>
```

**Add/Remove features:**

Each tier has a list of features with checkmarks:

```tsx
<div className="flex items-center gap-2">
  <CheckCircle2 className="h-5 w-5 text-green-600" />
  <span className="text-sm">Your feature</span>
</div>
```

**Add a 4th tier:**

Copy an entire pricing card block and paste it. Update the grid:

```tsx
className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
```

### 8. Testimonials

Edit testimonials (lines ~405-465):

**Update user info:**
```tsx
<AvatarImage src="https://i.pravatar.cc/150?img=1" />
<CardTitle className="text-base">John Doe</CardTitle>
<CardDescription>CEO at Company</CardDescription>
```

**Update review:**
```tsx
<p className="text-sm text-muted-foreground">
  &quot;Your testimonial text...&quot;
</p>
```

### 9. FAQ

Edit FAQ items (lines ~625-680):

```tsx
<Card>
  <CardHeader>
    <CardTitle className="text-lg">Your Question?</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Your answer...</p>
  </CardContent>
</Card>
```

### 10. Footer

**Contact Information** (lines ~775-790):

```tsx
<Mail className="h-4 w-4" />
<span>hello@yourdomain.com</span>
```

**Social Media Links**

Update or remove social icons (lines ~750-765).

**Footer Links**

Update navigation links in the 3 footer columns (lines ~765-800).

---

## 🧩 Components

### shadcn/ui Components Used

All components are in `/components/ui/`:

#### Button
```tsx
import { Button } from "@/components/ui/button";

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large</Button>
<Button size="sm">Small</Button>
```

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

#### Badge
```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
```

#### Avatar
```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="/path/to/image.jpg" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Adding New Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add input
```

See [shadcn/ui documentation](https://ui.shadcn.com/) for all available components.

---

## 🎬 Animations

### Framer Motion Variants

The template includes reusable animation variants:

**fadeInUp** - Fade in with upward motion
```tsx
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>
```

**staggerContainer** - Stagger children animations
```tsx
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  <motion.div variants={fadeInUp}>Child 1</motion.div>
  <motion.div variants={fadeInUp}>Child 2</motion.div>
</motion.div>
```

### Scroll Animations

Use `whileInView` for scroll-triggered animations:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
>
  Content appears on scroll
</motion.div>
```

### Hover Effects

```tsx
<Card className="transition-all hover:shadow-lg hover:-translate-y-1">
  Hover to lift card
</Card>
```

### Mobile Menu Animation

The mobile menu uses `AnimatePresence` for smooth enter/exit:

```tsx
<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      Menu content
    </motion.div>
  )}
</AnimatePresence>
```

---

## 📱 Responsive Design

### Breakpoints

TailwindCSS default breakpoints:
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

### Responsive Patterns Used

**Navigation**
- Desktop: Horizontal menu
- Mobile: Hamburger menu with slide-in panel

**Grid Layouts**
```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
```

**Typography**
```tsx
// Responsive heading sizes
className="text-4xl sm:text-5xl lg:text-6xl"
```

**Spacing**
```tsx
// Container padding adjusts by screen size
className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16"
```

**Visibility**
```tsx
// Hide on mobile, show on desktop
className="hidden md:flex"

// Show on mobile, hide on desktop
className="md:hidden"
```

### Testing Responsiveness

Use browser DevTools:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on various device sizes:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1280px+)

---

## 🔍 SEO Optimization

### Meta Tags

Add to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'UILD - SaaS Landing Page Template',
  description: 'Modern SaaS landing page built with Next.js and TailwindCSS',
  keywords: 'saas, landing page, nextjs, react, template',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'UILD - SaaS Landing Page',
    description: 'Modern SaaS landing page template',
    url: 'https://yourdomain.com',
    siteName: 'UILD',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UILD - SaaS Landing Page',
    description: 'Modern SaaS landing page template',
    images: ['https://yourdomain.com/twitter-image.jpg'],
  },
};
```

### Semantic HTML

The template uses semantic HTML5 elements:
- `<nav>` for navigation
- `<section>` for content sections
- `<footer>` for footer
- Proper heading hierarchy (h1, h2, h3)

### Accessibility

- **Alt text** on all images
- **Keyboard navigation** supported
- **Focus states** on interactive elements
- **ARIA labels** (add where needed)

Add ARIA labels to links without text:

```tsx
<Button aria-label="Open mobile menu">
  <Menu />
</Button>
```

---

## ⚡ Performance

### Optimization Techniques Used

1. **Next.js Image Component**
   - Automatic lazy loading
   - Responsive images
   - WebP format support

2. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for heavy components

3. **Font Optimization**
   - Next.js font optimization
   - FOUT prevention

4. **CSS Optimization**
   - PurgeCSS removes unused styles
   - Minification in production

### Performance Tips

**Optimize images:**
```bash
# Use WebP or AVIF format
# Compress images before adding to /public
# Recommended tools: TinyPNG, Squoosh, ImageOptim
```

**Lazy load sections:**
```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

**Analyze bundle size:**
```bash
npm run build
# Check .next/analyze/ for bundle composition
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Environment Variables**

If needed, add in Vercel dashboard:
- Settings → Environment Variables

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Install Netlify Next.js plugin

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t uild .
docker run -p 3000:3000 uild
```

### Self-Hosted (VPS)

```bash
# Install dependencies
npm install

# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "uild" -- start

# Or use a process manager
```

---

## 🎯 Best Practices

### 1. Content Management

For easier content updates, consider extracting content to separate files:

```tsx
// lib/content.ts
export const features = [
  {
    icon: 'BarChart3',
    title: 'Feature 1',
    description: 'Description...',
  },
  // ...
];

// In page.tsx
import { features } from '@/lib/content';
```

### 2. Environment Variables

For API keys, URLs, etc:

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXXXX
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 3. Analytics Integration

Add Google Analytics to `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  );
}
```

### 4. Form Handling

Add a contact form with React Hook Form:

```bash
npm install react-hook-form
```

### 5. CMS Integration

Consider integrating:
- **Contentful** - Headless CMS
- **Sanity** - Structured content
- **Strapi** - Self-hosted CMS
- **Prismic** - Content management

---

## 🔧 Troubleshooting

### Common Issues

**Issue: Images not showing**
- Ensure image exists in `/public` folder
- Check file path and extension
- Verify Next.js Image domain configuration

**Issue: Animations not working**
- Check Framer Motion is installed
- Verify `"use client"` directive at top of file
- Check browser console for errors

**Issue: Mobile menu not opening**
- Verify state is properly initialized
- Check onClick handler is attached
- Ensure AnimatePresence wraps conditional render

**Issue: Build errors**
- Run `npm run lint` to check for errors
- Clear `.next` folder and rebuild
- Check for missing dependencies

**Issue: Styling not applied**
- Verify Tailwind is configured correctly
- Check `globals.css` imports Tailwind directives
- Clear browser cache

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [shadcn/ui Docs](https://ui.shadcn.com)

### Icons
- [Lucide Icons](https://lucide.dev/icons/)
- [Heroicons](https://heroicons.com/)

### Fonts
- [Google Fonts](https://fonts.google.com/)
- [Font Share](https://www.fontshare.com/)

### Images
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://pexels.com/) - Free stock photos

### Colors
- [Coolors](https://coolors.co/) - Color palette generator
- [Tailwind Color Generator](https://uicolors.app/create)

---

## 📄 License

This is a premium template. License terms:

✅ **Allowed:**
- Use in unlimited personal projects
- Use in unlimited commercial/client projects
- Modify and customize as needed
- Create end products for clients

❌ **Not Allowed:**
- Resell or redistribute the template
- Use in competing template marketplaces
- Share source code publicly
- Create derivative templates for sale

---

## 💬 Support

### Getting Help

1. **Documentation** - Check this file first
2. **GitHub Issues** - Report bugs or request features
3. **Email Support** - hello@uild.com
4. **Community Discord** - Join our community

### Updates

Updates are delivered via:
- Email notifications
- GitHub releases
- Change log updates

### Changelog

**Version 1.0.0** (2025-10-29)
- Initial release
- Mobile menu implementation
- Complete landing page sections
- Responsive design
- Framer Motion animations
- TypeScript support

---

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/) by Vercel
- [TailwindCSS](https://tailwindcss.com/) by Tailwind Labs
- [shadcn/ui](https://ui.shadcn.com/) by shadcn
- [Framer Motion](https://www.framer.com/motion/) by Framer
- [Lucide Icons](https://lucide.dev/) by Lucide

---

## 🚀 Quick Start Checklist

Before launching your site:

- [ ] Replace all "UILD" and "Advisora" with your brand name
- [ ] Update logo and favicon
- [ ] Add your hero image to `/public`
- [ ] Customize color scheme
- [ ] Update all content (features, pricing, testimonials)
- [ ] Add your contact information
- [ ] Configure meta tags for SEO
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Test all links and buttons
- [ ] Optimize images
- [ ] Run lighthouse audit
- [ ] Deploy to production

---

**Made with ❤️ for developers**

*Last updated: October 29, 2025*
