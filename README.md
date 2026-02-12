🍝 Pesto — Food Ordering Frontend Application

📖 Overview

Pesto is a responsive food ordering frontend web application built using HTML, CSS, and vanilla JavaScript.
The project simulates a real-world food ordering flow by allowing users to browse items, add them to a cart, and proceed through a checkout process — all without a backend.

The core focus of this project is frontend state management using browser localStorage, ensuring cart data persists across page refreshes and sessions.

🌐 Live Demo

🔗 Project Link:
👉 https://hasitha1510.github.io/Pesto/

🛠️ Tech Stack

🧱 HTML5 — Semantic structure and layout

🎨 CSS3 — Responsive design and styling

⚙️ JavaScript (Vanilla) — Dynamic behavior & DOM manipulation

💾 localStorage API — Persistent client-side cart storage

✨ Key Features

✔️ Clean and responsive food ordering UI
✔️ Interactive Add to Cart functionality
✔️ Cart state persists using browser localStorage
✔️ Checkout and delivery details flow
✔️ Items remain in cart until user manually removes them
✔️ Fully client-side implementation (no backend)

🧠 What This Project Demonstrates

📌 Event handling and DOM manipulation

📌 Client-side state management in JavaScript

📌 Data persistence using localStorage

📌 Multi-page frontend flow (menu → cart → checkout)

📌 Building real-world UI logic without frameworks

📂 Project Structure
Pesto/
├── index.html          # Home & menu page
├── cart.html           # Cart page
├── checkout.html       # Delivery details page
├── css/
│   └── styles.css      # Styling
├── js/
│   └── script.js       # Core application logic
└── assets/             # Images and icons

💾 Cart Persistence Logic

Cart items are stored in localStorage as JSON data

On every page load, the cart state is restored

Cart remains intact until the user explicitly removes items

This ensures a session-independent shopping experience.

📈 Future Enhancements

🔹 Quantity increment and decrement controls
🔹 Dynamic price calculation and order summary
🔹 UI/UX improvements for cart page
🔹 Migration to React for scalable state management

👩‍💻 Author

Hasitha Surapareddy
