import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        home: 'home.html',
        info: 'info.html',
        payroll: 'payroll.html',
        view: 'view.html'
      }
    }
  }
})
