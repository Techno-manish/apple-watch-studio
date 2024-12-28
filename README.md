This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation Instructions

To set up the project locally, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/apple-watch-studio.git
   cd apple-watch-studio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

```
src/
├── app/
│   ├── layout.js          # Wraps the app with Redux provider
│   ├── page.js            # Your main page (or other routes)
│   ├── styles/
│       └── globals.css    # Tailwind global CSS
├── components/            # Your components (e.g., WatchSelector.js)
│   ├── carousel/          # Carousel components
│   ├── ui/                # UI-specific components
├── redux/                 # Redux store and slices
│   ├── store.js           # Redux store setup
│   └── slices/
│       ├── watchSlice.js  # Example slice
│       └── uiSlice.js
├── public/                # Static assets (images, etc.)
├── data/                  # Static data
├── hooks/                 # Custom hooks
├── lib/                   # Utility functions or libraries
├── pages/                 # Legacy pages directory (if used)
└── package.json           # Dependencies and scripts
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# **Apple Watch Studio UI Frontend Development**

### **Objective**

The goal of this project is to create a **pixel-perfect** clone of the Apple Watch Studio experience. The project focuses on replicating the seamless **customization** process demonstrated on [Apple Watch Studio](https://www.apple.com/shop/studio/apple-watch), ensuring that all functionalities and visual details are carefully matched.

---

### **Pages to Clone**

1. **Apple Watch Studio Landing Page**
2. **Apple Watch Customization Workflow**
   - Case Selection
   - Size Selection
   - Band Selection
   - Collection Switching

---

### **Key Features to Implement**

#### **1. Case Selection**

- Implement an interactive grid for available Apple Watch cases in various materials (e.g., Aluminum, Titanium).
- Add hover effects for a sleek and responsive experience.
- Ensure the watch preview updates in real-time based on the selected case.

#### **2. Size Selection**

- Add interactive toggles for selecting watch sizes (e.g., 42mm, 46mm).
- Dynamically update the displayed price and product description based on size selection.

#### **3. Band Selection**

- Create an interactive carousel for scrolling through band options, including various styles and colors.
- Ensure the watch preview dynamically updates based on the selected band.
- Organize band types (e.g., Solo Loop, Braided Solo Loop) for easy selection.

#### **4. Collection Switching**

- Implement a dropdown or modal to switch between different collections (e.g., Series 10, Hermès, SE).
- Ensure smooth transitions between collections, updating relevant options dynamically.

#### **5. Real-Time Price Updates**

- Dynamically calculate and display the total price of the watch configuration as selections are made.

#### **6. Save and Share Functionality**

- Add a **Save** button to allow users to save their customized configuration as an image or URL.
- Include shareable links for social media platforms.

#### **7. Animations and User Experience**

- Add subtle animations to enhance the user experience:
  - Smooth transitions.
  - Hover effects.
  - Loading spinners during interactions.

---

### **Design Requirements**

- **Pixel-Perfect Precision:**
  - Replicate the Apple Watch Studio's aesthetic with exact details (fonts, spacing, margins, colors, animations).
- **Interactive and Responsive:**

  - Ensure the UI is fully functional across desktop, tablet, and mobile devices.

- **High Performance:**

  - Focus on smooth interactions and fast loading times.

- **Accessibility:**
  - Implement accessible design principles (e.g., ARIA roles, keyboard navigation).

---

### **Expected Output**

#### **1. Deployment Link**

- Host the project on a platform like **Vercel** or **Netlify**.
- The deployment should be publicly accessible.

#### **2. GitHub Repository**

- Share a **public GitHub repository** link for the project.
- The repo should include a detailed README explaining setup, features, and implementation.

#### **3. Loom Walkthrough**

- Record a **5-minute Loom video** demonstrating the implementation process.
- Walk through key code sections and demonstrate the UI's functionality in the video.
