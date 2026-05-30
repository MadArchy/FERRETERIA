# Ferretería El Kiosko

Sitio web de ferretería construido con [Next.js](https://nextjs.org).

## Recursos locales (sin CDN)

Todo lo necesario para **ver** el sitio está en el proyecto:

| Recurso | Ubicación |
|---------|-----------|
| Imágenes | `public/images/` |
| Colores de marca | `src/app/globals.css` (`@theme`) |
| Tipografía Inter | `@fontsource/inter` (npm, incluida en el build) |
| Iconos UI | `lucide-react` + SVG propios (`WhatsAppIcon`, `FacebookIcon`) |

No se cargan fuentes ni imágenes desde Google Fonts ni otros CDN al abrir la página.

Los enlaces a WhatsApp, Facebook o Google Maps son solo botones de contacto (el usuario sale del sitio al usarlos).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Publicar en GitHub Pages

El proyecto está configurado para desplegarse en:

**https://madarchy.github.io/FERRETERIA/**

### Activar GitHub Pages (solo la primera vez)

1. Entra a tu repositorio: [github.com/MadArchy/FERRETERIA](https://github.com/MadArchy/FERRETERIA)
2. Ve a **Settings** → **Pages**
3. En **Build and deployment** → **Source**, elige **GitHub Actions**
4. Guarda. El workflow se ejecuta al hacer push a `main`

### Desplegar cambios

```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

En **Actions** verás el workflow **Deploy to GitHub Pages**. Cuando termine en verde, la web estará en la URL de arriba (puede tardar 1–2 minutos).

### Probar build de Pages en tu PC (opcional)

PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/FERRETERIA"
npm run build
```

La carpeta `out/` contiene el sitio estático.

## Alternativa: Vercel

Para dominio propio y despliegue automático sin `/FERRETERIA` en la URL, [Vercel](https://vercel.com) conectado al mismo repositorio es la opción más simple para Next.js.
