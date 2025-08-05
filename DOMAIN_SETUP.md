# Domain Setup Guide

## Using Your Existing Cloudflare Domain with Vercel

### 🎯 **Recommended Setup: Subdomain Approach**

```
yourdomain.com (Cloudflare) → Main website
chat.yourdomain.com (Vercel) → AI Chatbot Platform
```

## 🚀 **Step-by-Step Setup**

### **Step 1: Deploy to Vercel**

1. **Push your code to GitHub**

```bash
git add .
git commit -m "Add domain configuration"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [Vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy (get URL like `https://your-project.vercel.app`)

### **Step 2: Add Custom Domain in Vercel**

1. **Go to Vercel Dashboard**

   - Select your project
   - Click **Settings → Domains**

2. **Add Custom Domain**

   - Enter: `chat.yourdomain.com`
   - Click **Add**

3. **Vercel will show DNS instructions**
   - Note the DNS records you need to add

### **Step 3: Configure Cloudflare DNS**

In your Cloudflare dashboard:

1. **Go to DNS Settings**

   - Select your domain
   - Click **DNS → Records**

2. **Add CNAME Record**

   ```
   Type: CNAME
   Name: chat
   Target: cname.vercel-dns.com
   Proxy status: DNS only (gray cloud)
   TTL: Auto
   ```

3. **Save the record**

### **Step 4: Wait for DNS Propagation**

- DNS changes can take 5-30 minutes
- Vercel will show "Valid Configuration" when ready

### **Step 5: Test Your Setup**

1. **Visit your subdomain**

   ```
   https://chat.yourdomain.com
   ```

2. **Test the chatbot platform**
   - Landing page: `https://chat.yourdomain.com`
   - Demo: `https://chat.yourdomain.com/demo`
   - Dashboard: `https://chat.yourdomain.com/dashboard`

## 🔧 **Alternative: Subdirectory Setup**

If you prefer everything under your main domain:

### **Step 1: Configure Vercel Rewrites**

Your `vercel.json` is already configured for this.

### **Step 2: Set Up Cloudflare Page Rules**

1. **Go to Cloudflare Dashboard**

   - Select your domain
   - Click **Rules → Page Rules**

2. **Create Page Rule**

   ```
   URL: yourdomain.com/chatbot/*
   Settings: Forwarding URL (301 Redirect)
   Destination: https://your-project.vercel.app/*
   ```

3. **Save the rule**

### **Step 3: Test Subdirectory Access**

Visit: `https://yourdomain.com/chatbot`

## 🎯 **Client Integration**

### **Subdomain Approach**

```html
<!-- Clients add this to their websites -->
<script src="https://chat.yourdomain.com/chatbot-widget.js"></script>
<div
  id="chatbot-widget"
  data-chatbot-id="CLIENT_UNIQUE_ID"
  data-business-name="Client Business Name"
></div>
```

### **Subdirectory Approach**

```html
<!-- Clients add this to their websites -->
<script src="https://yourdomain.com/chatbot/chatbot-widget.js"></script>
<div
  id="chatbot-widget"
  data-chatbot-id="CLIENT_UNIQUE_ID"
  data-business-name="Client Business Name"
></div>
```

## 🔒 **SSL Certificate**

- **Vercel automatically provides SSL** for your custom domain
- **Cloudflare SSL** will work seamlessly
- **No additional configuration needed**

## 📊 **Analytics Setup**

### **Vercel Analytics**

1. **Enable in Vercel dashboard**
2. **Track usage at** `https://chat.yourdomain.com`

### **Cloudflare Analytics**

- **Continue using Cloudflare Analytics** for your main site
- **Vercel Analytics** for chatbot platform metrics

## 🎯 **Benefits of This Setup**

✅ **No new domain needed** - Uses your existing domain  
✅ **Professional appearance** - Dedicated subdomain for service  
✅ **Easy maintenance** - Update chatbot independently  
✅ **SEO friendly** - Subdomain can be indexed separately  
✅ **Cost effective** - No additional domain costs  
✅ **Brand consistency** - Matches your existing brand

## 🚀 **Final URLs**

After setup, you'll have:

```
Main Website: https://yourdomain.com (Cloudflare)
Chatbot Platform: https://chat.yourdomain.com (Vercel)
Demo: https://chat.yourdomain.com/demo
Dashboard: https://chat.yourdomain.com/dashboard
API: https://chat.yourdomain.com/api/chat
```

## ✅ **Setup Checklist**

- [ ] Deploy to Vercel
- [ ] Add custom domain in Vercel
- [ ] Configure Cloudflare DNS (CNAME record)
- [ ] Wait for DNS propagation
- [ ] Test subdomain access
- [ ] Update client widget codes
- [ ] Test chatbot functionality
- [ ] Configure analytics

## 🎉 **Success!**

Your AI chatbot platform is now live at:

```
https://chat.yourdomain.com
```

**Next steps:**

1. Test the platform thoroughly
2. Update your main website to link to the chatbot service
3. Start onboarding clients with the new subdomain
4. Monitor performance and analytics

This setup gives you a professional, branded chatbot service using your existing domain infrastructure!
