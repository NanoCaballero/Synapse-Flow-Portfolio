<!--
============================================================================
 PLANTILLA DE REPORTE — Portafolio del Proyecto (Rúbrica M1, 10 pts)
 Synapse-Flow | Fantasy Labs · Socio formador Banorte · Tec de Monterrey
----------------------------------------------------------------------------
 CÓMO USAR ESTA PLANTILLA
 - El texto en prosa ya está pre-llenado con info real del proyecto.
 - Busca y reemplaza los marcadores manuales:
     📎 PEGAR LINK:        → pega aquí la URL real (Drive, GitHub, etc.)
     🖼️ INSERTAR DIAGRAMA: → inserta/enlaza la imagen del diagrama
     [VALIDAR CON EQUIPO]  → confirmar o ajustar el dato antes de entregar
     [AGREGAR EVIDENCIA]   → captura o link que pruebe lo dicho
 - Exporta a PDF (VS Code: extensión "Markdown PDF", o pandoc) y enlázalo en
   el sitio (Anexos → "Reporte del portafolio (M1)") y súbelo a eLumen.
============================================================================
-->

# Synapse-Flow — Reporte del Proyecto
### Intelligent Agent Orchestration Platform

**Equipo:** Fantasy Labs · **Socio formador:** Banorte · **Institución:** Tecnológico de Monterrey
**Materia:** Planeación de Software (TC3004B) · **Fecha de entrega:** [VALIDAR CON EQUIPO]

**Integrantes y roles**

| Integrante | Rol |
|---|---|
| Santiago Calvo Lomelí | Team Lead & Backend Engineer |
| David Salomón Nava Nungaray | Tech Lead & Backend Engineer |
| Alejandra Ordaz González | Frontend & DevOps Engineer |
| Bernardo Caballero Zambrano | Full Stack Engineer |
| Luis Hubert Madrian Valero | Full Stack Engineer & Scrum Master |

**Enlaces principales**
- Portafolio (sitio): https://nanocaballero.github.io/Synapse-Flow-Portfolio/ · [VALIDAR — activar GitHub Pages]
- Presentación final: https://canva.link/q8ph9rxii8e6q1n
- GitHub Backend: https://github.com/salog0d/Synapse-Microservices.git
- GitHub Frontend: https://github.com/aleordaz1130/Synapse-Frontend.git
- Video demo: 📎 PEGAR LINK: [VIDEO DEMO]

---

## 1. Resumen ejecutivo

Synapse-Flow es una **plataforma de orquestación de agentes de inteligencia artificial**
que permite a usuarios técnicos y de negocio **diseñar, compilar y ejecutar workflows**
representados como un **grafo dirigido de nodos**, sin escribir código. Integra modelos
generativos (Google Gemini vía Google ADK), herramientas externas (MCP), recuperación
aumentada por documentos (RAG), ejecución de código en sandbox y pasos con intervención
humana (human-in-the-loop).

**Propósito:** democratizar la creación de procesos inteligentes con agentes de IA dentro
de un entorno enterprise seguro, trazable y escalable.

**Usuario objetivo:** usuarios técnicos (configuran nodos y workflows), usuarios de negocio
(supervisan y ejecutan), administradores (gestionan usuarios y permisos) y equipos de
auditoría/operación (revisan logs e historial).

**Idea central — pipeline conceptual:** **Definir → Compilar → Ejecutar.**

---

## 2. Planteamiento del problema y objetivos

### 2.1 Necesidad / problemática detectada
La creación y operación de flujos inteligentes con agentes de IA suele requerir
conocimientos técnicos, integración manual de modelos y herramientas, y control de
ejecución. Esto dificulta que equipos de negocio diseñen procesos automatizados sin
depender por completo de desarrollo especializado. En un contexto financiero (Banorte) se
suma la exigencia de seguridad, confidencialidad, trazabilidad y cumplimiento regulatorio.

### 2.2 Objetivo general
> Diseñar y construir una plataforma de orquestación de agentes de IA que permita definir,
> compilar y ejecutar workflows mediante nodos visuales, bajo una arquitectura de
> microservicios segura, trazable y escalable apropiada para un entorno enterprise.
>
> **[VALIDAR CON EQUIPO]**

### 2.3 Objetivos específicos *(propuesta — [VALIDAR CON EQUIPO])*
1. Implementar el pipeline Definir → Compilar → Ejecutar sobre un grafo de nodos validado y ordenado.
2. Integrar capacidades de IA (Google ADK + Gemini), RAG, herramientas externas y ejecución de código en sandbox.
3. Garantizar seguridad e identidad mediante autenticación JWT, RBAC y gestión cifrada de secretos.
4. Proveer trazabilidad y observabilidad de las ejecuciones (auditoría, métricas, logs y trazas).

### 2.4 Valor agregado
- Democratiza la creación de workflows de agentes.
- Reduce la dependencia de código manual para procesos inteligentes.
- Integra IA generativa, herramientas, RAG y validación humana en un mismo flujo.
- Se apoya en una arquitectura modular de microservicios.
- Considera seguridad, trazabilidad y observabilidad desde el diseño.

---

## 3. Análisis de requerimientos

### 3.1 Requerimientos funcionales
> Actualiza la columna Estado (Implementado / Parcial / En validación / Futuro) y agrega evidencia.

| ID | Requerimiento | Estado | Evidencia |
|---|---|---|---|
| RF-01 | Autenticación de usuarios mediante credenciales y JWT | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-02 | Gestión de usuarios, roles y permisos | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-03 | Creación y administración de workflows | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-04 | Creación y configuración de nodos | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-05 | Conexión visual de nodos en un canvas | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-06 | Compilación de workflows | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-07 | Ejecución de workflows con agentes | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-08 | Integración de nodos RAG | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-09 | Ejecución de código en sandbox | [VALIDAR] | [AGREGAR EVIDENCIA] |
| RF-10 | Auditoría e historial de ejecuciones | [VALIDAR] | [AGREGAR EVIDENCIA] |

### 3.2 Requerimientos no funcionales

| ID | Categoría | Requerimiento | Evidencia |
|---|---|---|---|
| RNF-01 | Seguridad | Control de acceso con JWT (HS256), RBAC, BCrypt y AES-GCM (vault) | [AGREGAR EVIDENCIA] |
| RNF-02 | Escalabilidad | Arquitectura de microservicios (Spring Cloud, Eureka, Gateway) | [AGREGAR EVIDENCIA] |
| RNF-03 | Mantenibilidad | Separación de responsabilidades por servicio (Open/Closed) | [AGREGAR EVIDENCIA] |
| RNF-04 | Observabilidad | Prometheus, Grafana, Loki, Tempo, Alertmanager | [AGREGAR EVIDENCIA] |
| RNF-05 | Disponibilidad | Despliegue contenerizado, preparado para Kubernetes/OpenShift | [AGREGAR EVIDENCIA] |
| RNF-06 | Confidencialidad | RAG y embeddings on-premise (Ollama + pgvector) | [AGREGAR EVIDENCIA] |
| RNF-07 | Trazabilidad | Registro de ejecuciones y auditoría | [AGREGAR EVIDENCIA] |

### 3.3 Historias de usuario
- **HU-01** — Como usuario, quiero iniciar sesión para acceder a la plataforma de forma segura.
- **HU-02** — Como usuario técnico, quiero crear nodos reutilizables para construir workflows.
- **HU-03** — Como usuario técnico, quiero conectar nodos visualmente para definir el flujo.
- **HU-04** — Como usuario, quiero ejecutar workflows para obtener resultados de agentes de IA.
- **HU-05** — Como administrador, quiero gestionar usuarios y roles para controlar permisos.
- **HU-06** — Como usuario, quiero consultar historial y auditoría para revisar ejecuciones.
- **HU-07** — Como usuario técnico, quiero usar nodos RAG para consultar documentos como contexto.
- **HU-08** — Como usuario técnico, quiero ejecutar código en sandbox para agregar lógica personalizada.

> 📎 PEGAR LINK: documento completo de requerimientos (SRS) · Administración del proyecto / backlog (GitHub Project, Jira o Trello)

---

## 4. Desarrollo e implementación

### 4.1 Tecnologías utilizadas

| Tecnología | Uso en el proyecto | Beneficio |
|---|---|---|
| Java / Spring Boot 4 / Spring Cloud | Backend y microservicios (config, gateway, seguridad) | Base enterprise, escalable y segura |
| React + Vite + TypeScript | Frontend web | Interfaz moderna y tipada |
| React Flow | Canvas visual de workflows | Construcción de grafos de nodos |
| PostgreSQL 17 + pgvector | Persistencia + embeddings RAG | Datos confiables y búsqueda semántica |
| Google ADK + Gemini 2.5 Flash | Motor de ejecución de agentes + modelo generativo | Convierte el workflow visual en lógica ejecutable |
| Ollama (on-premise) | Generación de embeddings RAG | Confidencialidad / cumplimiento |
| Redis + Spring Cache | Caché de workflows compilados | Menor latencia, evita recompilar |
| Docker | Contenedores y sandbox de código | Ambientes reproducibles y aislamiento |
| Eureka / OpenFeign | Service discovery y comunicación servicio a servicio | Comunicación dinámica y desacoplada |
| Prometheus / Grafana / Loki / Tempo | Observabilidad (métricas, dashboards, logs, trazas) | Monitoreo operativo |
| GitHub Actions | CI/CD | Automatización de pruebas y despliegue |

### 4.2 Descripción de módulos (microservicios)

| Servicio | Responsabilidad |
|---|---|
| api-gateway | Punto de entrada único, ruteo, RBAC, load balancing |
| naming-server (Eureka) | Service discovery |
| spring-cloud-config-server | Configuración centralizada |
| auth-service | Autenticación y emisión de JWT (HS256) |
| admin-service | RBAC: usuarios, roles, authorities, departamentos |
| authorization-service | Autorización por recurso |
| vault-service | Gestión cifrada de secretos (AES-GCM) |
| workflow-service | CRUD de workflows y nodos (la *definición* del grafo) |
| compile-service | Compila el grafo a `CompiledWorkflow` (orden topológico de Kahn, validación, caché por hash) |
| execution-service | Ejecuta el workflow (Google ADK + Gemini, human-in-the-loop, historial) |
| tools-execution-service | Herramientas externas y MCP |
| audit-service | Auditoría e historial (desarrollado desde Sprint 3) |

**Decisiones técnicas destacadas**
- **Compilación:** orden topológico (algoritmo de Kahn por in-degree), detección de ciclos, validación de contratos de tools y caché por `sourceHash` (trabajo pesado una sola vez).
- **Ejecución:** patrón **Factory + EnumMap** (`CompiledNodeAgentFactory`) → agregar un nuevo tipo de nodo = registrar una factory, sin modificar el código existente (Open/Closed).
- **Human-in-the-loop:** patrón "guardar + rehidratar" — el estado de ejecución se persiste en BD y se reanuda cuando el humano decide (no se mantienen hilos vivos).
- **Sandbox:** los nodos de código corren en contenedores Docker efímeros y aislados.

> 🖼️ INSERTAR DIAGRAMA: arquitectura de alto nivel (componentes internos por capa UI/Integración/Almacenamiento + externos; marcar componentes futuros con leyenda).
> 📎 PEGAR LINK: repositorios backend y frontend · documento de diseño (M2).

---

## 5. Pruebas de usabilidad

### 5.1 Metodología
Prueba con **5 usuarios técnicos de ITC** sobre **7 tareas** representativas: acceso y
exploración, crear nodo IA reutilizable, construir workflow básico, ejecutar y validar
respuesta, supervisar human-in-the-loop, editar workflow y guardar, revisar
trazabilidad/auditoría. Se aplicó cuestionario previo (perfil) y posterior (satisfacción).

### 5.2 Resultados *(n=5 · [VALIDAR CON EQUIPO])*

| Métrica | Resultado |
|---|---|
| Facilidad de uso | 4.0 / 5 |
| Claridad de interfaz | 4.2 / 5 |
| Rapidez percibida | 3.8 / 5 |
| Confianza del usuario | 3.4 / 5 |
| Satisfacción general | 4.2 / 5 |
| NPS | 8 / 10 |

Tasa de éxito por tarea: **100%** en T1, T3, T4 y T5; **50%** en T6 y T7 (edición y
trazabilidad); T2 con un usuario parcial. Tiempo promedio por tarea ≈ 1:15.

### 5.3 Hallazgos principales
1. Falta de feedback visual claro al guardar o ejecutar un workflow.
2. Configuración avanzada de nodos confusa.
3. Auditoría/historial difíciles de localizar.
4. Diferencia poco clara entre crear un nodo nuevo y reutilizar uno existente.
5. Demasiados parámetros visibles a la vez en el panel de configuración.

### 5.4 Recomendaciones de mejora
- Mensajes de "guardado exitoso", "workflow actualizado", "ejecución iniciada".
- Separar configuración básica y avanzada de nodos.
- Agregar ejemplos en nodos Decision, Transformation y RAG.
- Hacer visible la auditoría desde el workflow.
- Diferenciar mejor creación vs. uso de nodos existentes y agrupar parámetros por secciones.

> 📎 PEGAR LINK: evidencia de pruebas de usabilidad · evidencia unit tests (JUnit) · evidencia Selenium · plan de pruebas de aceptación (M5) · pruebas de seguridad (M5).

---

## 6. Resultados obtenidos y retroalimentación

- Plataforma funcional con el pipeline Definir → Compilar → Ejecutar. [VALIDAR]
- Arquitectura de microservicios con seguridad JWT/RBAC y secretos cifrados. [VALIDAR]
- Integración de IA (ADK + Gemini), RAG on-premise y sandbox de código. [VALIDAR]
- Estudio de usabilidad (NPS 8/10) y suite de pruebas backend + E2E. [VALIDAR]

**Retroalimentación de usuarios finales:** ver hallazgos (§5.3) y recomendaciones (§5.4).
[AGREGAR EVIDENCIA: comentarios/quotes de usuarios, capturas del cuestionario]

---

## 7. Conclusiones y lecciones aprendidas

### 7.1 Logros del proyecto
[VALIDAR CON EQUIPO — ver §6 y la presentación final]

### 7.2 Dificultades enfrentadas
- Integración entre frontend, gateway y microservicios.
- Diseño de ejecución de workflows complejos.
- Seguridad en la ejecución de código.
- Configuración de ambientes y servicios distribuidos.
- Validación de RAG y herramientas externas.
- Coordinación de entregables y documentación.

### 7.3 Aprendizajes del proceso
- La arquitectura de microservicios exige trazabilidad, configuración y comunicación bien definidas.
- La IA en sistemas enterprise requiere seguridad, auditoría y control.
- Un workflow visual necesita validaciones claras para ser útil.
- La calidad no depende solo de pruebas unitarias: también usabilidad, seguridad y despliegue.
- La documentación y la gestión de configuración son parte esencial del producto final.

---

## 8. Anexos

> Completa con los enlaces y diagramas reales.

| Anexo | Enlace / archivo |
|---|---|
| EDT (Estructura de Desglose de Trabajo) | 📎 PEGAR LINK |
| Diagrama de arquitectura | 🖼️ INSERTAR / 📎 PEGAR LINK |
| Diagrama de stack tecnológico | https://drive.google.com/file/d/1zKXaIf3RwFEqGOvTlUe0myGZS6EI4o0W/view?usp=sharing |
| Modelo de datos | 🖼️ INSERTAR / 📎 PEGAR LINK |
| Documento de requerimientos (SRS) | 📎 PEGAR LINK |
| Documento de diseño (M2) | 📎 PEGAR LINK |
| SCMP — Plan de gestión de configuración | https://docs.google.com/document/d/1qzfMGPEHgDA3a8VukmyRye1VlTaLrnubjHgRsBOdb6Y/edit?usp=sharing |
| Plan de cierre del proyecto | https://docs.google.com/document/d/1YfKRfYntnG0Mau6Nd-z6EfCJOdFKl2zJCDiQ5BuV5ys/edit?usp=sharing |
| Pruebas (usabilidad, aceptación, seguridad, unit tests, Selenium) — carpeta | https://drive.google.com/drive/folders/1q-HaXzthVJK40W8r3gsbNVot5pv1-HVv?usp=drive_link |
| Administración del proyecto (GitHub Project / Jira / Trello) | 📎 PEGAR LINK |
| Drive de evidencias (sprints / minutas) | 📎 PEGAR LINK |
| Video demo | 📎 PEGAR LINK |
| Presentación final | https://canva.link/q8ph9rxii8e6q1n |
| Repositorio backend | https://github.com/salog0d/Synapse-Microservices.git |
| Repositorio frontend | https://github.com/aleordaz1130/Synapse-Frontend.git |

### Credenciales de acceso (NO publicar en el sitio público)
> Existen usuarios semilla de demo (roles ADMIN / IT / USER) documentados en el repositorio
> backend. **Entrega las credenciales y URLs de los ambientes directamente en eLumen**, no
> en el portafolio público ni en commits.
>
> - Ambiente de desarrollo/demo: 📎 PEGAR (en eLumen) — URL · usuario · contraseña
> - Ambiente de pruebas (si aplica): 📎 PEGAR (en eLumen) — URL · usuario · contraseña

---

*Fantasy Labs · Synapse-Flow · Tecnológico de Monterrey · Socio formador Banorte · 2026*
