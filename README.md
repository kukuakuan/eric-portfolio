# Portfolio Website - Nguyen Hong Quan

A modern, professional portfolio website showcasing fullstack development expertise, projects, and experience.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **Theme**: next-themes (Dark/Light mode)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
eric-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with all sections
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Header, Footer
│   └── sections/           # Hero, About, Experience, etc.
├── lib/
│   ├── data.ts             # Portfolio data
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eric-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal info (name, email, phone, etc.)
- Work experience
- Projects
- Skills
- Education

### Styling

- Colors: Edit `app/globals.css` to customize the color scheme
- Components: All components are in `components/` directory
- Tailwind config: Uses Tailwind CSS v4 with CSS variables

### Add/Remove Sections

1. Create new section component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/layout/Header.tsx`

## 🎨 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Animated sections with Framer Motion
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Accessible components
- ✅ Modern UI with shadcn/ui

## 📦 Build for Production

```bash
pnpm build
pnpm start
```

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
pnpm add -g vercel
vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nguyen Hong Quan**
- Email: nguyenhongquan1921@gmail.com
- LinkedIn: [linkedin.com/in/nguyenhongquan1921](https://linkedin.com/in/nguyenhongquan1921)

---

Built with ❤️ using Next.js and Tailwind CSS
