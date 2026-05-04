# 🐄 QurbaniHut

A modern online platform for buying and selling Qurbani animals — built with Next.js, secured with Google OAuth via BetterAuth, and powered by MongoDB.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | Full-stack React framework (App Router) |
| [BetterAuth](https://better-auth.com/) | Authentication (Google OAuth + Email) |
| [MongoDB](https://www.mongodb.com/) | Database via BetterAuth adapter |
| [DaisyUI](https://daisyui.com/) | Tailwind-based UI component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |

---

## ✨ Features

- 🔐 Google OAuth authentication
- 📧 Email & password registration/login
- 🐄 Browse and list Qurbani animals
- 📍 Location, weight, and price details per listing
- ⭐ Featured animal badges
- 🎞️ Smooth card animations with Framer Motion
- 📱 Fully responsive design
- 🔔 Toast notifications for user feedback
- ⚠️ Custom error and 404 pages

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- Google OAuth credentials ([Google Cloud Console](https://console.cloud.google.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/SayemImran/qurbanihut.git
cd qurbanihut

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of your project:

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# BetterAuth
BETTER_AUTH_SECRET=your_better_auth_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication

QurbaniHut uses [BetterAuth](https://better-auth.com/) for authentication with:

- **Google OAuth** — one-click sign in with Google
- **Email/Password** — traditional registration and login

Authentication state is managed on the client via `authClient` and redirects are handled manually using Next.js's `useRouter`.

---

## 🛠️ Scripts

```bash
npm run dev       # Start development server (Turbopack)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 🌐 Deployment

This project can be deployed on [Vercel](https://vercel.com/) with zero configuration:

```bash
npm install -g vercel
vercel
```

Make sure to add all environment variables in your Vercel project settings.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Made with ❤️ for Eid ul-Adha

---
## Live link
https://qurbanihut-bd.vercel.app/
