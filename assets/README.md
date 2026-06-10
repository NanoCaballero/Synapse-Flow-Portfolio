# assets/ — Imágenes del portafolio

Esta carpeta contiene los recursos visuales del sitio. Actualmente son **SVG
placeholder** generados con la paleta morada de Fantasy Labs para que el sitio no se
vea vacío. Reemplázalos por capturas o diagramas reales cuando estén disponibles.

## Archivos

| Archivo                        | Dónde se usa                          | Reemplazar por |
|--------------------------------|---------------------------------------|----------------|
| `logo-placeholder.svg`         | Navbar, footer, favicon               | Logo real de Fantasy Labs / Synapse-Flow |
| `hero-placeholder.svg`         | (Disponible para el hero)             | Captura del producto / ilustración |
| `architecture-placeholder.svg` | Sección 5 · Diagrama de arquitectura  | Diagrama de arquitectura oficial |
| `workflow-placeholder.svg`     | (Disponible) pipeline Definir→Compilar→Ejecutar | Captura del canvas de workflows |
| `stack-placeholder.svg`        | (Disponible) stack tecnológico        | Diagrama del stack |
| `demo-placeholder.svg`         | Sección 10 · Miniatura de video demo  | Miniatura del video / enlace |

## Cómo reemplazar una imagen

1. Coloca tu archivo (PNG, JPG o SVG) en esta carpeta `assets/`.
2. En `index.html`, actualiza el atributo `src` del `<img>` correspondiente.
3. Actualiza también el `alt` con una descripción real (accesibilidad).

### Recomendaciones

- Mantén nombres descriptivos en minúsculas y con guiones: `diagrama-arquitectura.png`.
- Para capturas de pantalla, **PNG**; para fotos, **JPG**; para diagramas vectoriales, **SVG**.
- Optimiza el peso de las imágenes (idealmente < 500 KB) para que el sitio cargue rápido.
- Respeta la paleta morada (`#9517F2`, `#2D123F`, `#6B2FA0`, `#F3E8FF`) para consistencia visual.

> Los placeholders no rompen el sitio: puedes desplegar con ellos y reemplazarlos después.
