import { defineConfig } from 'vite';
const path=require("path"); //npm install vs bir seye gerek yok


export default defineConfig({
    root: './src', // Specify the root directory, vite.config.js degil ama index.html bu yeni rootta olmalı!
    publicDir: 'public', // icine daha cok resim, txt vs koyuyorlar js ve css pathler okunması gerektigi icin pek kullanılmıyor. Sanki root folderdalarmıs gibi "/emre.png" kullanabilirsin. Build edilirken otomatik public icindekileri root icine kopyalar. Cok kullanmana gerek yok src icine koyabilrisin public dir kullanamdan
    build: {
      outDir: '../dist', // Specify the output directory relative to the root directory!!!!
    },
    server: {
        port: 3000, // Specify your desired port number here
      },
    resolve: {
      alias: {
        '@styles': './styles', // Alias for the components directory relative to the root!!!!
        '@assets': './assets', // Alias for the assets directory relative to the root!!!!
      },
    },
});