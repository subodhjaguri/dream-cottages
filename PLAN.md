# Make My Dream Cottages - React Website Redesign Plan

## Overview
Redesign the Make My Dream Cottages website using React.js with a modern, photogenic UI/UX that showcases container cottage services effectively.

---

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build tool (fast dev server) |
| Tailwind CSS | Styling |
| React Router v6 | Page routing |
| Framer Motion | Animations |
| Lucide React | Icons |

---

## Design System

### Color Palette (Forest Green & Gold Theme)
```
Primary:      #2D5A27  (Forest Green - nature/eco)
Secondary:    #1E3A1E  (Dark Forest - depth)
Accent:       #D4A84B  (Golden - premium feel)
Accent Light: #E8C97A  (Light Gold - highlights)
Dark:         #1A1A1A  (Near black)
Light:        #F5F5F0  (Off-white/cream)
White:        #FFFFFF
```

### Typography
- **Headings:** Playfair Display (elegant, premium)
- **Body:** Inter (clean, readable)

### Animation Style (Subtle & Smooth)
- Gentle fade-in on scroll (0.6s ease)
- Smooth hover scale (1.02-1.05)
- Soft color transitions (0.3s)
- Subtle parallax on hero (0.5 speed)

---

## Project Structure
```
cottage/
├── public/
│   └── images/              # Images (original + placeholders)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── ServicesOverview.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── GalleryPreview.jsx
│   │   │   └── CTASection.jsx
│   │   └── shared/
│   │       ├── ProductCard.jsx
│   │       ├── ServiceCard.jsx
│   │       ├── ContactForm.jsx
│   │       ├── EnquiryForm.jsx
│   │       ├── WhatsAppButton.jsx
│   │       └── Lightbox.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── DesignServices.jsx
│   │   ├── BuildServices.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── products.js
│   │   ├── services.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── content.md               # Website content reference
├── PLAN.md                  # This file
├── package.json
├── tailwind.config.js
├── vite.config.js
└── index.html
```

---

## Pages & Features

### 1. Homepage
```
┌─────────────────────────────────────────────────┐
│  [Navbar - transparent, becomes solid on scroll]│
├─────────────────────────────────────────────────┤
│                                                 │
│           FULL-SCREEN HERO IMAGE                │
│      "Your Dream Cottage Awaits"                │
│      Subtitle about Uttarkashi                  │
│      [Explore Products]  [Contact Us]           │
│                                                 │
├─────────────────────────────────────────────────┤
│  INTRO SECTION                                  │
│  Company description with side image            │
├─────────────────────────────────────────────────┤
│  FEATURED PRODUCTS (Horizontal scroll/grid)     │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│  │ 1BR  │ │ 2BR  │ │ 3BR  │ │ Mod  │ │ Pod  │ │
│  └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ │
├─────────────────────────────────────────────────┤
│  SERVICES (Two columns)                         │
│  ┌─────────────────┬─────────────────┐         │
│  │  Design         │     Build       │         │
│  │  Services       │    Services     │         │
│  │  [Learn More]   │   [Learn More]  │         │
│  └─────────────────┴─────────────────┘         │
├─────────────────────────────────────────────────┤
│  WHY CHOOSE US (4 icon cards)                   │
│  Quality | Creative | Consultation | Service    │
├─────────────────────────────────────────────────┤
│  TESTIMONIALS (Carousel)                        │
│  Customer reviews with ratings                  │
├─────────────────────────────────────────────────┤
│  GALLERY PREVIEW (Masonry 6 images)             │
│  [View Full Gallery →]                          │
├─────────────────────────────────────────────────┤
│  CTA SECTION                                    │
│  "Ready to build your dream cottage?"           │
│  [Get Free Consultation]                        │
├─────────────────────────────────────────────────┤
│  [Footer with links, contact, social]           │
└─────────────────────────────────────────────────┘
│  [WhatsApp Floating Button - bottom right]      │
```

### 2. About Page
- Hero banner with mountain backdrop
- Company story section
- Why container homes (benefits)
- Local Uttarkashi commitment
- Call to action

### 3. Design Services Page
- Service overview
- Process steps (4-step visual)
- What's included list
- Portfolio examples
- CTA with enquiry form

### 4. Build Services Page
- Materials showcase (Corten steel)
- Durability features
- Construction process
- Quality guarantees
- CTA with enquiry form

### 5. Products Page
- Filter tabs: All | 1BR | 2BR | 3BR | Mod | Glamping
- Product grid with cards
- Each card: Image, Title, Brief specs, Price (Contact), Link

### 6. Product Detail Page
- Large image gallery with lightbox
- Specifications table
- Features with icons
- Dimensions diagram
- Enquiry form
- Related products

### 7. Gallery Page
- Masonry grid layout
- Category filter
- Lightbox on click
- Load more / infinite scroll

### 8. Contact Page
- Split: Form (left) | Info + Map (right)
- Direct call/WhatsApp buttons
- Social media links
- Business hours

---

## Additional Features

### WhatsApp Floating Button
- Fixed position (bottom-right)
- Pulse animation on load
- Opens WhatsApp with pre-filled message
- Phone: +91-9520578466

### Image Lightbox
- Full-screen overlay
- Navigation arrows
- Close on click outside
- Keyboard navigation (←→ Esc)
- Image counter

### Enquiry Form (on Products)
- Name, Email, Phone
- Product interest dropdown
- Message textarea
- Submit to email (or just UI for now)

### Testimonials Section
- 3-4 placeholder testimonials
- Star ratings
- Customer photo placeholders
- Auto-rotate carousel

---

## Product Data Reference

### One Bedroom Cottage
- Dimensions: 20' x 10' x 8'
- Door: 3' x 6'6"
- Windows: 2 units (4' x 4')
- Fans: 2 ceiling fans
- Flooring: 18mm cement board + carpet
- Walls: 8mm MDF plywood
- Insulation: Thermacool

### Two Bedroom Cottage
- 2 rooms with separate bathroom each
- Storage in each room
- Ideal for: Personal, family, business

### Three Bedroom Cottage
- Kitchen included
- Family bathroom
- Wardrobe in each room
- Perfect for larger families

### Mod Room
- Modern modular design
- Technologically advanced
- Fast construction

### Glamping Pod
- Luxury camping
- Weatherproof & sturdy
- Basic to premium options
- Relocatable

---

## Implementation Phases

### Phase 1: Setup (Files: 5)
- [x] content.md (created)
- [ ] Initialize Vite + React
- [ ] Install dependencies
- [ ] Configure Tailwind
- [ ] Setup folder structure

### Phase 2: Layout Components (Files: 4)
- [ ] Navbar.jsx
- [ ] Footer.jsx
- [ ] Layout.jsx
- [ ] App.jsx with routing

### Phase 3: UI Components (Files: 6)
- [ ] Button.jsx
- [ ] Card.jsx
- [ ] SectionTitle.jsx
- [ ] WhatsAppButton.jsx
- [ ] Lightbox.jsx
- [ ] EnquiryForm.jsx

### Phase 4: Homepage (Files: 7)
- [ ] Home.jsx
- [ ] Hero.jsx
- [ ] FeaturedProducts.jsx
- [ ] ServicesOverview.jsx
- [ ] WhyChooseUs.jsx
- [ ] Testimonials.jsx
- [ ] CTASection.jsx

### Phase 5: Data Files (Files: 3)
- [ ] products.js
- [ ] services.js
- [ ] testimonials.js

### Phase 6: Other Pages (Files: 7)
- [ ] About.jsx
- [ ] DesignServices.jsx
- [ ] BuildServices.jsx
- [ ] Products.jsx
- [ ] ProductDetail.jsx
- [ ] Gallery.jsx
- [ ] Contact.jsx

### Phase 7: Polish
- [ ] Responsive testing
- [ ] Animation refinement
- [ ] Image optimization

---

## Placeholder Images

Use Unsplash for high-quality placeholders:

| Use Case | Unsplash Search |
|----------|-----------------|
| Hero | "container home mountain" |
| Products | "tiny house", "cabin" |
| Interior | "modern cabin interior" |
| Glamping | "glamping tent luxury" |
| Mountains | "uttarakhand mountains" |
| Gallery | Mix of above |

---

## Contact Information (For Components)

```javascript
const contact = {
  phone: ['+91-9520578466', '+91-8126373066'],
  email: 'makemydreamcottages66@gmail.com',
  address: 'Barethi, By Pass, Uttarkashi, Uttarakhand 249193',
  whatsapp: '919520578466',
  social: {
    facebook: 'https://facebook.com/profile.php?id=61579071905980',
    instagram: 'https://instagram.com/invites/contact/?igsh=1lzm3jldrmcxr',
    youtube: 'https://youtube.com/channel/UCAdd24u21hD6cA9VcSa48wA'
  }
};
```

---

## Verification Checklist
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Mobile responsive (test 375px, 768px, 1024px)
- [ ] Images load properly
- [ ] WhatsApp button opens correct chat
- [ ] Lightbox opens/closes correctly
- [ ] Forms display properly
- [ ] Animations are smooth
- [ ] Colors match design system
