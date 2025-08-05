# 🚀 Deployment Guide

## Quick Start

### 1. Local Development Setup

```bash
# Clone and install dependencies
git clone <your-repo>
cd ChatBots
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your actual values

# Set up database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### 2. Production Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Set environment variables in Vercel dashboard
# Add all variables from .env.local
```

### 3. Database Setup

#### Option A: Supabase (Recommended)

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings > Database
4. Update `DATABASE_URL` in environment variables

#### Option B: PlanetScale

1. Create account at [planetscale.com](https://planetscale.com)
2. Create new database
3. Get connection string
4. Update `DATABASE_URL`

### 4. OpenAI Setup

1. Create account at [openai.com](https://openai.com)
2. Generate API key
3. Add to environment variables as `OPENAI_API_KEY`

### 5. Stripe Setup

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. Add to environment variables:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_PUBLISHABLE_KEY`

---

## Environment Variables

### Required Variables

```env
# Database
DATABASE_URL="postgresql://..."

# OpenAI
OPENAI_API_KEY="sk-..."

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# App
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"
```

### Optional Variables

```env
# Email (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Analytics
GOOGLE_ANALYTICS_ID="G-..."
```

---

## Domain & SSL Setup

### Custom Domain (Vercel)

1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificate is automatically provisioned

### Alternative: Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

---

## Monitoring & Analytics

### Performance Monitoring

- **Vercel Analytics**: Built-in with Vercel
- **Google Analytics**: Add tracking code
- **Sentry**: Error tracking and monitoring

### Health Checks

- Set up uptime monitoring (UptimeRobot)
- Configure error alerts
- Monitor API rate limits

---

## Security Checklist

### Environment Security

- [ ] All API keys are in environment variables
- [ ] Database connection uses SSL
- [ ] Stripe webhook signature verification
- [ ] Rate limiting on API endpoints

### Data Protection

- [ ] GDPR compliance for EU customers
- [ ] Data encryption at rest
- [ ] Regular database backups
- [ ] Privacy policy and terms of service

---

## Scaling Considerations

### Performance Optimization

- **CDN**: Vercel Edge Network
- **Caching**: Redis for session storage
- **Database**: Connection pooling
- **Images**: Next.js Image optimization

### Infrastructure Scaling

- **Auto-scaling**: Vercel handles this
- **Database**: Upgrade plan as needed
- **Monitoring**: Set up alerts for usage spikes

---

## Backup & Recovery

### Database Backups

```bash
# Automated backups (Supabase)
# Built-in with Supabase Pro plan

# Manual backup
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql
```

### Code Backups

- **Git**: All code in version control
- **Environment**: Document all configurations
- **Secrets**: Use secure secret management

---

## Troubleshooting

### Common Issues

#### Database Connection

```bash
# Test connection
npx prisma db pull

# Reset database
npx prisma db push --force-reset
```

#### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build

# Check TypeScript
npx tsc --noEmit
```

#### Environment Variables

```bash
# Verify in Vercel
vercel env ls

# Update variables
vercel env add VARIABLE_NAME
```

---

## Post-Deployment Checklist

### Functionality Testing

- [ ] Landing page loads correctly
- [ ] Demo chatbot works
- [ ] Contact forms submit
- [ ] Payment integration works
- [ ] Dashboard access works

### Performance Testing

- [ ] Page load times < 3 seconds
- [ ] Mobile responsiveness
- [ ] SEO meta tags
- [ ] Social media previews

### Security Testing

- [ ] HTTPS redirects work
- [ ] API endpoints protected
- [ ] No sensitive data exposed
- [ ] Rate limiting active

---

## Maintenance

### Regular Tasks

- **Weekly**: Check error logs
- **Monthly**: Update dependencies
- **Quarterly**: Security audit
- **Annually**: Performance review

### Updates

```bash
# Update dependencies
npm update

# Update Prisma
npx prisma update

# Deploy updates
vercel --prod
```

---

## Support Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://prisma.io/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Stripe Docs](https://stripe.com/docs)

### Community

- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js Discord](https://discord.gg/nextjs)
- [Prisma Discord](https://discord.gg/prisma)

---

## Emergency Procedures

### Service Outage

1. Check Vercel status page
2. Verify environment variables
3. Check database connectivity
4. Review recent deployments

### Data Loss

1. Restore from latest backup
2. Verify data integrity
3. Update security measures
4. Document incident

### Security Breach

1. Rotate all API keys
2. Review access logs
3. Update security measures
4. Notify affected users

---

This deployment guide ensures your AI chatbot business platform is properly configured, secure, and ready for production use.
