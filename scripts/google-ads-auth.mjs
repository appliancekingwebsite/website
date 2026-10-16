#!/usr/bin/env node

/**
 * Google Ads OAuth 2.0 Authentication Script
 * 
 * This script will:
 * 1. Open a browser for OAuth 2.0 consent flow
 * 2. Generate and save refresh token
 * 3. Test connection to Google Ads API
 * 
 * Prerequisites:
 * 1. Create a Google Cloud Console project at https://console.cloud.google.com
 * 2. Enable Google Ads API for your project
 * 3. Create OAuth 2.0 credentials (Desktop application)
 * 4. Add your credentials to .env file
 */

import { OAuth2Client } from 'google-auth-library';
import { google } from 'googleapis';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
function loadEnv() {
  const envPath = join(__dirname, '..', '.env');
  if (!existsSync(envPath)) {
    console.error('❌ .env file not found. Please create it based on .env.example');
    process.exit(1);
  }
  
  const envContent = readFileSync(envPath, 'utf-8');
  const envVars = {};
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && !key.startsWith('#')) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  });
  return envVars;
}

async function authenticate() {
  console.log('🔐 Google Ads OAuth 2.0 Authentication\n');
  
  const env = loadEnv();
  
  // Check for required credentials
  const clientId = env.GOOGLE_ADS_CLIENT_ID;
  const clientSecret = env.GOOGLE_ADS_CLIENT_SECRET;
  const developerToken = env.GOOGLE_ADS_DEVELOPER_TOKEN;
  
  if (!clientId || !clientSecret) {
    console.error('❌ Missing OAuth credentials in .env file');
    console.error('\nRequired environment variables:');
    console.error('  GOOGLE_ADS_CLIENT_ID=<your OAuth client ID>');
    console.error('  GOOGLE_ADS_CLIENT_SECRET=<your OAuth client secret>');
    console.error('  GOOGLE_ADS_DEVELOPER_TOKEN=<your developer token>');
    console.error('\nTo get these credentials:');
    console.error('  1. Go to https://console.cloud.google.com');
    console.error('  2. Create a new project or select existing');
    console.error('  3. Enable Google Ads API');
    console.error('  4. Go to APIs & Services > Credentials');
    console.error('  5. Create OAuth 2.0 Client ID (Desktop application)');
    console.error('  6. Copy Client ID and Client Secret to .env');
    console.error('  7. Get developer token from https://ads.google.com/aw/apicenter');
    process.exit(1);
  }
  
  if (!developerToken) {
    console.error('❌ Missing GOOGLE_ADS_DEVELOPER_TOKEN in .env file');
    console.error('  Get your developer token from: https://ads.google.com/aw/apicenter');
    process.exit(1);
  }
  
  // Create OAuth2 client
  const oauth2Client = new OAuth2Client(
    clientId,
    clientSecret,
    'urn:ietf:wg:oauth:2.0:oob' // Out-of-band (copy-paste) flow
  );
  
  // Generate authorization URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/adwords',
      'https://www.googleapis.com/auth/userinfo.email'
    ],
    prompt: 'consent'
  });
  
  console.log('📋 Step 1: Authorize the application');
  console.log('----------------------------------------');
  console.log('1. Open this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n2. Sign in with your Google account');
  console.log('3. Grant permission to access Google Ads');
  console.log('4. Copy the authorization code from the browser\n');
  
  // Prompt for authorization code
  import readline from 'readline';
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const code = await new Promise(resolve => {
    rl.question('🔑 Enter the authorization code: ', resolve);
  });
  
  rl.close();
  
  if (!code) {
    console.error('❌ No authorization code provided');
    process.exit(1);
  }
  
  console.log('\n🔄 Step 2: Exchanging code for tokens...');
  
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    
    console.log('✅ Authentication successful!');
    console.log('\n📝 Step 3: Saving credentials...');
    
    // Save refresh token to .env
    const envPath = join(__dirname, '..', '.env');
    let envContent = readFileSync(envPath, 'utf-8');
    
    if (tokens.refresh_token) {
      const refreshTokenLine = `GOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}`;
      
      if (envContent.includes('GOOGLE_ADS_REFRESH_TOKEN=')) {
        envContent = envContent.replace(
          /GOOGLE_ADS_REFRESH_TOKEN=.*/,
          refreshTokenLine
        );
      } else {
        envContent += `\n${refreshTokenLine}`;
      }
      
      writeFileSync(envPath, envContent);
      console.log('✅ Refresh token saved to .env');
    }
    
    console.log('\n🧪 Step 4: Testing Google Ads API connection...');
    
    // Test connection using Google Ads API
    const ads = google.ads({
      version: 'v16',
      auth: oauth2Client
    });
    
    try {
      // Try to get accessible accounts
      const response = await ads.customers.listAccessibleCustomers();
      console.log('✅ Successfully connected to Google Ads API!');
      console.log('\n📊 Accessible Google Ads accounts:');
      
      if (response.data.resourceNames) {
        response.data.resourceNames.forEach(account => {
          console.log(`  - ${account}`);
        });
      }
      
      console.log('\n🎉 Setup complete! You can now use Google Ads API.');
      
    } catch (apiError) {
      console.warn('⚠️  Could not list accounts (this is normal if you have no access):');
      console.warn(`   ${apiError.message}`);
      console.log('\n✅ Authentication successful, but account access check failed.');
      console.log('   This is normal if you have no Google Ads accounts or limited access.');
    }
    
  } catch (error) {
    console.error('❌ Authentication failed:', error.message);
    console.error('\nTroubleshooting:');
    console.error('  - Make sure you copied the authorization code correctly');
    console.error('  - Check that your OAuth credentials are correct');
    console.error('  - Ensure Google Ads API is enabled in your Google Cloud project');
    process.exit(1);
  }
}

authenticate().catch(console.error);
