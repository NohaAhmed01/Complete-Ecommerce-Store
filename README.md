# Complete E-commerce Store

A multi-page e-commerce application built with **React** and **Vite**, designed to simulate the experience of browsing and shopping from an online store.

This project is part of my journey to strengthen my React skills through practical implementation. I'm building it incrementally, focusing on component composition, state management, React Hooks, routing, and working with APIs.

🔗 **Live Demo:** [Complete E-commerce Store](https://complete-ecommerce-store.vercel.app/)

## Current Features

### 🏠 Home Page
- Hero section introducing the store with a call-to-action button.
- Featured products displayed by category.
- A highlighted section showcasing one of the highest-rated products.

### 🛍️ Products Page
- Fetches product data from the [DummyJSON Products API](https://dummyjson.com/products).
- Displays products in a responsive grid.
- Product search by title.
- Filter products by multiple categories.
- Filter products by maximum price using a range slider.
- Combine search and filters to narrow down results.
- Pagination with 6 products per page.

### 📦 Product Details
- Individual product pages using dynamic route parameters.
- Product image gallery.
- Product description, price, discount, and rating.
- Stock availability information.
- Warranty and shipping information.
- Customer reviews.

### 🧭 Navigation
- Multiple pages managed with React Router.
- Dynamic product detail routes.
- Lazy loading for page components.
- Automatic scroll-to-top when navigating between pages.

### 🎨 UI and Styling
- CSS Modules for component-level styling.
- Reusable components.
- Loading indicators while fetching data.

## 🛠️ Technologies & Concepts

| Technology | Usage |
|---|---|
| React 18 | Building the user interface |
| Vite | Development environment and build tool |
| React Router | Client-side routing and URL search parameters |
| Context API | Sharing product data, search state, and filter logic |
| React Hooks | `useState`, `useEffect`, `useContext`, `useMemo` |
| CSS Modules | Component-scoped styling |
| JavaScript (ES6+) | Application logic |
| DummyJSON API | Product data source |

## 🧠 What I'm Practicing

Throughout this project, I'm working on understanding and applying:

- Managing shared state using React Context.
- Fetching API data with `useEffect`, `async/await`, and `fetch`.
- Handling loading states and API errors.
- Creating reusable components and custom hooks.
- Optimizing derived data using `useMemo`.
- Managing URL query parameters with `useSearchParams`.
- Implementing search, filtering, and pagination.
- Combining multiple filtering conditions.
- Organizing a React application into maintainable components and pages.

## 🚧 Upcoming Features

This project is still under development. Here's what I plan to implement next:

- [ ] **Shopping Cart**
  - Add products to the cart.
  - Update product quantities.
  - Remove products from the cart.
  - Calculate subtotal, shipping fees, and total price.
  - Display cart item count in the navigation bar.

- [ ] **Improve Search and Filtering**
  - Improve the search experience.
  - Add sorting options (price, rating, etc.).
  - Add a way to clear all filters.

- [ ] **Cart Persistence**
  - Preserve cart items when refreshing the page using Local Storage.

- [ ] **Wishlist**
  - Allow users to save products to a wishlist.

- [ ] **UI/UX Improvements**
  - Improve responsiveness across different screen sizes.
  - Add better empty states and error messages.
  - Improve accessibility and user interactions.

## ⚙️ Getting Started

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/NohaAhmed01/Complete-Ecommerce-Store.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Complete-Ecommerce-Store
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the project for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## 📌 Project Status

**In Progress** — New features and improvements are being added as I continue developing and learning React.

---

*Built with React as a hands-on learning project.*
