# DevStack

DevStack is a small app for browsing frontend, backend, database and tooling technologies, comparing them, and building your own little "stack" by adding the ones you like.

## Description

You get a grid of tech cards (React, Vue, Node.js, PostgreSQL, Docker, etc.) each with an icon, description, category, difficulty, and rating. Hit "Add to Stack" and it lands in a sidebar. Remove one at a time or clear the lot, and a toast pops up every time.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

1. **Interactive Stack Builder** — add/remove technologies live, no duplicates allowed, toast for every action.
2. **JSON-Driven Data** — all tech data loaded from a JSON file, nothing hardcoded.
3. **Fully Responsive** — works nicely on mobile, tablet, and desktop, hamburger menu and all.

## Links

- GitHub Repository: https://github.com/farhana-ayesha/devstack-app
- Live Site: https://devstack-app.vercel.app/

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX lets you write HTML-ish code inside JavaScript. Much easier than calling `document.createElement` a hundred times — React just turns it into JS under the hood.

**2. What is the difference between props and state?**
Props come from the parent, read-only. State is a component's own data, and it can change over time.

**3. What does the `useState` hook do, and where did you use it in this project?**
It lets a component remember a value and re-render when it changes. Used it for the mobile menu toggle, and for the tech list, loading status, and stack list in Technologies.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
Runs code after render — good for fetching data. Fetching is a side effect, so it doesn't belong in the render itself. Used it with an empty dependency array so the JSON only loads once.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
So React knows which item is which between renders, instead of getting confused and updating the wrong ones.

**6. What is conditional rendering? Show one place you used it.**
Showing different UI based on a condition. In "Your Stack" — empty message if the stack's empty, actual list if it's not.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent to child: props. Child to parent: parent passes down a function as a prop, child calls it. Here, `Technologies` passes `onAdd` to `TechCard`, and clicking "Add to Stack" calls `onAdd(tech)`.
