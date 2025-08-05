# 🔧 Integration Guide for AutomateHub Studio Website

## 🎯 **Quick Integration (5 minutes)**

### **Step 1: Add Widget Script to Your Website**

Add this single line to your existing website's HTML file (`index.html`):

```html
<!-- Add this before the closing </body> tag in your index.html -->
<script src="https://your-deployed-domain.com/chatbot-widget.js"></script>
```

### **Step 2: Customize for Your Business**

The widget will automatically use these settings for AutomateHub Studio:

- **Business Name**: AutomateHub Studio
- **Description**: Modern automation solutions for Microsoft 365
- **Primary Color**: #1e40af (your brand blue)
- **Quick Questions**: Pre-configured for your services

---

## 🚀 **Advanced Integration Options**

### **Option 1: React Component (If using React)**

Since your website appears to be React-based, you can import the widget component:

```jsx
// In your main App component or layout
import ChatbotWidget from "./components/ChatbotWidget";

function App() {
  return (
    <div>
      {/* Your existing website content */}

      {/* Add the chatbot widget */}
      <ChatbotWidget
        businessName="AutomateHub Studio"
        businessDescription="Modern automation solutions for SharePoint, Teams, and Microsoft 365"
        primaryColor="#1e40af"
        position="bottom-right"
        welcomeMessage="Hello! I'm your AI assistant. How can I help you with Microsoft 365 automation today?"
        apiEndpoint="https://your-deployed-domain.com/api/chat"
      />
    </div>
  );
}
```

### **Option 2: Custom Widget Configuration**

If you want to customize the widget further, modify the script:

```javascript
// In the chatbot-widget.js file, update these settings:
const config = {
  businessName: "AutomateHub Studio",
  businessDescription:
    "Modern automation solutions for SharePoint, Teams, and Microsoft 365",
  primaryColor: "#1e40af", // Your brand color
  position: "bottom-right",
  welcomeMessage:
    "Hello! I'm your AI assistant. How can I help you with Microsoft 365 automation today?",
  apiEndpoint: "https://your-deployed-domain.com/api/chat",
  quickQuestions: [
    "What SharePoint automation services do you offer?",
    "How can you help with Microsoft Teams?",
    "What are your pricing options?",
    "Can you help with compliance automation?",
    "Do you offer Power Automate solutions?",
  ],
};
```

---

## 🎨 **Branding Customization**

### **Colors**

- **Primary**: #1e40af (your current brand blue)
- **Secondary**: #3b82f6 (lighter blue for accents)
- **Background**: White with subtle shadows

### **Positioning**

- **Default**: Bottom-right corner
- **Alternative**: Bottom-left corner
- **Mobile**: Automatically responsive

### **Styling**

The widget matches your existing website's design:

- Clean, modern interface
- Professional typography
- Smooth animations
- Mobile-friendly

---

## 📱 **Mobile Optimization**

The chatbot widget is fully responsive and works perfectly on:

- **Desktop**: Full-size chat window
- **Tablet**: Optimized layout
- **Mobile**: Compact design with touch-friendly buttons

---

## 🔧 **Technical Integration**

### **File Structure**

```
Your Website/
├── index.html (add script tag here)
├── src/
│   ├── main.tsx
│   └── components/
└── public/
    └── (existing assets)

Chatbot Platform/
├── app/
├── components/
│   └── ChatbotWidget.tsx
├── public/
│   └── chatbot-widget.js
└── (other files)
```

### **API Endpoint**

The chatbot connects to your deployed platform:

```
https://your-deployed-domain.com/api/chat
```

### **CORS Configuration**

The API is configured to accept requests from your domain:

- `https://automatehubstudio.com`
- `https://www.automatehubstudio.com`
- Local development: `http://localhost:3000`

---

## 🧪 **Testing Checklist**

### **Before Going Live**

- [ ] Widget loads on your website
- [ ] Chat button appears in bottom-right corner
- [ ] Clicking button opens chat window
- [ ] Welcome message displays correctly
- [ ] Quick questions are relevant to your business
- [ ] Typing and sending messages works
- [ ] AI responses are helpful and on-brand
- [ ] Works on mobile devices
- [ ] No console errors

### **Test Scenarios**

1. **Basic Functionality**

   - Open chat
   - Send a message
   - Receive AI response
   - Close chat

2. **Quick Questions**

   - Click each quick question
   - Verify responses are relevant
   - Test multiple questions in sequence

3. **Mobile Testing**

   - Test on iPhone/Samsung
   - Verify touch interactions
   - Check responsive design

4. **Performance**
   - Widget loads quickly
   - No impact on page speed
   - Smooth animations

---

## 🎯 **Content Customization**

### **Welcome Message**

```
"Hello! I'm your AI assistant. How can I help you with Microsoft 365 automation today?"
```

### **Quick Questions**

1. "What SharePoint automation services do you offer?"
2. "How can you help with Microsoft Teams?"
3. "What are your pricing options?"
4. "Can you help with compliance automation?"
5. "Do you offer Power Automate solutions?"

### **AI Responses**

The chatbot is trained to respond about:

- SharePoint automation
- Microsoft Teams integration
- Power Automate workflows
- Compliance solutions
- Pricing and packages
- Contact information

---

## 🚀 **Deployment Steps**

### **1. Deploy Chatbot Platform**

```bash
# In the ChatBots directory
vercel
```

### **2. Update Your Website**

Add the script tag to your `index.html`:

```html
<script src="https://your-vercel-domain.vercel.app/chatbot-widget.js"></script>
```

### **3. Test Integration**

- Visit your website
- Test the chatbot
- Verify all functionality

### **4. Go Live**

- Update script URL to production domain
- Test one more time
- Announce to your audience

---

## 📊 **Analytics & Monitoring**

### **What to Track**

- **Engagement**: How many people use the chatbot
- **Questions**: Most common inquiries
- **Conversions**: Leads generated through chat
- **Satisfaction**: User feedback and ratings

### **Monitoring Tools**

- Built-in analytics in the dashboard
- Google Analytics integration
- Custom tracking events

---

## 🎉 **Success Metrics**

### **Week 1 Goals**

- [ ] Widget successfully integrated
- [ ] No technical issues
- [ ] First conversations happening
- [ ] Positive user feedback

### **Month 1 Goals**

- [ ] 50+ conversations per week
- [ ] 5+ leads generated
- [ ] 90%+ user satisfaction
- [ ] First paying client

### **Month 3 Goals**

- [ ] 200+ conversations per week
- [ ] 20+ leads generated
- [ ] 5+ paying clients
- [ ] $1,000+ monthly revenue

---

## 🆘 **Support & Troubleshooting**

### **Common Issues**

#### **Widget Not Loading**

1. Check script URL is correct
2. Verify domain is accessible
3. Check browser console for errors
4. Test on different browsers

#### **Chat Not Responding**

1. Verify API endpoint is working
2. Check OpenAI API key is active
3. Test API directly
4. Check network connectivity

#### **Styling Issues**

1. Check for CSS conflicts
2. Verify z-index values
3. Test on different screen sizes
4. Clear browser cache

### **Getting Help**

- Check the troubleshooting section in `SETUP_GUIDE.md`
- Review browser console for errors
- Test API endpoint directly
- Contact support if needed

---

This integration guide ensures your AI chatbot works seamlessly with your existing AutomateHub Studio website and helps you start generating leads immediately.
