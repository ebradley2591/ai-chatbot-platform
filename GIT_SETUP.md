# Git Setup Guide

## Initialize Git Repository for Vercel Deployment

### Step 1: Install Git

Download and install Git from: https://git-scm.com/download/win

### Step 2: Open Command Prompt/PowerShell

Navigate to your project directory:

```bash
cd "D:\AutomateHub Studio\ChatBots"
```

### Step 3: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial AI chatbot platform"
```

### Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `ai-chatbot-platform`
4. Make it **Public** (required for free Vercel deployment)
5. Don't initialize with README (you already have one)

### Step 5: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-chatbot-platform.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 6: Verify Setup

```bash
git status
```

You should see "working tree clean" if everything is set up correctly.

## Next Steps

After completing this Git setup, proceed to the Vercel deployment guide.
