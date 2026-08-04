import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/School-Education-Website/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "About_Page.html"),
        academics: resolve(__dirname, "Academics Page.html"),
        admission: resolve(__dirname, "Admission_page.html"),
        studentLife: resolve(__dirname, "Student Life Page.html"),
        contact: resolve(__dirname, "contact_us.html"),
      },
    },
  },
});