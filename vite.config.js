import { defineConfig } from 'vite';
const path=require("path"); //npm install vs bir seye gerek yok


export default defineConfig({
  base:`/vite-learning-multi-pages/`,
  root: './src', // Specify the root directory, vite.config.js degil ama index.html bu yeni rootta olmalı!

    //alternatif
    //root: path.resolve(__dirname,"src"),

    publicDir: '../public', // icine daha cok resim, txt vs koyuyorlar js ve css pathler okunması gerektigi icin pek kullanılmıyor. Sanki root folderdalarmıs gibi "/emre.png" kullanabilirsin. Build edilirken otomatik public icindekileri root icine kopyalar. Cok kullanmana gerek yok src icine koyabilrisin public dir kullanamdan. RELATİVE TO NEW ROOT

    //ALTERNATİF
   // publicDir:path.resolve(__dirname,"public"), 

    build: {
      outDir: '../dist', // Specify the output directory relative to the root directory!!!!
      rollupOptions: { //FOR MULTI PAGE
        input: {
          main: path.resolve(__dirname, 'src/index.html'),
          bos: path.resolve(__dirname, 'src/html/index2.html'),
        }
      }
    },
    server: {
        port: 3000, // Specify your desired port number here
      },
    resolve: { //sadece absolute kullan
      alias: {
        //absolute lazım!
        '@styles': '/css',
        '@images': '/images', // Alias for the assets directory relative to the root!!!!
        "@scripts": path.resolve(__dirname,"./src/js")
      },
    },
});