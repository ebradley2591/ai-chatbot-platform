# MongoDB Atlas Setup Guide

## Free Database Setup for AI Chatbot Platform

### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create account
3. Choose "Free" tier (M0 Sandbox)

### Step 2: Create Database Cluster

1. Choose cloud provider (AWS/Google Cloud/Azure)
2. Select region closest to your users
3. Click "Create Cluster"

### Step 3: Set Up Database Access

1. Go to "Database Access" → "Add New Database User"
2. Create username/password (save these!)
3. Select "Read and write to any database"

### Step 4: Set Up Network Access

1. Go to "Network Access" → "Add IP Address"
2. For development: Click "Allow Access from Anywhere" (0.0.0.0/0)
3. For production: Add your Vercel IP ranges

### Step 5: Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your actual password

### Step 6: Update Environment Variables

Add to your `.env` file:

```
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/chatbot-platform?retryWrites=true&w=majority"
```

### Step 7: Update Prisma Schema

Change your `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

### Step 8: Generate Prisma Client

```bash
npx prisma generate
npx prisma db push
```

## Cost Comparison

| Service       | Free Tier             | Paid Plans        |
| ------------- | --------------------- | ----------------- |
| MongoDB Atlas | 512MB, shared cluster | $9/month for 2GB  |
| Cloudflare D1 | 500MB, 100K ops/day   | $5/month for 1GB  |
| Supabase      | 500MB, 50K rows       | $25/month for 8GB |

## Migration Path

1. **Pilot Phase**: MongoDB Atlas Free (0-10 clients)
2. **Growth Phase**: MongoDB Atlas Shared ($9/month, 10-50 clients)
3. **Scale Phase**: MongoDB Atlas Dedicated ($57/month, 50+ clients)

## Benefits for Your Use Case

- **Conversation History**: MongoDB's document structure perfect for chat logs
- **Analytics Data**: Flexible schema for tracking metrics
- **Multi-tenant**: Easy to separate client data
- **Scalability**: Can handle thousands of concurrent chats
- **Cost-effective**: Free tier covers pilot phase completely

## Next Steps

1. Set up MongoDB Atlas account
2. Update your `.env` file with connection string
3. Modify Prisma schema for MongoDB
4. Test locally with `npm run dev`
5. Deploy to Vercel with MongoDB connection

This setup will keep your costs at $0 during the pilot phase while providing a solid foundation for scaling!
