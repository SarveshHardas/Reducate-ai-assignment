# JG University Landing Page - Implementation Guide

## Quick Reference for Key Files

### Core Configuration Files

#### `app/layout.tsx` - Root Layout
- Imports Inter & Sora fonts from Google Fonts
- Sets up metadata with page title and description
- Configures CSS variables for theme colors
- Wraps all content with smooth scroll behavior
- Gradient background from slate-50 → white → slate-50

#### `app/globals.css` - Global Styles
- CSS custom properties for colors, fonts, spacing
- Utility classes: `gradient-text`, `glass-morphism`, `soft-shadow`
- Smooth transitions and animations
- Font variation settings for typography

#### `constants/design.ts` - Design Tokens
- `COLORS` object with all brand colors
- `TYPOGRAPHY` heading and body styles
- `PROGRAMS` array (8 programs with icons & gradients)
- `STATS` array (15000+ students, 500+ faculty, etc.)
- `FEATURES` array (6 why-choose-us features)

---

## Component Architecture

### Base Components (`components/`)

#### `Button.tsx`
```typescript
Type: Reusable button with 4 variants
Variants: primary, secondary, outline, ghost
Sizes: sm, md, lg
Features: Smooth transitions, hover effects, disabled state
```

#### `Layout.tsx`
```typescript
Exports:
- Container: Max-width wrapper with padding
- Section: Semantic <section> with spacing, accepts id/ref
- GradientText: Gradient text styling utility
```

#### `Navbar.tsx`
```typescript
Features:
- Sticky navigation with glassmorphism
- Scroll-aware blur effect
- Mobile hamburger menu
- Fullscreen mobile navigation
- 4 navigation items + 2 CTA buttons
```

#### `Card.tsx`
```typescript
Variants:
1. default - solid white background
2. glass - glassmorphism effect
3. minimal - transparent with border
Features: Hover shadow, smooth transitions
```

#### `Footer.tsx`
```typescript
Structure:
- Logo & tagline column
- 3 link columns (Academic, Student, Company)
- Contact info (address, phone, email)
- Social media links (4 platforms)
- Copyright year
```

---

## Section Components (`sections/`)

### 1. HeroSection.tsx
**Animations:**
- Text reveal with stagger (0.15s delay between lines)
- Floating card animations (3s duration, -20px movement)
- Image fade + scale-up on load

**Key Features:**
- Animated gradient text ("JG University")
- Floating stat cards
- Dual CTA buttons
- Scroll indicator
- Background gradient shapes

### 2. PartnersSection.tsx
**Animations:**
- Infinite marquee scroll (20s duration)
- Monochrome-to-color hover effect
- Fade edges (gradient masks)

**Key Features:**
- 4 partner logos (duplicated for infinite effect)
- Hover scale effect
- Mobile-responsive marquee

### 3. AboutSection.tsx
**Animations:**
- Scroll-triggered content reveal
- Counter animations (values count up)
- GSAP ScrollTrigger integration

**Key Features:**
- Split layout (text + image)
- 4 animated stat cards
- University mission statement
- Glassmorphism cards

### 4. ProgramsSection.tsx
**Animations:**
- Scroll-triggered card fade-in with stagger
- Hover lift effect (-10px translateY)
- Smooth box-shadow transition

**Key Features:**
- 8 program cards in grid
- Gradient backgrounds per program
- Lucide React icons
- Icon color matching program gradient

### 5. WhyChooseUsSection.tsx
**Animations:**
- Scroll-triggered reveals
- Hover animations with scale & shadow
- Staggered card reveals

**Key Features:**
- Bento grid layout (3 columns, 2 featured)
- 6 feature cards with icons
- Gradient background blobs (hover animation)
- Different sizes for visual variety

### 6. CampusExperienceSection.tsx
**Animations:**
- **GSAP ScrollTrigger horizontal scroll**
- Pinned section during scroll
- Image hover scale effect
- Dark overlay gradient on hover

**Key Features:**
- 4 campus showcase cards
- Horizontal scrolling on desktop
- Full-width dark section
- High-quality campus images

### 7. TestimonialsSection.tsx
**Animations:**
- Scroll-triggered card reveals with stagger
- Hover border & shadow effects
- Star rating display

**Key Features:**
- 4 student testimonials
- 5-star ratings with amber color
- Student names & roles
- 2-column grid on desktop

### 8. LeadershipSection.tsx
**Animations:**
- Scroll-triggered image reveals
- Hover image zoom (scale 1.1)
- Subtle text color change

**Key Features:**
- 4 faculty members
- Portrait images from /public/faculty/
- Name and role display
- 4-column grid on desktop

### 9. CTASection.tsx
**Animations:**
- Floating decorative shapes (GSAP)
- Text fade-in on scroll
- Button hover effects

**Key Features:**
- Large typography
- Dual CTA buttons
- Application deadline text
- Floating animated background

---

## Animation Utilities (`animations/gsap-utils.ts`)

### Key Functions

#### `animateTextReveal(element)`
- Queries `.word` elements
- Staggered fade + y-translate animation
- Used in hero section

#### `animateScrollReveal(selector, options)`
- ScrollTrigger fade-in effect
- Trigger at 80% of viewport
- Used in multiple sections

#### `animateParallax(selector, speed)`
- Parallax scroll effect
- Speed factor controls movement intensity

#### `createHorizontalScroll(container, section)`
- **Main campus section animation**
- Pins section during scroll
- Calculates scroll distance
- Uses ScrollTrigger with scrub: 1

#### `createCountUpAnimation(element, target, duration)`
- Used in About section
- Animates numbers from 0 to target
- Formats with locale string

#### `createStaggerAnimation(selector, delay)`
- Staggered fade-in animations
- Delay between elements

#### `createFloatingAnimation(selector)`
- Continuous floating effect
- Uses yoyo for up/down movement

#### `createHoverTilt(selector)`
- 3D tilt effect on mousemove
- Perspective-based rotation

---

## Data Structures

### Programs (8 total)
```typescript
{
  id: number,
  name: string,
  description: string,
  icon: IconName (from Lucide React),
  color: "from-X-500 to-Y-500" (Tailwind gradient)
}
```

### Features (6 total)
```typescript
{
  title: string,
  description: string,
  icon: IconName
}
```

### Stats (4 total)
```typescript
{
  label: string,
  value: string
}
```

---

## Styling Approach

### Tailwind CSS Utilities Used
```
Spacing: px-4 sm:px-6 lg:px-8, py-16 md:py-24 lg:py-32
Colors: from purple-600, via purple-500, to cyan-500
Typography: text-7xl md:text-5xl, font-semibold, tracking-tight
Backgrounds: bg-gradient-to-b, from-slate-50 via-white
Borders: border border-slate-200, border-white/20
Shadows: shadow-lg, shadow-2xl, shadow-[0_8px_32px_rgba...]
Effects: backdrop-blur-xl, filter blur-3xl
```

### Custom CSS Utilities
```css
.gradient-text - Gradient text with clip-path
.glass-morphism - Backdrop blur + translucent white
.soft-shadow - Subtle shadow (0_8px_32px)
.smooth-transition - All properties, 500ms
.section-spacing - Vertical padding by breakpoint
```

---

## Responsive Breakpoints

| Breakpoint | Size | Usage |
|-----------|------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape |
| xl | 1280px | Small desktop |
| 2xl | 1536px | Large desktop |

### Grid Breakpoints
- Hero: `grid-cols-1 lg:grid-cols-2`
- Programs: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Features: `grid-cols-1 md:grid-cols-3`
- Testimonials: `grid-cols-1 md:grid-cols-2`

---

## Performance Optimizations

### Image Optimization
- Next/Image component usage
- Fill layout for responsive images
- Object-contain for aspect ratio
- Lazy loading enabled

### Animation Optimization
- GSAP context management
- Transform-based animations only
- GPU acceleration (will-change could be added)
- ScrollTrigger toggle actions

### Code Optimization
- Component-based architecture
- Reusable utilities
- No inline styles
- Efficient Tailwind purging

---

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: iOS Safari 12+, Chrome Android

---

## Future Enhancement Ideas

1. Add scroll-linked text reveal animations
2. Implement magnetic button hover effects
3. Add parallax depth layers
4. Implement smooth scroll-snap
5. Add form validation for applications
6. Implement dark mode variant
7. Add page transition animations
8. Implement lazy loading for heavy sections

---

## Testing Recommendations

- [ ] Test all animations at 60fps on mobile
- [ ] Verify responsive layouts on all breakpoints
- [ ] Check accessibility (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse)
- [ ] Cross-browser compatibility
- [ ] Touch event handling on mobile
- [ ] Screen reader compatibility

---

## Deployment Checklist

- [x] Build succeeds without errors
- [x] All sections implemented
- [x] Animations optimized
- [x] Images optimized
- [x] TypeScript strict mode
- [x] Mobile responsive
- [x] Production build tested
- [x] No console errors
- [x] SEO metadata
- [x] Code split by routes

Ready for production deployment! 🚀
