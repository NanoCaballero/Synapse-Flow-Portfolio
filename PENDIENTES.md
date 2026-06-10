# ✅ Pendientes del Portafolio — Synapse-Flow

Checklist para el equipo **Fantasy Labs**. El sitio ya está construido, con diseño final
y contenido real donde lo teníamos. Falta **rellenar links/diagramas, validar textos y
publicar**. Marca `[x]` cuando termines cada punto.

- **Sitio (editar):** `index.html` → busca cada placeholder con `Ctrl/Cmd + F`.
- Los placeholders se ven resaltados en el sitio (texto morado con borde punteado).
- **Reporte escrito:** `REPORTE_PORTAFOLIO.md` (plantilla M1, exportar a PDF).

---

## 0. Publicar el sitio (rápido, 2 min)
- [ ] Activar **GitHub Pages**: Settings → Pages → Source: *Deploy from a branch* →
      Branch `main` / carpeta `/ (root)` → Save. URL queda en
      `https://nanocaballero.github.io/Synapse-Flow-Portfolio/`

## 1. Reporte M1 (documento escrito)
- [ ] Llenar `REPORTE_PORTAFOLIO.md` (marcadores `📎 PEGAR LINK`, `🖼️ INSERTAR DIAGRAMA`, `[VALIDAR CON EQUIPO]`)
- [ ] Exportar a **PDF** (VS Code: extensión *Markdown PDF*, o `pandoc`)
- [ ] Subir el PDF a Drive y pegar el link en el sitio → busca `[LINK DOCUMENTO DE REPORTE]`

## 2. Links de documentos (subir a Drive → pegar URL en el sitio, sección Anexos)
- [ ] Documento de requerimientos / SRS → `[LINK DOCUMENTO DE REQUERIMIENTOS]`
- [ ] Documento de diseño (M2) → en Anexos · Documentación
- [x] SCMP (gestión de configuración) — ✅ enlazado
- [x] Plan de cierre del proyecto — ✅ enlazado
- [x] Plan de pruebas de aceptación (M5) — ✅ enlazado (carpeta de pruebas en Drive)
- [x] Pruebas de seguridad (M5) — ✅ enlazado (carpeta de pruebas en Drive)
- [x] Estudio de pruebas de usabilidad — ✅ enlazado (carpeta de pruebas en Drive)
- [ ] EDT (estructura de desglose de trabajo) → `[LINK EDT]`

## 3. Diagramas (imagen o link — sección 5 y Anexos)
- [ ] Diagrama de **arquitectura** → `[LINK DIAGRAMA DE ARQUITECTURA]`
      ⚠️ Para M2 debe: clasificar componentes **internos por capa** (UI / Integración /
      Almacenamiento), distinguir **internos vs externos**, marcar lo **futuro** con leyenda,
      y describir la **tecnología** de cada componente. También va en el README del repo backend.
- [x] Diagrama de **stack tecnológico** — ✅ enlazado
- [ ] Diagrama de **componentes**
- [ ] **Modelo de datos**
- [ ] Diagrama de **deployment**

## 4. Demo y media
- [ ] **Video demo** de la aplicación → `[LINK VIDEO DEMO]` (aparece en 3 lugares: hero, sección Anexos y tarjeta de video)
- [ ] **Demo en vivo / ambiente desplegado** (URL) → `[LINK DEPLOYMENT / AMBIENTE]`
- [x] Presentación final (Canva) — ya está
- [x] Repositorios backend y frontend — ya están

## 5. Gestión del proyecto
- [ ] Backlog / **GitHub Project / Jira / Trello** (con historias de usuario)
- [ ] Evidencia de sprints (Drive) → `[LINK DRIVE DE EVIDENCIAS]`
- [ ] Minutas / seguimiento (Drive)

## 6. Evidencias de calidad (Drive)
- [x] Evidencia de **unit tests** (JUnit) — ✅ enlazado (carpeta de pruebas)
- [x] Evidencia **Selenium** (E2E) — ✅ enlazado (carpeta de pruebas)
- [x] Resultados de usabilidad — ✅ enlazado (carpeta de pruebas)
- [x] Evidencia de pruebas de seguridad — ✅ enlazado (carpeta de pruebas)
- ℹ️ Si tienen el documento individual de cada prueba, pueden enlazarlo aparte; hoy todos apuntan a la carpeta general.

## 7. Ambientes (sección 8.4)
- [ ] URL + Estado de cada ambiente (desarrollo / pruebas / producción)
- [ ] **Credenciales demo → entregar SOLO en eLumen** (no en el sitio público ni en commits)

## 8. Validar CONTENIDO (texto — quitar la etiqueta `[VALIDAR CON EQUIPO]` al confirmar)
- [ ] **Objetivo general** (3.5) — propuesta redactada, confirmar/ajustar
- [ ] **Objetivos específicos** (3.6) — 4 propuestos, confirmar/ajustar
- [ ] **Métricas de usabilidad** (7.3) — confirmar que 4.0 / 4.2 / 3.8 / 3.4 / 4.2 y NPS 8 son finales
- [ ] **Logros del proyecto** (9.2) — propuesta redactada, confirmar/ajustar
- [ ] Una vez validados, **borrar todos los `[VALIDAR CON EQUIPO]`** para que no se vean en la presentación

## 9. Estados (badges) — sección 4.2 y 5.4
Actualmente: casi todo en **Implementado** (verde); `audit-service` y RF-10 (auditoría) en
**En validación** (ámbar).
- [ ] Confirmar que cada "Implementado" realmente funciona en el demo
- [ ] Si auditoría ya jala → subir `audit-service` y RF-10 a Implementado
- [ ] Si algo NO está listo → bajarlo a `badge--partial` (Parcial) o `badge--validating` (En validación)

---

## Repartición sugerida (ajusten a su gusto)
| Área | Responsable sugerido |
|---|---|
| Requerimientos, SRS, historias | Bernardo / Luis |
| Diseño, arquitectura, modelo de datos | David / Santiago |
| Frontend, capturas, video demo | Alejandra |
| Deployment, CI/CD, ambientes | Alejandra / David |
| Seguridad, pruebas de seguridad | Santiago |
| Reporte M1, usabilidad, cierre | Bernardo |

---

## Cómo editar y subir cambios
```bash
cd ~/Desktop/Tec/Synapse-Flow-Portfolio
# editar index.html en VS Code...
git add -A
git commit -m "descripción del cambio"
git push
```
Probar local: `python3 -m http.server 8000` → http://localhost:8000

> **Tip:** los placeholders pendientes se encuentran rápido buscando `class="ph"` o `[`
> en `index.html`. Hoy quedan **44**; la mayoría son los links de Anexos de arriba.
