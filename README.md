# Portafolio Profesional — Guido Solar Cabrera

Sitio web desarrollado en **Vue 3** (`<script setup lang="ts">`), **TypeScript**, **Tailwind CSS v4** y directrices de diseño **Material Design 3**, optimizado para despliegue estático en **GitHub Pages**.

---

## 🎨 Paleta de Colores Aplicada
- `--charcoal-blue: #273e47` (Tono neutro profundo, textos y modo oscuro)
- `--cherry-rose: #a4243b` (Acento principal y botones de acción)
- `--sand: #d8c99b` (Bordes sutiles y fondos tonales)
- `--golden-apricot: #d8973c` (Acentos cálidos y resaltes)
- `--burnt-caramel: #bd632f` (Categorías y notas de arquitectura)

---

## 📁 Estructura Modular del Proyecto

```text
/src
├── /components
│   ├── /common
│   │   ├── MaterialButton.vue     # Botón con variantes M3
│   │   ├── MaterialCard.vue       # Tarjetas con bordes sutiles
│   │   ├── MaterialChip.vue       # Chips para filtros interactivos
│   │   ├── MaterialFab.vue        # Botón minimalista de retorno al inicio
│   │   └── ThemeToggle.vue        # Selector de modo claro / oscuro
│   ├── /layout
│   │   ├── Navbar.vue             # Barra superior con Top Bar Contract
│   │   └── Footer.vue             # Pie de página limpio con enlaces
│   ├── /sections
│   │   ├── HeroSection.vue        # Presentación personal y enlaces
│   │   ├── ExperienceSection.vue  # Trayectoria laboral con filtros dinámicos
│   │   ├── ProjectsSection.vue    # Casos reales e impacto
│   │   ├── SkillsMatrixSection.vue# Tecnologías sin etiquetas de niveles
│   │   ├── EducationSection.vue   # INACAP y certificaciones
│   │   └── ContactSection.vue     # Conexión directa
├── /data
│   └── cvData.ts                  # Datos dinámicos del desarrollador
├── /types
│   └── portfolio.ts               # Tipos TypeScript
├── App.vue                        # Componente raíz
├── index.css                      # Variables CSS y tokens de diseño
└── main.ts                        # Punto de entrada de Vue 3
```