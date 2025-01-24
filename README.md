**nfv-net**

---
# **NFVnetwork Source Code** 

Welcome to the **source code** for the NFVNetwork Bolt Prompt Site! This folder contains all the core code and assets that power the interactive and visually engaging features of the site.

---

## **Project Structure**  

The `/src` directory is organized as follows:  

### 1. **Components**  
   - Contains reusable **React components** for various sections of the site.  
   - Example components include:  
     - `Header.js`: Handles the navigation bar and top section.  
     - `Footer.js`: Displays the footer with links and social icons.  
     - `EventCard.js`: Displays event details dynamically.  
     - `ConnectWallet.js`: The (coming soon) feature for wallet integration.  

### 2. **Pages**  
   - Contains full-page layouts for:  
     - `Home.js`: The main landing page.  
     - `Events.js`: Displays a list of upcoming events dynamically.  
     - `Community.js`: Features Discord integration and community planning details.  

### 3. **Assets**  
   - Contains all **static assets** like images, fonts, and other multimedia resources.  
   - Subfolders:  
     - `/images`: For site images like banners and logos.  
     - `/icons`: For SVGs and other graphic assets.  

### 4. **Styles**  
   - Houses **CSS/SCSS files** to define the design and layout of the site.  
   - Example files:  
     - `global.css`: For global styles applied site-wide.  
     - `variables.scss`: For color themes, spacing, and typography settings.  

### 5. **Utils**  
   - Contains helper functions and configuration files for:  
     - API calls to pull dynamic event data.  
     - Formatting utilities for dates, times, and locations.  

### 6. **Data**  
   - Stores **JSON files** for event details, sponsorship categories, and other static content for development/testing.  

---

## **Setup and Development**  

### Prerequisites  
- Node.js (v16 or higher)  
- npm or yarn  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/nfvnetwork/bolt-prompt-site.git  
   cd bolt-prompt-site  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Running Locally  
- Start the development server:  
  ```bash  
  npm start  
  ```  
- The site will be accessible at `http://localhost:3000`.  

---

## **Features**  

1. **Interactive Event Listings**  
   - Displays dynamic event cards with hover effects.  
   - Links to sponsor events and RSVP.

2. **Community Integration**  
   - Features Discord and Telegram links for seamless community engagement.  
   - *Coming Soon*: VolunteerConnectAU integration.  

3. **Connect Wallet (Coming Soon)**  
   - Placeholder for wallet integration to support blockchain features like event sponsorship and tokenized experiences.  

4. **Hover Effects**  
   - Text and buttons sparkle when hovered over, providing a futuristic Web3 aesthetic.  

---

## **Customization**  

### Environment Variables  
Create a `.env` file in the root of the project and define the following:  
```env  
REACT_APP_API_URL=https://api.nfvnetwork.com  
REACT_APP_DISCORD_LINK=https://discord.gg/xyz  
REACT_APP_TELEGRAM_LINK=https://t.me/xyz  
```  

### Theming  
- Adjust colors, fonts, and spacing in `src/styles/variables.scss`.  
- Modify hover effects and transitions in `src/styles/global.css`.  

---

## **Build and Deployment**  

1. Build the project:  
   ```bash  
   npm run build  
   ```  
2. Deploy to a hosting service of your choice (e.g., Vercel, Netlify).  

---

## **Future Enhancements**  

- **Full Wallet Integration**: Enable seamless sponsorship and payments via blockchain.  
- **VolunteerConnectAU**: Launch volunteer matching and coordination feature.  
- **Event Analytics**: Track and display event attendance and engagement metrics.  

---

## **Contributing**  

We welcome contributions! To contribute:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add feature-name"  
   ```  
4. Push and submit a pull request.  

---

## **License**  

This project is licensed under the MIT License. See the LICENSE file for details.  

---

Let me know if you'd like to refine it further!
