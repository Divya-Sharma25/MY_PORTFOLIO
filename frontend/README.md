# Divya Sharma - Portfolio Website

A modern, professional portfolio website built with React and designed for deployment on Vercel, Netlify, or GitHub Pages.

## 🌟 Features

- **Modern Design**: Glassmorphism effects with soft gradient backgrounds
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive**: Smooth animations and hover effects
- **Performance**: Optimized for fast loading and smooth user experience
- **Professional**: Ready for job applications and professional networking

## 🚀 Quick Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install
# or
yarn install

# Start development server
npm start
# or
yarn start
```

## 📝 Customization Guide

### 1. Personal Information
Edit `/src/data/mock.js` to update:
- About section content
- Project details and GitHub links
- Education and experience
- Skills and certifications
- Contact information

### 2. Certificate Links
Replace placeholder certificate links with actual Google Drive file URLs:
```javascript
// In mock.js, replace CERTIFICATE_ID_X with actual file IDs
link: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view"
```

### 3. Resume Link
Update the resume link with your direct PDF URL:
```javascript
resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view"
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy automatically on git push

### Netlify
1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
3. Run: `npm run deploy`

## 🔧 Performance Optimizations

- **Image Optimization**: Lazy loading for all images
- **Bundle Splitting**: Automatic code splitting with React
- **CSS Optimization**: Tailwind CSS with purging
- **Animation Performance**: GPU-accelerated transforms
- **Lighthouse Score**: Optimized for 90+ scores

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for professional success**

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
