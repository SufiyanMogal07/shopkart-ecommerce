# ShopKart – AI-Enhanced E-commerce Platform

A full-stack e-commerce application demonstrating a complete shopping flow with AI-powered product insights. Built as an interview project to showcase modern full-stack development practices, clean architecture, and responsible AI integration.

## Overview

ShopKart provides users with a seamless shopping experience across product discovery, detailed product views, cart management, and checkout. The platform integrates Google Gemini AI to generate structured product insights, helping users make informed purchasing decisions while maintaining transparency about AI capabilities and limitations.

**Key Features:**
- Complete e-commerce workflow (product listing → detail → cart → checkout → order)
- AI-generated product insights with smart caching
- Responsive design with modern UI components
- Persistent cart using browser storage
- RESTful API architecture with clear separation of concerns

---

### Prerequisites
- Node.js v18+
- PostgreSQL
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd shopkart-ecommerce
   
   # Backend
   cd server && npm install
   
   # Frontend
   cd ../client && npm install
   ```

2. **Configure environment variables:**

   **Server** - Create `server/.env`:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/ecommerce_db?schema=public
   GEMINI_API_KEY=your_gemini_api_key
   PORT=5001
   ```

   **Client** - Create `client/.env`:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Setup database:**
   ```bash
   cd server
   npx prisma migrate dev
   npm run seed-products # seed the mock data
   ```

4. **Start development servers:**
   ```bash
   # Terminal 1: Backend (from server/)
   npm run dev
   
   # Terminal 2: Frontend (from client/)
   npm run dev
   ```

   Access at [http://localhost:3000](http://localhost:3000)

---

## Project Architecture

### Frontend Structure
```
client/
├── app/                    # Next.js App Router
│   ├── page.js            # Home - product listing
│   ├── products/[id]/     # Product detail page
│   ├── cart/              # Shopping cart
│   └── checkout/          # Checkout flow
├── components/
│   ├── layout/            # Navbar, Footer
│   └── others/            # ProductCard component
├── pages/                 # Page components
├── utils/
│   ├── cart/              # Cart logic
│   └── localstorage/      # Storage utilities
└── package.json
```

### Backend Structure
```
server/
├── src/
│   ├── controllers/       # Business logic
│   │   ├── products.controller.js
│   │   ├── orders.controller.js
│   │   └── ai.controller.js
│   ├── routes/            # API endpoints
│   │   ├── products.routes.js
│   │   ├── orders.routes.js
│   │   └── ai.routes.js
│   └── app.js             # Express setup
├── prisma/
│   ├── schema.prisma      # Data models
│   ├── migrations/        # Database migrations
│   └── seed.js            # Sample data
├── db/
│   └── dbConfig.js        # Database connection
└── package.json
```

---

## API Reference

### Products
```
GET /products              List all products
GET /products/:id          Get product details
```

### Orders
```
POST /orders               Create an order
GET /orders                List orders
GET /orders/:id            Get order details
```

### AI Insights
```
POST /ai/insight           Generate product insight
```

**Request body for `/ai/insight`:**
```json
{
  "title": "Product Name",
  "description": "Product description",
  "price": 9999
}
```

---

## AI Feature: Product Insights

### How It Works

The AI insight feature helps users understand products through structured analysis. Here's the flow:

1. **User Initiates**: Click "Generate AI Insight" on product detail page
2. **Data Submission**: Frontend sends product title, description, and price to backend
3. **AI Processing**: Google Gemini 2.5 Flash analyzes the product data
4. **Structured Output**: AI generates:
   - **Key Highlights** (3): Unique technical specs and value propositions
   - **Pros** (2): Compelling reasons to choose this product
   - **Limitation** (1): Honest caveat or consideration
   - **Target Audience** (1): Specific customer segment who benefits most
5. **Caching**: Response is stored in localStorage to avoid redundant API calls
6. **Display**: Formatted insight shown to user

### Example Output

```
Product: Wireless Noise-Canceling Headphones | ₹29,999

Key Highlights:
• 40-hour battery life with fast charging
• Industry-leading adaptive noise cancellation
• Seamless multipoint Bluetooth connectivity

Pros:
✓ Superior audio quality across music and calls
✓ Comfortable for extended wear (6+ hours)

Limitation:
Requires 3 hours for full charge from empty.

Best For:
Remote professionals and frequent travelers requiring premium 
audio quality with minimal distractions.
```

### Why This Approach

- **Structured Format**: Ensures consistent, scannable insights
- **Balanced Perspective**: Includes both advantages and limitations
- **Caching**: Reduces API calls and improves performance
- **Transparency**: Users see AI-generated (not human-written) content
- **Minimal Overhead**: Uses a lightweight, fast AI model

---

## AI Usage: Limitations & Responsible Integration

### Limitations

The AI feature has inherent limitations that users and developers should understand:

1. **Knowledge Cutoff**: Gemini has a knowledge cutoff date and may not reflect very recent product updates or pricing changes.

2. **Data Quality Dependency**: Output quality depends entirely on input quality. Incomplete or inaccurate product descriptions lead to less useful insights.


### Responsible Usage

To maintain trust and transparency:

- **Clear Labeling**: Frontend clearly indicates insights are AI-generated (emoji and button text)
- **User Control**: Users choose whether to generate insights; it's never forced
- **Caching Transparency**: Cached results show the same insight if regenerated
- **No Claims of Authority**: Insights are presented as supplementary information, not expert recommendations
- **API Rate Limiting**: Could be implemented to prevent abuse (future enhancement)
- **User Feedback Loop**: Could collect feedback on insight usefulness (future enhancement)

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1 | React framework with App Router |
| React | 19.2 | UI library |
| Tailwind CSS | 4 | Utility-first styling |
| react-hot-toast | 2.6 | Toast notifications |
| lucide-react | 0.574 | Icon library |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | Latest | JavaScript runtime |
| Express | 5.2 | Web server framework |
| Prisma | 7.4 | ORM for PostgreSQL |
| PostgreSQL | Latest | Relational database |
| Google Generative AI | 0.24 | Gemini API client |
| Nodemon | 3.1 | Development server |


## Development Workflow

### Database Management
```bash
# Create migration after schema changes
npx prisma migrate dev --name <descriptive_name>

# Visual database explorer
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

### Building for Production
```bash
# Backend
cd server && npm run build

# Frontend
cd client && npm run build && npm start
```

---

## Interview Highlights

This project demonstrates:

- **Full-Stack Competency**: Complete feature across frontend and backend
- **Modern Architecture**: Next.js App Router, Express REST API, Prisma ORM
- **AI Integration**: Practical use of third-party AI API with proper error handling
- **Database Design**: Normalized schema with proper relationships
- **State Management**: Client-side state with localStorage persistence
- **User Experience**: Loading states, error handling, toast notifications
- **Performance Optimization**: Smart caching, efficient API calls
- **Code Organization**: Clear separation of concerns (controllers, routes, services)
- **Responsive Design**: Mobile-first CSS approach
- **Responsible AI**: Transparent limitations and honest feature integration

---

## Environment Variables Reference

### Backend (.env)
| Variable | Example | Required |
|---|---|---|
| `DATABASE_URL` | `postgresql://user:pass@localhost:5432/ecommerce` | Yes |
| `GEMINI_API_KEY` | `AIzaSy...` | Yes |
| `PORT` | `5001` |

### Frontend (.env.local)
| Variable | Example | Required |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:5000` | Yes |

---

## Getting Your API Keys

### Google Gemini API
1. Visit [Google AI Studio](https://aistudio.google.com)
2. Click "Get API Key"
3. Create new API key in Google Cloud Console
4. Copy key to `.env` file

---

## Future Enhancements

- Product search and filtering
- User authentication and wishlist
- Payment gateway integration (Stripe/Razorpay)
- API rate limiting for AI endpoint
- User feedback on AI insights
- Product recommendations based on browsing history
- Admin dashboard for product management

---

## License

ISC

---

**Portfolio Ready**: This project is structured for GitHub portfolio and interview evaluation.

---

## 📞 Support

For questions or issues, please open an issue in the repository.

**Happy Coding! 🚀**
