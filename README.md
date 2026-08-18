## Project Description

**Brew Hub Vanilla** is a lightweight, responsive single-page web application designed for a modern coffee shop. It allows customers to browse the current drink and pastry menu, view detailed product information, manage a digital shopping cart, and place orders in real-time.

Built entirely with standard-compliant web technologies, the project serves as a practical, production-ready demonstration of building robust web apps without relying on modern JavaScript frameworks or heavy external libraries.

### Purpose

The primary purpose of this project is educational. It acts as a companion codebase for exploring the power of the native web platform. It demonstrates that standard browser APIs are fully capable of handling state management, component architecture, routing, and UI updates efficiently, resulting in a highly performant application with zero build-tool overhead.

### Key Functionality

* **Dynamic Product Catalog**: Fetches and renders the coffee shop menu dynamically from an API endpoint, categorized by beverage and food types.
* **Client-Side Routing**: Implements a custom, native router that handles navigation between the main menu, product detail pages, and the checkout screen without triggering full page reloads.
* **Real-Time Shopping Cart**: Allows users to add items, adjust quantities, and remove products, with the order total and cart badge updating instantly across components.
* **Component-Based Architecture**: Utilizes native Web Components (Custom Elements, Shadow DOM, and HTML Templates) to create reusable, encapsulated UI elements like `<product-item>` and `<order-item>`.
* **Centralized State Management**: Uses JavaScript Proxies to observe changes in the application data and automatically update the UI when the menu or cart state changes.
* **Responsive CSS Layouts**: Styled using modern CSS features like CSS Grid, Flexbox, and Native CSS Variables to ensure a seamless visual experience across mobile, tablet, and desktop screens.
