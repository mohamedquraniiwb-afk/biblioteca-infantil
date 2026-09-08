# Biblioteca Infantil — sitio de ventas

Landing page para vender el PDF "Biblioteca Infantil" por transferencia.
El formulario (nombre, correo Gmail, WhatsApp, foto del comprobante) es un
Google Form embebido directo en la página — las respuestas y la foto
llegan automáticamente a un Google Sheet, sin necesidad de backend propio
ni credenciales de Google Cloud.

## Ya está todo listo para publicar

- Los datos de transferencia (BanCoppel, Hello Mundo) están puestos en
  `app/page.tsx`.
- Las 6 imágenes de muestra están en `public/samples/`.
- El Google Form está embebido con tu link real.

Si en algún momento cambias de formulario, solo edita `GOOGLE_FORM_VIEW_URL`
al inicio de `app/page.tsx` con el nuevo link (termina en `/viewform`, sin
parámetros extra).

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (o arrástrala directo a
   Vercel al importar un proyecto nuevo).
2. En vercel.com, crea un proyecto a partir de ese repositorio.
3. Dale **Deploy**. No necesitas configurar ninguna variable de entorno.
4. En un par de minutos tendrás tu URL pública, ej.
   `biblioteca-infantil.vercel.app`.

## Revisar los pedidos

Entra al Google Sheet que se creó al conectar las respuestas del
formulario (Google Forms → pestaña "Responses" → ícono de Sheets). Ahí
verás cada envío con el link a la foto del comprobante en Drive, para que
mandes el acceso por WhatsApp o correo.

## Desarrollo local (opcional)

```bash
npm install
npm run dev
```

Abre http://localhost:3000
