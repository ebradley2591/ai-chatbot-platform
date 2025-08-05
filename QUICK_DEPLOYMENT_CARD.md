# 🚀 Quick Deployment Reference Card

## Essential Steps for Vercel Subdomain Setup

### **📋 Pre-Deployment Checklist**

- [ ] Git installed on your computer
- [ ] GitHub account created
- [ ] MongoDB Atlas account ready
- [ ] OpenAI API key ready
- [ ] Your domain name ready

### **⚡ Quick Commands**

```bash
# 1. Initialize Git
cd "D:\AutomateHub Studio\ChatBots"
git init
git add .
git commit -m "Initial AI chatbot platform"

# 2. Create GitHub repo (manually on GitHub.com)
# Name: ai-chatbot-platform (PUBLIC)

# 3. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/ai-chatbot-platform.git
git branch -M main
git push -u origin main
```

### **🌐 Vercel Deployment**

1. Go to [Vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "New Project" → Import your repository
3. Deploy (get URL like `https://ai-chatbot-platform-xxxxx.vercel.app`)

### **⚙️ Environment Variables**

In Vercel Dashboard → Settings → Environment Variables:

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

### **🔗 Custom Domain Setup**

1. **Vercel**: Settings → Domains → Add `chat.yourdomain.com`
2. **Cloudflare**: DNS → Add CNAME record:
   ```
   Type: CNAME
   Name: chat
   Target: cname.vercel-dns.com
   Proxy: DNS only (gray cloud)
   ```

### **⏳ Wait & Test**

- Wait 5-30 minutes for DNS propagation
- Test: `https://chat.yourdomain.com`
- Test demo: `https://chat.yourdomain.com/demo`

### **🎯 Final Result**

```
Main Website: https://yourdomain.com (Cloudflare)
Chatbot Platform: https://chat.yourdomain.com (Vercel)
```

### **📞 Client Widget Code**

```html
<script src="https://chat.yourdomain.com/chatbot-widget.js"></script>
<div id="chatbot-widget" data-chatbot-id="CLIENT_UNIQUE_ID"></div>
```

## 🎉 Success!

Your AI chatbot platform is now live with your own subdomain!
