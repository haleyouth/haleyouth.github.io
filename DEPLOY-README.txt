Build & Deploy to cPanel (public_html)

1) Install dependencies (Windows PowerShell / CMD):
   npm ci || npm install

   If you get `'vite' is not recognized` — it means node modules are not installed.
   Running `npm install` will install Vite locally in this project.

   If you get ETARGET on @replit/*: we've removed those plugins from the config.

2) Build:
   npm run build

   Output: ./dist (contains index.html, assets, and .htaccess)

3) Upload to cPanel:
   - Open cPanel → File Manager → public_html/
   - Upload the **contents** of ./dist/ (not the folder itself)
   - Ensure .htaccess is present in public_html/ (it comes from client/public/.htaccess)

4) Test deep links:
   https://haleyouthfoundation.org/
   https://haleyouthfoundation.org/anything  (should still show the SPA)

