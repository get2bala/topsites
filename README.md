# Top Sites

A simple web application to discover useful websites organized by categories and personas.

## Features

 **Listing Page (`sites.html`)**: Shows categorized website listings, can be filtered by tags or persona
- Browse by persona (e.g., First-time Parent, Entrepreneur, College Student)
- Mobile-friendly and responsive design
- "Add to Home Screen" functionality for mobile devices
 `sites.html`: Main website listing page
- `index.html`: Home page showing persona categories 
- `home.html`: Main website listing page
- `data.json`: Contains website listings organized by category
- `personas.json`: Contains persona categories and specific personas
- `config.json`: Configuration for the application
- `style.css`: Custom styles
- `sw.js`: Service worker for offline functionality
- `manifest.webmanifest`: Web app manifest for "Add to Home Screen" functionality

## How to Use

1. Open `index.html` to browse by persona categories
2. Click on a specific persona to see website recommendations tailored to that persona
3. Use the menu button to filter by additional categories
4. Click "Browse All" to see all website listings
5. On mobile, use "Add to Home Screen" for app-like experience

## Development

To modify the website listings, edit the `data.json` file.
To modify the personas, edit the `personas.json` file.
To change the color schemes and other configuration, edit the `config.json` file.
This website helps you quickly find the best sites for everyday needs—covering categories like insurance, home repair, education, healthcare, finance, and shopping. It highlights trusted, reliable platforms so you can save time and make smarter choices. A simple guide to the top online tools for life’s daily tasks.
