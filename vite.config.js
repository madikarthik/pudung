import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        accommodation: 'accommodation.html',
        activities: 'activities.html',
        blog: 'blog.html',
        'blog-post': 'blog-post.html',
        contact: 'contact.html',
        restaurant: 'restaurant.html'
      }
    }
  },
  server: {
    open: true
  }
});