# TradeLite Pro - Frontend Deployment Guide

This guide provides detailed instructions for deploying the TradeLite Pro frontend to Vercel.

## Prerequisites

- GitHub repository with the TradeLite Pro code
- Vercel account (can be created with GitHub login)
- Supabase account and API keys

## Deployment Steps

1. **Push code to GitHub**
   - Create a new GitHub repository
   - Push your code to the repository using the following commands:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
     git branch -M main
     git push -u origin main
     ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/
   - Sign in with your GitHub account
   - Click "Add New" → "Project"
   - Select your "tradelite-pro" repository
   - Configure the project:
     - Set the Root Directory to "frontend"
     - Set the Build Command to "npm run build"
     - Set the Output Directory to ".next"
   - Add the following environment variables:
     - NEXT_PUBLIC_SUPABASE_URL
     - NEXT_PUBLIC_SUPABASE_ANON_KEY
     - NEXT_PUBLIC_API_URL (your backend URL after deployment)
   - Click "Deploy"

3. **Verify Deployment**
   - Once deployed, Vercel will provide a URL for your frontend application
   - Test the application by visiting the provided URL
   - Verify that authentication and other features are working correctly

## Custom Domain (Optional)

To add a custom domain to your Vercel deployment:

1. Go to your project in the Vercel dashboard
2. Click on "Domains"
3. Add your custom domain and follow the verification steps
4. Update DNS settings as instructed by Vercel

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository:

- Any push to the main branch will trigger a new deployment
- Pull request previews are automatically generated
- You can configure deployment settings in the Vercel dashboard

## Troubleshooting

- Check Vercel build logs if deployment fails
- Verify all environment variables are correctly set
- Ensure the project structure is correct with the frontend code in the "frontend" directory
- Make sure all API keys are valid
