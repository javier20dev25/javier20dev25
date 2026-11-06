# Javier Astaroth

**Inspector de aduanas en Nicaragua · Desarrollador e investigador independiente de seguridad de software**

Construyo herramientas para analizar cambios de código, riesgos de cadena de suministro, seguridad en tiempo de ejecución y flujos de CI/CD. Mi trabajo combina investigación práctica con software abierto y evidencia reproducible.

**Enfoque:** seguridad de aplicaciones · supply chain · eBPF & runtime security · GitHub Actions · SAST · herramientas para desarrolladores y agentes de IA

## Sentinel

Sentinel es un conjunto de herramientas de seguridad defensiva con funciones distintas. Cada producto puede utilizarse por separado o integrarse en equipo.

- **[Sentinel Cloud](https://sentinel-psi-nine.vercel.app/)** — servicio web para análisis de pull requests, evidencia de GitHub y colaboración de equipo.
- **[Sentinel CLI](https://github.com/javier20dev25/sentinel-cli)** — análisis local y flujos de CI para código, dependencias y builds (sin cuenta obligatoria).
- **[Sentinel Runtime](https://github.com/javier20dev25/sentinel-runtime)** — correlación de comportamiento de procesos en Linux/Kubernetes, ingestión eBPF (Tetragon), validación de Event Contract v2 y cadena de custodia de evidencia SQLite a prueba de manipulación.
- **[Sentinel Audit](https://github.com/javier20dev25/sentinel-audit)** — orquesta analizadores, registra cobertura y evidencia, y deja la adjudicación final a una persona.
- **[Sentinel Oracle](https://github.com/javier20dev25/sentinel-oracle)** — autorización física de merges mediante WebAuthn/FIDO2 con autoridad separada del equipo de desarrollo.

También mantengo [Sentinel Benchmark](https://github.com/javier20dev25/sentinel-benchmark), un corpus para evaluar detección y evasiones, y [Sentinel Decoys](https://github.com/javier20dev25/sentinel-decoys), un laboratorio de señales defensivas.

## Trabajo en proyectos de la comunidad

### Pull requests abiertos

- [Fastify: documentar `globalDecompression: false`](https://github.com/fastify/fastify-compress/pull/439) — aclaración del comportamiento de descompresión.
- [Fastify: sustituir una instalación remota sin verificar por Corepack](https://github.com/fastify/fastify/pull/7141) — hardening del flujo de CI.
- [Fastify: verificar el checksum del instalador de Yarn](https://github.com/fastify/fastify/pull/7050) — integridad del instalador.
- [CycloneDX CLI: fijar GitHub Actions a SHAs completos](https://github.com/CycloneDX/cyclonedx-cli/pull/522) — reproducibilidad de CI.
- [Google GenAI SDK: retirar un script `prepare` automático](https://github.com/googleapis/js-genai/pull/2091) — reducir ejecución inesperada durante la instalación.

### Pull requests fusionados

- [FastMCP: recomendaciones de hardening de CI/CD](https://github.com/punkpeye/fastmcp/pull/303).
- [Awesome FIDO2: añadir Sentinel Oracle al catálogo](https://github.com/deepzz0/awesome-fido2/pull/1).

Los estados son los observados en GitHub al actualizar este perfil; pueden cambiar después.

## Actividad

<p>
  <a href="https://github.com/javier20dev25">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=javier20dev25&theme=transparent" alt="Estadísticas públicas de GitHub" height="160" />
  </a>
  <a href="https://github.com/javier20dev25">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=javier20dev25&theme=transparent" alt="Lenguajes más usados en repositorios públicos" height="160" />
  </a>
</p>

## Investigación responsable

Documento por separado las observaciones, los pasos reproducibles, las limitaciones y el impacto demostrado. Una señal informativa o una hipótesis no equivale a una vulnerabilidad confirmada; respeto el alcance y el proceso de divulgación de cada proyecto.

## Contacto

- GitHub: [@javier20dev25](https://github.com/javier20dev25)
- Sentinel Cloud: [sentinel-psi-nine.vercel.app](https://sentinel-psi-nine.vercel.app/)
- Correo: `sleytherjavier2025@gmail.com`