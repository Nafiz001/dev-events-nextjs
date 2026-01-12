# DevEvent - Developer Events Platform 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://dev-events-nextjs-six.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/)

**The Hub for Every Dev Event You Can't Miss** - A modern, full-stack platform for discovering and creating developer events including hackathons, meetups, and conferences.

🌐 **Live Site**: [https://dev-events-nextjs-six.vercel.app/](https://dev-events-nextjs-six.vercel.app/)

## ✨ Features

- 🎨 **Modern UI** - Stunning dark theme with WebGL light rays effects
- 📅 **Event Management** - Create, browse, and discover developer events
- 🎫 **Event Booking** - Register for events with email
- 🔍 **Smart Discovery** - Find similar events based on tags
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Lightning Fast** - Built with Next.js 16 and Turbopack
- 🗄️ **MongoDB Database** - Scalable event and booking storage
- ☁️ **Cloudinary Integration** - Cloud-based image hosting
- 📊 **Analytics Ready** - PostHog integration for tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Database**: MongoDB Atlas with Mongoose ODM
- **Styling**: Tailwind CSS v4
- **Image Hosting**: Cloudinary
- **Analytics**: PostHog
- **Deployment**: Vercel
- **3D Effects**: OGL (WebGL library)

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm/yarn/pnpm
- MongoDB Atlas account
- Cloudinary account (for image uploads)
- PostHog account (optional, for analytics)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nafiz001/dev-events-nextjs.git
   cd dev-events-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   
   # MongoDB Connection
   MONGODB_URI=your_mongodb_connection_string
   
   # Cloudinary Configuration
   CLOUDINARY_URL=cloudinary://your_api_key:your_api_secret@your_cloud_name
   
   # PostHog Analytics (Optional)
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dev-events-nextjs/
├── app/
│   ├── api/
│   │   └── events/          # API routes for events
│   ├── events/
│   │   ├── create/          # Create event page
│   │   └── [slug]/          # Event detail page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── BookEvent.tsx        # Event booking form
│   ├── CreateEventForm.tsx  # Create event form
│   ├── EventCard.tsx        # Event card component
│   ├── EventDetails.tsx     # Event details component
│   ├── ExploreBtn.tsx       # Explore button
│   ├── LightRays.tsx        # WebGL light effects
│   └── Navbar.tsx           # Navigation bar
├── database/
│   ├── booking.model.ts     # Booking schema
│   ├── event.model.ts       # Event schema
│   └── index.ts             # Database exports
├── lib/
│   ├── actions/
│   │   ├── booking.actions.ts  # Booking server actions
│   │   └── event.actions.ts    # Event server actions
│   ├── constants.ts         # App constants
│   └── mongodb.ts           # MongoDB connection
└── public/
    ├── icons/               # SVG icons
    └── images/              # Event images
```

## 🎯 Key Features Explained

### Event Creation
- Rich form with validation
- Image upload with preview
- Automatic slug generation
- Tag and agenda management

### Event Discovery
- Browse all events on homepage
- Similar events recommendations
- Event details with full information
- Booking functionality

### Database Models
- **Event Model**: Complete event information with validation
- **Booking Model**: User registrations with email verification
- **Indexes**: Optimized for fast queries

## 🔧 API Routes

### Events API
- `POST /api/events` - Create a new event
- `GET /api/events` - Get all events
- `GET /api/events/[slug]` - Get event by slug

## 🎨 Design Features

- Custom gradient text effects
- Glass morphism UI elements
- Interactive WebGL light rays background
- Smooth animations and transitions
- Dark theme optimized for developers

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BASE_URL` | Base URL of the application | Yes |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `CLOUDINARY_URL` | Cloudinary configuration URL | Yes |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key | No |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog API host | No |

## 🚢 Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy your own instance:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Nafiz001**
- GitHub: [@Nafiz001](https://github.com/Nafiz001)
- Live Demo: [DevEvent Platform](https://dev-events-nextjs-six.vercel.app/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting
- MongoDB for database services
- Cloudinary for image hosting

---

Made with ❤️ for the developer community
