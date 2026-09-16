# Bitácora Onírica — instrucciones para publicarla

Esta carpeta contiene tu app independiente, lista para subir. Son 6 archivos:
`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.

## 1. Consigue tu clave de Gemini (gratis)

1. Ve a **aistudio.google.com/apikey** con tu cuenta de Google.
2. Crea una clave nueva ("Create API key"). Cópiala, la necesitarás luego.
3. Como elegiste privacidad de pago: en ese mismo proyecto de Google Cloud, ve a
   **console.cloud.google.com/billing**, vincula una tarjeta y asegúrate de que el
   proyecto que usa tu clave tiene la facturación activada. Con esto, tu contenido
   deja de usarse para entrenar modelos de Google. Con tu uso diario (un relato
   corto al día) el coste real será de céntimos al mes.

## 2. Publica los archivos en GitHub Pages (gratis)

1. Si no tienes cuenta, créala en **github.com** (gratis).
2. Pulsa el **+** arriba a la derecha → **New repository**. Nómbralo, por ejemplo,
   `bitacora-onirica`. Déjalo **público** (necesario para que Pages sea gratis) y
   crea el repositorio.
3. Dentro del repositorio, pulsa **Add file → Upload files**, y arrastra los 6
   archivos de esta carpeta. Pulsa **Commit changes**.
4. Ve a **Settings → Pages** (menú lateral). En "Branch" elige `main` y carpeta
   `/ (root)`, y pulsa **Save**.
5. Espera un par de minutos y recarga esa misma página: te dará una URL parecida a
   `https://tu-usuario.github.io/bitacora-onirica/`. Esa es tu app.

## 3. Instálala en tu móvil

Abre esa URL desde el navegador de tu móvil:

- **iPhone (Safari):** botón de compartir → "Añadir a pantalla de inicio".
- **Android (Chrome):** menú (⋮) → "Instalar aplicación" o "Añadir a pantalla de inicio".

Se quedará como un icono normal, en pantalla completa, sin barra de navegador.

## 4. Pega tu clave dentro de la app

Abre la app, pulsa **"Clave de IA"** arriba, pega la clave que copiaste en el
paso 1 y dale a **Guardar**. Se queda solo en tu móvil (en el almacenamiento
local del navegador) — nunca se sube a GitHub ni a ningún sitio, salvo
directamente a Google cuando generas un relato.

## Qué cambia respecto a la versión dentro de Claude

- Las entradas se guardan **solo en este teléfono** (no hay copia en la nube).
  Usa el botón **"Exportar copia"** del diario de vez en cuando para tener un
  respaldo descargado, por si acaso.
- El relato ya no aparece en directo mientras se escribe (aparece completo al
  terminar); se puede añadir el efecto en vivo más adelante si lo echas en falta.
- Si al generar un relato ves siempre un error de conexión, puede ser un bloqueo
  de CORS del navegador a la API de Google — dímelo y lo resolvemos añadiendo un
  pequeño intermediario (gratis también).
