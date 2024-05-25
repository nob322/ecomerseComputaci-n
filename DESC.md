# Estructura y Descripción de Archivos CSS

Este documento describe la estructura y las funciones de los archivos y carpetas CSS en el proyecto.



## Descripción de Archivos

### Carpeta: `base`

- **_animations.css:** Aquí se encuentran todas las animaciones utilizadas en el proyecto, incluyendo los keyframes. Esto permite gestionar de forma centralizada y reutilizable las animaciones para distintos elementos.
- **_colors.css:** Este archivo contiene todas las variables de colores y fondos para el proyecto, tanto para el modo claro como para el oscuro. Facilita el mantenimiento y la consistencia de la paleta de colores.
- **_default.css:** Incluye un reset de estilos para la mayoría de los elementos, asegurando compatibilidad y apariencia consistente en diferentes navegadores y dispositivos.
- **_fonts.css:** Contiene las importaciones de las fuentes utilizadas en el proyecto y define variables con los nombres de dichas fuentes para un uso fácil y coherente.
- **_import.css:** Aquí se agrupan todos los `@import` necesarios para cargar las hojas de estilo en un único archivo CSS, optimizando la carga desde el HTML.

### Carpeta: `components`

- **_appliedColors.css:** Aplica los colores y fondos a los elementos del documento utilizando las variables definidas en `_colors.css`. Garantiza que los estilos de color sean consistentes en todo el proyecto.
- **_appliedFonts.css:** Aplica las fuentes, tamaños, decoraciones y otros estilos relacionados con el texto, utilizando las variables definidas en `_fonts.css`.
- **_buttons.css:** Define los estilos de los botones, incluyendo formas, tamaños y colores. Proporciona una referencia centralizada para crear y modificar botones en el proyecto.
- **_effects.css:** Contiene efectos especiales como glass effects y transiciones específicas, permitiendo añadir dinamismo y detalles visuales atractivos a la interfaz.
- **_fade.css:** Aquí se definen los efectos de fade in y fade out, utilizados en interacciones como desplazamientos y animaciones temporales en el documento.

### Carpeta: `layout`

- **_boxes.css:** Estilos relacionados con las medidas y propiedades generales de cajas principales (como `main`, `header`, `aside`, `footer`). Se enfoca en aspectos como altura, anchura y bordes.
- **_flex.css:** Contiene todos los estilos relacionados con el uso de `display: flex` para cajas internas, incluyendo `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, entre otros.
- **_grid.css:** Define los estilos para cajas externas utilizando `display: grid`, facilitando un maquetado rápido. Incluye definiciones de `grid-template`, asignaciones de áreas, `justify-items`, `align-items`, etc.
- **_sections.css:** Estilos específicos para las secciones (`section`) del proyecto, enfocándose en propiedades como altura, anchura y bordes, sin interferir con los estilos definidos en los archivos mencionados anteriormente.

### Archivo Principal

- **main.css:** Archivo CSS principal que importa únicamente el archivo `_import.css`, el cual a su vez se encarga de importar todos los demás archivos CSS necesarios. Esto optimiza la carga y organización de estilos desde el HTML.

## Uso del Guion Bajo (_)

El guion bajo (`_`) se utiliza al inicio de los nombres de archivos CSS para indicar que estos son archivos parciales o módulos que no deberían ser cargados directamente en el HTML. En su lugar, son importados en otros archivos CSS, como se hace en `_import.css`. Esto ayuda a mantener una estructura de archivos organizada y modular, permitiendo un desarrollo y mantenimiento más eficientes.


## Estructura del Proyecto

```plaintext
css/
├── base/
│   ├── _animations.css
│   ├── _colors.css
│   ├── _default.css
│   ├── _fonts.css
│   └── _import.css
├── components/
│   ├── _appliedColors.css
│   ├── _appliedFonts.css
│   ├── _buttons.css
│   ├── _effects.css
│   └── _fade.css
├── layout/
│   ├── _boxes.css
│   ├── _flex.css
│   ├── _grid.css
│   └── _sections.css
└── main.css

