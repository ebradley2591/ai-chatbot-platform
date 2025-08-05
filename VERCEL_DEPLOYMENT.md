# Vercel Deployment Guide

## Deploy Your AI Chatbot Platform to Vercel

### 🚀 **Step 1: Prepare Your Repository**

1. **Push to GitHub**

```bash
git add .
git commit -m "Initial AI chatbot platform"
git push origin main
```

2. **Ensure your repository is public** (for free Vercel deployment)

### 🎯 **Step 2: Deploy to Vercel**

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**
5. **Configure project settings:**

```
Framework Preset: Next.js
Root Directory: ./
Build Command: next build
Output Directory: .next
Install Command: npm install
```

6. **Click "Deploy"**

### ⚙️ **Step 3: Configure Environment Variables**

In your Vercel project dashboard:

1. **Go to Settings → Environment Variables**
2. **Add these variables:**

```
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/chatbot-platform?retryWrites=true&w=majority
OPENAI_API_KEY=sk-your-openai-api-key
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=https://your-project.vercel.app
NEXT_PUBLIC_APP_URL=https://your-project.vercel.app
NEXT_PUBLIC_APP_NAME=AutomateHub Studio
```

3. **Click "Save"**

### 🔧 **Step 4: Deploy Database Schema**

1. **Install Prisma CLI globally:**

```bash
npm install -g prisma
```

2. **Generate Prisma client:**

```bash
npx prisma generate
```

3. **Push schema to MongoDB:**

```bash
npx prisma db push
```

4. **Set up sample data:**

```bash
npm run setup-db
```

### 🌐 **Step 5: Get Your Platform URL**

After deployment, you'll get:

```
https://your-project.vercel.app
```

### 📱 **Step 6: Test Your Platform**

1. **Visit your platform URL**
2. **Test the demo chatbot** at `/demo`
3. **Check the dashboard** at `/dashboard`
4. **Test API endpoints** at `/api/chat`

### 🔗 **Step 7: Client Integration**

Send clients their widget code:

```html
<script src="https://your-project.vercel.app/chatbot-widget.js"></script>
<div
  id="chatbot-widget"
  data-chatbot-id="CLIENT_UNIQUE_ID"
  data-business-name="Client Business Name"
></div>
```

## 🎯 **Vercel-Specific Optimizations**

### **1. Next.js Configuration**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental.appDir warning
  experimental: {
    // appDir is now stable in Next.js 14
  },
  images: {
    domains: ["localhost", "vercel.app", "your-domain.com"],
  },
};

module.exports = nextConfig;
```

### **2. API Route Optimization**

```typescript
// /api/chat/route.ts
export const runtime = "edge"; // Optional: Use edge runtime for faster responses

export async function POST(request: NextRequest) {
  // Your chatbot logic
}
```

### **3. Environment Variables**

```bash
# Production environment variables in Vercel
DATABASE_URL=mongodb+srv://...
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-project.vercel.app
```

## 📊 **Monitoring & Analytics**

### **Vercel Analytics (Free)**

1. **Enable in project settings**
2. **Track page views and performance**
3. **Monitor API route usage**

### **Custom Analytics**

```typescript
// Track chatbot usage
export async function POST(request: NextRequest) {
  // Log analytics
  console.log("Chat request:", {
    chatbotId,
    timestamp: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
  });

  // Your chatbot logic
}
```

## 🔒 **Security & Performance**

### **1. CORS Configuration**

```typescript
// /api/chat/route.ts
export async function POST(request: NextRequest) {
  // Allow requests from client websites
  const origin = request.headers.get("origin");
  const allowedOrigins = ["https://client1.com", "https://client2.com"];

  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  // Your chatbot logic
}
```

### **2. Rate Limiting**

```typescript
// Add rate limiting for API routes
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limit by IP
  const identifier = request.ip || "anonymous";
  const { success } = await rateLimit(identifier);

  if (!success) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  // Your chatbot logic
}
```

## 🚀 **Scaling Strategy**

### **Phase 1: Free Tier (0-10 clients)**

- Vercel Free: 100GB bandwidth
- MongoDB Atlas Free: 512MB storage
- **Cost: $5-20/month** (OpenAI API only)

### **Phase 2: Pro Tier (10-50 clients)**

- Vercel Pro: $20/month
- MongoDB Atlas Shared: $9/month
- **Cost: $34-49/month**

### **Phase 3: Scale (50+ clients)**

- Vercel Pro: $20/month
- MongoDB Atlas Dedicated: $57/month
- **Cost: $77/month**

## ✅ **Deployment Checklist**

- [ ] Repository pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Database schema deployed
- [ ] Sample data created
- [ ] Platform URL working
- [ ] Demo chatbot tested
- [ ] API endpoints working
- [ ] Client widget code ready
- [ ] Analytics enabled

## 🎉 **Success!**

Your AI chatbot platform is now live at:

```
https://your-project.vercel.app
```

**Next steps:**

1. Test with your own website
2. Start onboarding clients
3. Monitor performance
4. Scale as needed

Vercel provides the perfect hosting solution for your Next.js AI chatbot platform with zero configuration and excellent performance!
