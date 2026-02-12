🍝 Pesto – Food Ordering Frontend Application

📌 Overview

Pesto is a responsive food ordering frontend application built using HTML, CSS, and vanilla JavaScript.

The project focuses on implementing a realistic cart and checkout flow entirely on the client side, without using any backend.

Users can browse food items, add them to the cart, proceed to delivery details, and manage their cart with persistent state using browser localStorage.

🚀 Live Demo

🔗 Live Project:
https://hasitha1510.github.io/Pesto/

🛠️ Tech Stack

HTML5 – Structure and layout

CSS3 – Styling and responsive design

JavaScript (Vanilla JS) – Application logic and interactivity

Browser localStorage – Cart state persistence

✨ Features

Responsive food ordering UI

Add items to cart using interactive buttons

Cart data persists using localStorage (items remain even after page refresh or revisit)

Checkout flow with delivery details page

Ability to remove items from the cart manually

Client-side state management without backend support

🧠 Key Learnings

Handling DOM events and user interactions

Managing application state in vanilla JavaScript

Using localStorage to persist data across sessions

Structuring frontend logic for multi-page flow

Improving user experience with responsive layouts

📂 Project Structure (Simplified)
Pesto/
├── index.html

├── cart.html

├── checkout.html

├── css/

│   └── styles.css

├── js/

│   └── script.js

└── assets/

📌 How Cart Persistence Works

Cart items are stored in localStorage as JSON

On page load, the cart state is restored from storage

Items remain in the cart until the user removes them manually

🔮 Future Improvements

Quantity increment/decrement for cart items

Dynamic total price calculation

Improved cart summary UI

Migration to React for better state management

👩‍💻 Author

Hasitha Surapareddy
