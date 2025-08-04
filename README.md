# Webilan - Next.js + React + Vercel

A modern, production-ready Next.js application built with React, TypeScript, Tailwind CSS, and shadcn/ui components. Optimized for Vercel deployment.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **React 18** - Modern React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide Icons** - Beautiful & consistent icon toolkit
- **ESLint** - Code quality and consistency
- **Vercel Ready** - Optimized for zero-config deployment

## 🛠️ Tech Stack

- ⚡ **Next.js 15** - React framework
- ⚛️ **React 18** - UI library
- 📘 **TypeScript** - Type safety
- 🎨 **Tailwind CSS** - Styling
- 🧩 **shadcn/ui** - UI components
- 🎯 **Lucide Icons** - Icon library
- 🔍 **ESLint** - Linting
- 🚀 **Vercel** - Deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 01webilan_3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

### Available Components

- `button` - Interactive buttons
- `card` - Content containers
- `input` - Form inputs

### Adding Lucide Icons

```tsx
import { IconName } from "lucide-react";

<IconName className="h-4 w-4" />
```

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                 # App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/          # React components
│   └── ui/             # shadcn/ui components
└── lib/                # Utility functions
    └── utils.ts        # Tailwind utilities
```

## 🎯 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Contact Form Email Setup

The contact form automatically sends emails to `info@01webilan.com`. To enable this feature:

1. **Sign up for Resend** (free tier available):
   - Go to [resend.com](https://resend.com)
   - Create an account and get your API key

2. **Add your API key to environment variables**:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

3. **For production deployment on Vercel**:
   - Go to your Vercel project settings
   - Add the `RESEND_API_KEY` environment variable
   - Deploy your changes

**Alternative email services**: You can also use SendGrid, Mailgun, or other email providers by modifying the `src/lib/emailService.ts` file.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js, React, and modern web technologies.
