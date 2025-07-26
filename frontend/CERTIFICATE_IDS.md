# 📋 Certificate File ID Mapping Guide

To complete the certificate integration, you need to replace the placeholder `FILE_ID_X` values with actual Google Drive file IDs for each certificate.

## 🔍 How to Find Google Drive File IDs

### Method 1: From Google Drive Web Interface
1. Go to your certificates folder: https://drive.google.com/drive/folders/14RAtlEl0-zBc2KHE5d3h0ZtWFx4ZmLkE
2. Right-click on each PDF file
3. Select "Get link" or "Share"
4. Copy the shareable link - it will look like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
5. Extract the FILE_ID from between `/d/` and `/view`

### Method 2: From URL Bar
1. Double-click to open any PDF in Google Drive
2. Look at the URL in your browser
3. Copy the file ID from the URL structure

## 📝 Certificate File ID Mapping

Based on your certificate names, here's what you need to update in `/src/data/mock.js`:

```javascript
// Replace these FILE_ID placeholders with actual IDs:

"AR/VR Certificate of Appreciation – Unity" → FILE_ID_1
"Unity AR/VR Training Program" → FILE_ID_2  
"Organizer – Dive into Metaverse" → FILE_ID_3
"Finalist – Smart India Hackathon" → FILE_ID_4 (Smart_India_Hackathon.pdf)
"2nd Place – VR Competition, Manak Mahotsav" → FILE_ID_5 (Manak_Mahotsav.pdf)
"3rd Place – Brain Teaser, Maestros" → FILE_ID_6
"Summer Training – Data Analytics using Python" → FILE_ID_7
"Quantum Quest Technical Quiz" → FILE_ID_8
"National Technology Day – Declamation Competition" → FILE_ID_9
```

## ✅ Current Status

- ✅ **Resume Link**: Updated with your provided link
- ⏳ **Certificate Links**: Ready for your file IDs (structure is set up correctly)

## 🔧 Quick Update Process

1. Find each certificate file ID from Google Drive
2. In `/src/data/mock.js`, replace each `FILE_ID_X` with the actual file ID
3. Save the file
4. Test by clicking each certificate card

## 📋 Example Update

```javascript
// BEFORE (placeholder):
link: "https://drive.google.com/file/d/FILE_ID_4/view?usp=drive_link"

// AFTER (with actual file ID):
link: "https://drive.google.com/file/d/1ABcD2EfGh3IjKl4MnOpQr5StUv6WxYz/view?usp=drive_link"
```

Once you update all the file IDs, each certificate card will open the correct PDF in a new tab! 🎯