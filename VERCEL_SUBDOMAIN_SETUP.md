# Vercel Subdomain Setup Guide

## Deploy Your AI Chatbot Platform to Vercel with Custom Subdomain

### 🎯 **What We're Building**

```
yourdomain.com (Cloudflare) → Main website
chat.yourdomain.com (Vercel) → AI Chatbot Platform
```

## 🚀 **Step 1: Prepare Your Repository**

### **1.1 Install Git (if not already installed)**

Download from: https://git-scm.com/download/win

### **1.2 Initialize Git Repository**

```bash
cd "D:\AutomateHub Studio\ChatBots"
git init
git add .
git commit -m "Initial AI chatbot platform"
```

### **1.3 Create GitHub Repository**

1. Go to [GitHub.com](https://github.com)
2. Click **"New repository"**
3. Repository name: `ai-chatbot-platform`
4. **Make it Public** (required for free Vercel)
5. Click **"Create repository"**

### **1.4 Push to GitHub**

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-chatbot-platform.git
git branch -M main
git push -u origin main
```

## 🎯 **Step 2: Deploy to Vercel**

### **2.1 Create Vercel Account**

1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### **2.2 Import Your Project**

1. Click **"New Project"**
2. Find your `ai-chatbot-platform` repository
3. Click **"Import"**

### **2.3 Configure Project Settings**

```
Framework Preset: Next.js
Root Directory: ./
Build Command: next build
Output Directory: .next
Install Command: npm install
```

### **2.4 Deploy**

1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. You'll get a URL like: `https://ai-chatbot-platform-xxxxx.vercel.app`

## ⚙️ **Step 3: Configure Environment Variables**

### **3.1 Go to Vercel Dashboard**

1. Click on your project
2. Go to **Settings → Environment Variables**

### **3.2 Add Required Variables**

Add these one by one:

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

### **3.3 Redeploy**

1. Go to **Deployments**
2. Click **"Redeploy"** on your latest deployment

## 🌐 **Step 4: Add Custom Domain**

### **4.1 Add Domain in Vercel**

1. Go to **Settings → Domains**
2. Click **"Add Domain"**
3. Enter: `chat.yourdomain.com`
4. Click **"Add"**

### **4.2 Vercel Will Show DNS Instructions**

You'll see something like:

```
Type: CNAME
Name: chat
Value: cname.vercel-dns.com
```

## 🔧 **Step 5: Configure Cloudflare DNS**

### **5.1 Go to Cloudflare Dashboard**

1. Login to [Cloudflare.com](https://cloudflare.com)
2. Select your domain
3. Go to **DNS → Records**

### **5.2 Add CNAME Record**

Click **"Add record"** and configure:

```
Type: CNAME
Name: chat
Target: cname.vercel-dns.com
Proxy status: DNS only (gray cloud)
TTL: Auto
```

### **5.3 Save the Record**

Click **"Save"**

## ⏳ **Step 6: Wait for DNS Propagation**

- DNS changes take 5-30 minutes
- Vercel will show **"Valid Configuration"** when ready
- You can check status in Vercel dashboard

## 🧪 **Step 7: Test Your Setup**

### **7.1 Test Subdomain**

Visit: `https://chat.yourdomain.com`

### **7.2 Test Platform Features**

- Landing page: `https://chat.yourdomain.com`
- Demo: `https://chat.yourdomain.com/demo`
- Dashboard: `https://chat.yourdomain.com/dashboard`

### **7.3 Test API Endpoint**

You can test the API with a tool like Postman or curl:

```bash
curl -X POST https://chat.yourdomain.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","chatbotId":"test"}'
```

## 🔧 **Step 8: Set Up Database**

### **8.1 MongoDB Atlas Setup**

1. Follow the `MONGODB_SETUP.md` guide
2. Get your connection string
3. Update the `DATABASE_URL` in Vercel

### **8.2 Deploy Database Schema**

```bash
# In your local project directory
npx prisma generate
npx prisma db push
npm run setup-db
```

## 🎯 **Step 9: Update Client Widget Code**

Your clients will now use:

```html
<script src="https://chat.yourdomain.com/chatbot-widget.js"></script>
<div
  id="chatbot-widget"
  data-chatbot-id="CLIENT_UNIQUE_ID"
  data-business-name="Client Business Name"
></div>
```

## 📊 **Step 10: Enable Analytics**

### **10.1 Vercel Analytics**

1. Go to **Settings → Analytics**
2. Click **"Enable Analytics"**
3. Add tracking code to your app

### **10.2 Monitor Performance**

- Track page views at `https://chat.yourdomain.com`
- Monitor API usage
- Check deployment status

## ✅ **Final Checklist**

- [ ] Git repository created and pushed to GitHub
- [ ] Vercel project deployed successfully
- [ ] Environment variables configured
- [ ] Custom domain added in Vercel
- [ ] DNS record added in Cloudflare
- [ ] DNS propagation completed
- [ ] Subdomain accessible at `https://chat.yourdomain.com`
- [ ] Platform features tested
- [ ] Database connected and schema deployed
- [ ] Analytics enabled
- [ ] Client widget code updated

## 🎉 **Success!**

Your AI chatbot platform is now live at:

```
https://chat.yourdomain.com
```

### **Your Platform URLs:**

- **Main Platform**: https://chat.yourdomain.com
- **Demo**: https://chat.yourdomain.com/demo
- **Dashboard**: https://chat.yourdomain.com/dashboard
- **API**: https://chat.yourdomain.com/api/chat

### **Next Steps:**

1. Test all features thoroughly
2. Set up your first client chatbot
3. Update your main website to link to the chatbot service
4. Start marketing your AI chatbot platform
5. Monitor performance and scale as needed

## 🔧 **Troubleshooting**

### **DNS Not Working?**

- Wait 30 minutes for propagation
- Check Cloudflare DNS settings
- Verify CNAME record is correct

### **Build Errors?**

- Check environment variables in Vercel
- Verify all dependencies are in package.json
- Check Vercel build logs

### **API Not Working?**

- Verify MongoDB connection string
- Check OpenAI API key
- Test locally first

Your AI chatbot platform is now professionally deployed with your own subdomain!
