# Challenge para Avoris (Mindata)

Maquetación de una página de viajes a partir de diseño en Figma, implementada con Angular y SCSS.

## Tecnologías aplicadas

- Angular
- Typescript
- SCSS
- Git

## Entorno

- Node.js: v20.x
- Angular CLI: 21.x

## Enfoque

- Mobile-first
- Arquitectura basada en componentes
- Metodologia BEM para estilos

## Arquitectura
He optado por una arquitectura basada en componentes organizada en 3 capas: `shared` para componentes reutilizables; `feature` para componentes específicos de página; y `models y data` para incluir y organizar interfaces y mock de datos simulados.

## Estilos
El sistema de diseño lo he implementado mediante variables SCSS organizadas en los tres niveles que aparecen en Figma: `global`, `semantic` y `components`. Se han creado dos mixins. Uno para los breakpoints y otro para hacer el cálculo de píxeles a rem con base en 16px. También se ha aplicado un reset y se han añadido variables para tipografías y espacios correspondientes a cada resolución propuesta.

## ViewEncapsulation
Usado en los componentes con selector sobre elemento nativo para evitar conflictos con atributos de encapsulación de Angular al aplicar estilos en host element.

## Funcionalidad
He añadido filtro real en la categoría de `Aventura` para que se seleccionen las cards con la tag indicada mediante `EventEmitter`. El slider me dió problemas al instalar la librería de swiper, de modo que se ha hecho a mano.

## Accesibilidad y SEO
He añadido atributos ARIA y metadatos tanto en el `index.html` como en la estructura html de todas las páginas.

## Levantar proyecto

```bash
npm install
ng serve
``` 

Url de ejecución: http://localhost:4200/