# Gracelyn Chong - Portfolio Website

A modern, premium portfolio website built with Next.js 14, featuring a beautiful dark/light mode toggle and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, premium UI with smooth animations
- **Dark/Light Mode**: Fully functional theme toggle with system preference detection
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **Animations**: Smooth Framer Motion animations throughout
- **TypeScript**: Full type safety
- **Accessibility**: WCAG compliant design

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio_Gracelyn
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The easiest way to deploy your portfolio is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 🎨 Customization

### Personal Information
Update the content in each component file to reflect your personal information:

- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - Personal description and stats
- `components/experience.tsx` - Work experience and positions
- `components/projects.tsx` - Your projects and portfolio items
- `components/education.tsx` - Educational background and certifications
- `components/skills.tsx` - Technical and soft skills
- `components/contact.tsx` - Contact information and social links

### Styling & Theme
- Modify `tailwind.config.js` for custom colors and styling
- Update `app/globals.css` for global styles
- Adjust animation timings in component files

### Content Structure
The portfolio includes these main sections:
- Hero/Landing section with introduction
- About section with personal overview
- Experience timeline with work history
- Projects showcase with filtering
- Education and certifications
- Skills with proficiency indicators
- Contact form with social links

## 🌟 Key Components

- **Theme Provider**: Handles dark/light mode switching
- **Navigation**: Responsive navbar with smooth scrolling
- **Hero Section**: Animated landing area with call-to-actions
- **Timeline**: Professional experience in timeline format
- **Project Cards**: Interactive project showcase
- **Contact Form**: Functional contact form with validation
- **Footer**: Site footer with quick links and social media

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- Next.js 14 App Router for optimal performance
- Efficient component lazy loading
- Optimized images and assets
- Minimal bundle size with tree shaking

## 🔧 Development

### Project Structure
```
├── app/                 # Next.js app directory
├── components/          # React components
├── public/             # Static assets
├── .github/            # GitHub configuration
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.js      # Next.js configuration
```

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

Built with ❤️ by Gracelyn Chong Wen Hui