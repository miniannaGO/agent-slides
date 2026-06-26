# Reglas generales para proyectos de diapositivas HTML

Este repositorio contiene proyectos independientes de presentaciones HTML. Cada proyecto debe vivir en una carpeta propia dentro de la raiz del repositorio.

## Estructura esperada por proyecto

Cada carpeta de proyecto debe contener exactamente estos archivos base:

- `especificaciones.md`: unica fuente funcional, narrativa y visual de ese proyecto.
- `index.html`: unico archivo HTML; contiene la estructura semantica de la presentacion.
- `main.css`: unico archivo CSS; contiene estilos, layout, responsividad y animaciones CSS.
- `main.js`: unico archivo JS; contiene comportamiento, navegacion, integracion con librerias y animaciones JS.

No debe existir `AGENTS.md` dentro de las carpetas de proyecto. Solo debe existir este `AGENTS.md` en la raiz.

No crear archivos HTML, CSS o JS adicionales dentro del proyecto salvo pedido explicito del usuario.

## Fuente de verdad

Para crear o modificar cualquier `index.html`, `main.css` o `main.js` dentro de una carpeta de proyecto, se debe tomar como unica fuente de contenido el `especificaciones.md` de esa misma carpeta.

Reglas obligatorias:

- No agregar mensajes, procesos, roles, conclusiones o datos que no esten sustentados en el `especificaciones.md` del proyecto.
- Mantener el enfoque definido por cada especificacion, priorizando claridad, jerarquia visual y lectura rapida.
- Evitar profundidad tecnica innecesaria cuando la presentacion sea ejecutiva o gerencial.
- Separar estructura, estilos y comportamiento: `index.html`, `main.css` y `main.js`.
- Evitar codigo spaguetti dentro de `index.html`; solo se permiten enlaces a CSS/JS y marcado semantico de las diapositivas.
- Usar librerias por CDN si aportan valor real a presentacion, navegacion, graficos o animaciones.
- No descargar dependencias locales salvo que el usuario lo pida explicitamente.
- Cada presentacion debe comportarse bien en escritorio, tablet y mobile.
- La navegacion debe funcionar con teclado: flechas derecha, izquierda, arriba y abajo.
- Cada proyecto nuevo o modificado para diapositivas debe construirse y mantenerse con soporte funcional de light mode y dark mode, incluyendo un control visible para alternar el tema y persistencia de la preferencia cuando aplique.
- Si la especificacion define una cantidad de diapositivas, conservar exactamente esa cantidad de diapositivas principales.

## Criterios visuales para diapositivas

- Construir presentaciones manipulables, visuales y faciles de aceptar.
- Usar animaciones llamativas solo cuando ayuden a entender el flujo o la prioridad del mensaje.
- Evitar saturar las pantallas con texto.
- Evitar estetica generica de IA: no abusar de gradientes suaves, brillos, halos, orbes o fondos decorativos que no aporten lectura ejecutiva.
- Evitar reticulas, fondos o acentos construidos con `linear-gradient`/`radial-gradient` como decoracion. Si se necesita patron visual, usar bandas, rieles, divisores o bloques planos con color intencional.
- Dar presencia colorida con recursos controlados: franjas, acentos laterales, bloques de color, lineas de estado y codificacion por rol. No convertir la presentacion en un carnaval cromatico.
- Evitar `border-left` como acento dominante en cards o paneles; suele verse como plantilla generica. Preferir color en iconos, tags, numeros, bandas superiores discretas, divisores o estados internos.
- En presentaciones CEO, priorizar composicion sobria, jerarquia fuerte, contraste claro y superficies planas con color intencional.
- Evitar tarjetas dentro de tarjetas. Si un panel contiene elementos internos, preferir filas, divisores, rieles, bandas o listas estructuradas antes que multiples cards anidadas.
- Los numeros de pagina deben vivir en la navegacion fija inferior o en una zona de sistema equivalente, no dentro del contenido principal de cada diapositiva.
- Comprobar que el contenido no se superponga ni quede cortado en mobile.
- Mantener cada proyecto autocontenido dentro de su carpeta, excepto por las librerias cargadas via CDN.
