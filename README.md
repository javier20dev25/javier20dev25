# Javier Astaroth

**Fundador e investigador de seguridad en NIGHTTRACE Security Intelligence**  
**Inspector de aduanas en Nicaragua · Desarrollador de herramientas defensivas de software**

Construyo herramientas e infraestructura para analizar cambios de código, riesgos de cadena de suministro, seguridad en tiempo de ejecución, gobernanza de agentes de IA y flujos de CI/CD. Mi trabajo combina investigación práctica con software abierto y evidencia reproducible.

**Enfoque:** seguridad de aplicaciones · supply chain · eBPF & runtime security · gobernanza de agentes de IA · GitHub Actions · SAST · autorización física de merges

---

## NIGHTTRACE Security Intelligence

NIGHTTRACE es una iniciativa de investigación e ingeniería de seguridad defensiva dedicada a diseñar planos de control deterministas, sensores de comportamiento a nivel kernel y herramientas de gobernanza técnica para entornos de desarrollo y producción.

- **Filosofía:** Evidencia verificable antes que conjeturas, defensas deterministas fail-closed, trazabilidad de código y cero exageración de capacidades.
- **Liderazgo:** Javier Astaroth ([@javier20dev25](https://github.com/javier20dev25)), Fundador & Lead Researcher.
- **Contacto institucional:** `nighttracesec@gmail.com`
- **Página de la agencia:** [sentinel-psi-nine.vercel.app/nighttrace](https://sentinel-psi-nine.vercel.app/nighttrace)

---

## Ecosistema de Productos

### Gobernanza y Orquestación Defensiva

- **[NOARTEX](https://github.com/javier20dev25/NOARTEX)** ([Página técnica](https://sentinel-psi-nine.vercel.app/noartex)) — Plano de control y gobernanza de capacidades defensivas para agentes de IA operando contra amenazas autónomas (como la clase ARTEX). Provee un motor de políticas fail-closed con niveles de riesgo R0–R3, bus de eventos reactivo con prioridades, ingesta continua de streaming eBPF (Tetragon), contención en laboratorio con rollback verificado y memoria de casos ligada por hashes SHA256 (latencia de ciclo cerrado: ~234 ms).

### Plataforma Sentinel

Sentinel es un conjunto de herramientas de seguridad defensiva con funciones distintas. Cada producto puede utilizarse por separado o integrarse en equipo.

- **[Sentinel Cloud](https://sentinel-psi-nine.vercel.app/)** — servicio web para análisis de pull requests, evidencia de GitHub y colaboración de equipo.
- **[Sentinel CLI](https://github.com/javier20dev25/sentinel-cli)** — análisis local y flujos de CI para código, dependencias y builds (sin cuenta obligatoria).
- **[Sentinel Runtime](https://github.com/javier20dev25/sentinel-runtime)** — correlación de comportamiento de procesos en Linux/Kubernetes, ingestión eBPF (Tetragon), validación de Event Contract v2 y cadena de custodia de evidencia SQLite a prueba de manipulación.
- **[Sentinel Audit](https://github.com/javier20dev25/sentinel-audit)** ([Web](https://sentinel-psi-nine.vercel.app/sentinel-audit)) — orquesta analizadores, registra cobertura y evidencia, y deja la adjudicación final a una persona.
- **[Sentinel Oracle](https://github.com/javier20dev25/sentinel-oracle)** ([Web](https://sentinel-psi-nine.vercel.app/sentinel-oracle)) — autorización física de merges mediante WebAuthn/FIDO2 con autoridad separada del equipo de desarrollo.

También mantengo [Sentinel Benchmark](https://github.com/javier20dev25/sentinel-benchmark), un benchmark tool-agnostic de 50 pruebas de evasión en 10 categorías que se puede ejecutar contra cualquier escáner, y [Sentinel Decoys](https://github.com/javier20dev25/sentinel-decoys), un laboratorio de vectores de prueba (secretos falsos, firma EICAR y payloads ofuscados) para validar señales defensivas.

---

## Trabajo en proyectos de la comunidad

Estado consultado con GitHub API: **23 pull requests abiertos** y **30 cerrados o fusionados**. [Ver todos los abiertos](https://github.com/search?q=author%3Ajavier20dev25+is%3Apr+is%3Aopen&type=pullrequests) · [Ver todos los cerrados](https://github.com/search?q=author%3Ajavier20dev25+is%3Apr+is%3Aclosed&type=pullrequests).

### Pull requests abiertos (selección reciente)

- [securego/gosec #1839](https://github.com/securego/gosec/pull/1839) — evitar checkout del head del fork en el job privilegiado de revisión AI.
- [ValentinTorassa/blackice #86](https://github.com/ValentinTorassa/blackice/pull/86) — descartar consultas DNS sin regla en `block-all`.
- [botingw/rulebook-ai #78](https://github.com/botingw/rulebook-ai/pull/78) — usar `astral-sh/setup-uv` en lugar de `curl`/`bash` sin fijar.
- [espressif/esp-matter #1919](https://github.com/espressif/esp-matter/pull/1919) — fijar el script de instalación de esp-emulator a un SHA inmutable.
- [traceloop/openllmetry #4675](https://github.com/traceloop/openllmetry/pull/4675) — corregir disparador y parseo de acciones en `lint-pr`.
- [fastify/fastify-compress #439](https://github.com/fastify/fastify-compress/pull/439) — documentar `globalDecompression: false`.
- [CycloneDX/cyclonedx-cli #522](https://github.com/CycloneDX/cyclonedx-cli/pull/522) — fijar GitHub Actions a SHAs inmutables.
- [fastify/fastify #7141](https://github.com/fastify/fastify/pull/7141) — reemplazar instalación remota sin verificar por `corepack`.
- [fastify/fastify #7050](https://github.com/fastify/fastify/pull/7050) — verificar checksum del instalador de Yarn.
- [googleapis/js-genai #2091](https://github.com/googleapis/js-genai/pull/2091) — retirar el script `prepare` automático.
- [modelcontextprotocol/typescript-sdk #2603](https://github.com/modelcontextprotocol/typescript-sdk/pull/2603) — fijar GitHub Actions a SHAs inmutables.
- [javier20dev25/sentinel-cli #5](https://github.com/javier20dev25/sentinel-cli/pull/5) — severidad de origen y dedupe de conteos en `audit-deps`.

### Pull requests cerrados o fusionados (selección reciente)

- [nasa/spacewasm #220](https://github.com/nasa/spacewasm/pull/220) — fusionado; sanear contenido suministrado por artefactos en el workflow de comentarios.
- [bordoni/fakerpress #250](https://github.com/bordoni/fakerpress/pull/250) — fusionado; usar `oven-sh/setup-bun` en `generate-zip`.
- [punkpeye/fastmcp #303](https://github.com/punkpeye/fastmcp/pull/303) — fusionado; hardening de CI/CD.
- [deepzz0/awesome-fido2 #1](https://github.com/deepzz0/awesome-fido2/pull/1) — fusionado; añadir Sentinel Oracle al catálogo.
- [javier20dev25/sentinel-cloud #48](https://github.com/javier20dev25/sentinel-cloud/pull/48) — fusionado; acceso por API token a scans completos de PR.
- [javier20dev25/sentinel-cloud #47](https://github.com/javier20dev25/sentinel-cloud/pull/47) — fusionado; corregir desbordamiento móvil en tablas de Oracle.
- [javier20dev25/sentinel-cli #7](https://github.com/javier20dev25/sentinel-cli/pull/7) — fusionado; progreso de motores en PR scans.
- [nodejs/undici #5880](https://github.com/nodejs/undici/pull/5880) — cerrado; publicar con npm provenance.
- [modelcontextprotocol/typescript-sdk #2602](https://github.com/modelcontextprotocol/typescript-sdk/pull/2602) — cerrado; fijar GitHub Actions a SHAs inmutables.

Los estados pueden cambiar después de esta actualización.

---

## Actividad

<p>
  <a href="https://github.com/javier20dev25">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=javier20dev25&theme=transparent" alt="Estadísticas públicas de GitHub" height="160" />
  </a>
  <a href="https://github.com/javier20dev25">
    <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=javier20dev25&theme=transparent" alt="Lenguajes más usados en repositorios públicos" height="160" />
  </a>
</p>

---

## Investigación responsable

Documento por separado las observaciones, los pasos reproducibles, las limitaciones y el impacto demostrado. Una señal informativa o una hipótesis no equivale a una vulnerabilidad confirmada; respeto el alcance y el proceso de divulgación de cada proyecto.

---

## Contacto

- **Agencia:** NIGHTTRACE Security Intelligence (`nighttracesec@gmail.com`)
- **Sitio NIGHTTRACE:** [sentinel-psi-nine.vercel.app/nighttrace](https://sentinel-psi-nine.vercel.app/nighttrace)
- **Plataforma Sentinel:** [sentinel-psi-nine.vercel.app](https://sentinel-psi-nine.vercel.app/)
- **NOARTEX:** [github.com/javier20dev25/NOARTEX](https://github.com/javier20dev25/NOARTEX) · [Documentación](https://sentinel-psi-nine.vercel.app/noartex)
- **GitHub:** [@javier20dev25](https://github.com/javier20dev25)
- **Correo personal:** `sleytherjavier2025@gmail.com`
