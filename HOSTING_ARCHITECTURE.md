# Hosting Architecture Guide

## How Your Custom AI Chatbot Platform Works

### 🏗️ **Single Platform, Multi-Tenant Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                    YOUR PLATFORM                            │
│  (Hosted on Vercel - Free Tier)                            │
├─────────────────────────────────────────────────────────────┤
│  Frontend: Next.js App                                     │
│  ├── Landing Page (/demo)                                  │
│  ├── Client Dashboard (/dashboard)                         │
│  └── Admin Panel (/admin)                                  │
├─────────────────────────────────────────────────────────────┤
│  Backend: API Routes                                       │
│  ├── /api/chat (Handles all client messages)              │
│  ├── /api/auth (User authentication)                      │
│  └── /api/webhooks (Stripe payments)                      │
├─────────────────────────────────────────────────────────────┤
│  Database: MongoDB Atlas (Free Tier)                       │
│  ├── Users (All platform users)                           │
│  ├── Businesses (All client businesses)                   │
│  ├── Chatbots (All client chatbots)                       │
│  └── Conversations (All chat history)                     │
└─────────────────────────────────────────────────────────────┘
```

### 🌐 **Client Integration Flow**

```
Client Website A                    Your Platform                    Client Website B
┌─────────────────┐                ┌─────────────────┐              ┌─────────────────┐
│                 │                │                 │              │                 │
│  <script>       │                │  API Endpoint   │              │  <script>       │
│  chatbot-widget │ ──────────────▶│  /api/chat      │ ◀────────────│  chatbot-widget │
│  .js            │                │                 │              │  .js            │
│                 │                │  Routes to:     │              │                 │
│  User types:    │                │  ├── Client A   │              │  User types:    │
│  "Hello"        │                │  └── Client B   │              │  "Help"         │
│                 │                │                 │              │                 │
└─────────────────┘                └─────────────────┘              └─────────────────┘
```

## 🎯 **Key Benefits of Custom Platform**

### 1. **Single Hosting Point**
- **One Vercel deployment** handles all clients
- **One MongoDB database** stores all data
- **One codebase** to maintain and update

### 2. **Client Widget Integration**
Each client gets a unique widget code:
```html
<!-- Client A's Widget -->
<script src="https://your-platform.vercel.app/chatbot-widget.js"></script>
<div id="chatbot-widget" 
     data-chatbot-id="client-a-unique-id"
     data-business-name="Client A Business">
</div>

<!-- Client B's Widget -->
<script src="https://your-platform.vercel.app/chatbot-widget.js"></script>
<div id="chatbot-widget" 
     data-chatbot-id="client-b-unique-id"
     data-business-name="Client B Business">
</div>
```

### 3. **API Routes Messages to Correct Client**
```javascript
// /api/chat/route.ts
export async function POST(request: NextRequest) {
  const { message, chatbotId } = await request.json()
  
  // Find the specific client's chatbot
  const chatbot = await prisma.chatbot.findUnique({
    where: { id: chatbotId },
    include: { business: true }
  })
  
  // Generate response using client's specific configuration
  const response = await generateResponse(message, chatbot.config)
  
  return NextResponse.json({ response })
}
```

## 💰 **Cost Breakdown**

### **Your Platform (Custom)**
| Component | Cost | Notes |
|-----------|------|-------|
| **Vercel Hosting** | $0/month | Free tier (100GB bandwidth) |
| **MongoDB Atlas** | $0/month | Free tier (512MB storage) |
| **OpenAI API** | ~$5-20/month | Based on usage |
| **Total** | **$5-20/month** | For unlimited clients |

### **Third-Party (Chatbase)**
| Component | Cost | Notes |
|-----------|------|-------|
| **Chatbase Pro** | $29/month | Per client |
| **10 Clients** | $290/month | $29 × 10 |
| **50 Clients** | $1,450/month | $29 × 50 |
| **Total** | **$29-1,450+/month** | Scales with clients |

## 🚀 **Deployment Steps**

### 1. **Deploy to Vercel**
```bash
# Connect your GitHub repo to Vercel
# Vercel automatically deploys on push
git push origin main
```

### 2. **Set Environment Variables**
In Vercel dashboard:
```
DATABASE_URL=mongodb+srv://...
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
```

### 3. **Get Your Platform URL**
```
https://your-platform.vercel.app
```

### 4. **Client Integration**
Send each client their unique widget code:
```html
<script src="https://your-platform.vercel.app/chatbot-widget.js"></script>
<div id="chatbot-widget" data-chatbot-id="CLIENT_UNIQUE_ID"></div>
```

## 🔧 **Technical Implementation**

### **Widget Script** (`/public/chatbot-widget.js`)
```javascript
// Loads on client websites
// Communicates with your platform API
// Handles chat UI and message sending
```

### **API Endpoint** (`/api/chat/route.ts`)
```typescript
// Receives messages from all client widgets
// Routes to correct client's chatbot
// Returns AI-generated responses
```

### **Database Schema**
```prisma
// Multi-tenant design
model Business {
  id String @id
  name String
  chatbots Chatbot[]
}

model Chatbot {
  id String @id
  businessId String
  business Business
  config Json // Client-specific settings
}
```

## 📈 **Scaling Strategy**

### **Phase 1: Pilot (0-10 clients)**
- Vercel Free Tier
- MongoDB Atlas Free Tier
- **Cost: $5-20/month**

### **Phase 2: Growth (10-50 clients)**
- Vercel Pro ($20/month)
- MongoDB Atlas Shared ($9/month)
- **Cost: $34-49/month**

### **Phase 3: Scale (50+ clients)**
- Vercel Pro ($20/month)
- MongoDB Atlas Dedicated ($57/month)
- **Cost: $77/month**

## 🎯 **Key Advantages**

✅ **No per-client hosting costs**  
✅ **Single platform to maintain**  
✅ **Full control over features**  
✅ **Your branding throughout**  
✅ **Unlimited scalability**  
✅ **Better profit margins**  

## 🚀 **Next Steps**

1. **Deploy to Vercel** (Free)
2. **Set up MongoDB Atlas** (Free)
3. **Configure environment variables**
4. **Test with your own website**
5. **Start onboarding clients**

This architecture gives you **maximum control** and **minimum costs** while providing a **professional, scalable solution** for your clients! 