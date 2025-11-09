# Google Search Console Setup Guide

## ✅ Current Status

Your website is already configured with Google Search Console integration!

### What's Already Set Up:

1. **Verification Meta Tag** ✅
   - Verification ID: `orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M`
   - Location: `src/config.yaml`
   - Component: `src/components/common/SiteVerification.astro`
   - Status: Automatically injected into all pages

2. **Sitemap** ✅
   - Auto-generated via `@astrojs/sitemap`
   - Location: `https://iptvsmarters.cx/sitemap-index.xml`
   - Status: Automatically updated on each build

## 📋 Next Steps After Deployment

### Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Enter your domain: `https://iptvsmarters.cx`
4. Select **"URL prefix"** method

### Step 2: Verify Your Website

Since the verification meta tag is already in your HTML, Google will automatically detect it:

1. In Google Search Console, click **"Verify"**
2. Google will check for the meta tag: `<meta name="google-site-verification" content="orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M" />`
3. If the meta tag is found, verification will succeed automatically
4. If verification fails, you may need to get a new verification code

### Step 3: Get New Verification Code (If Needed)

If the existing verification code doesn't work for the new domain:

1. In Google Search Console, click **"Verify"**
2. Select **"HTML tag"** method
3. Copy the new verification code (the content value)
4. Update `src/config.yaml`:
   ```yaml
   googleSiteVerificationId: YOUR_NEW_VERIFICATION_CODE
   ```
5. Rebuild and redeploy your site
6. Click **"Verify"** again in Google Search Console

### Step 4: Submit Sitemap

After verification:

1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `sitemap-index.xml`
3. Click **"Submit"**
4. Google will start crawling your site

### Step 5: Monitor Your Site

After submitting the sitemap:

1. Check **"Coverage"** to see indexed pages
2. Monitor **"Performance"** for search analytics
3. Check **"Enhancements"** for any issues
4. Review **"Mobile Usability"** reports

## 🔍 Verification Methods

Your site supports the **HTML meta tag** method, which is already configured. The verification tag is automatically added to all pages via the `SiteVerification` component.

## 📊 What Gets Tracked

Once verified, Google Search Console will track:
- ✅ Indexed pages
- ✅ Search queries
- ✅ Click-through rates
- ✅ Average position in search results
- ✅ Impressions
- ✅ Coverage issues
- ✅ Mobile usability
- ✅ Core Web Vitals

## 🚀 Quick Checklist

- [x] Verification meta tag configured
- [x] Sitemap auto-generation enabled
- [ ] Deploy website to production
- [ ] Add property in Google Search Console
- [ ] Verify website ownership
- [ ] Submit sitemap (`sitemap-index.xml`)
- [ ] Monitor indexing status
- [ ] Check for any errors or warnings

## 📝 Notes

- The verification meta tag is automatically included in the `<head>` of all pages
- The sitemap is automatically generated on each build
- You don't need to manually update the verification tag unless you get a new code
- Verification typically takes a few minutes to a few hours

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Sitemap Documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Site Verification Methods](https://support.google.com/webmasters/answer/9008080)

---

**Current Configuration:**
- Domain: `https://iptvsmarters.cx`
- Verification ID: `orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M`
- Sitemap: Auto-generated at `/sitemap-index.xml`

