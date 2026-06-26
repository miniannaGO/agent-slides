# Especificaciones para diapositivas CEO

## Objetivo

Crear una presentacion con una caratula inicial y 7 diapositivas de contenido para explicar, a nivel totalmente gerencial entre CEOs, el flujo de un cambio de software orientado a la actualizacion de la **Nueva Distribucion Contable y Presupuestal** de las **dependencias** de la Institucion: oficinas, facultades y escuelas.

La explicacion debe reducir resistencia al cambio. Debe ser concisa, visual, intuitiva, manipulable y orientada a decision ejecutiva, no tecnica. El mensaje central es que la distribucion correcta depende de un trabajo organizado, actualizado y oportuno entre las areas involucradas.

## Idea central

La nueva distribucion funciona como una cadena de informacion por instantes. Cada area entrega una base para la siguiente. Cuando una planilla se distribuye, el sistema guarda la informacion de ese momento como un **registro del momento**. Si despues cambia el PIT, el empadronamiento, una planilla o la informacion remunerativa, esos cambios no entran automaticamente en una distribucion ya generada: debe redistribuirse nuevamente.

La explicacion debe insistir en la idea de avance por tramos, como un flujo continuo:

**Escalafon actualizado -> PIT actualizado -> Planilla cerrada -> Distribucion de planilla -> Contabilidad -> Presupuesto / Planificacion**

## Procesos macro involucrados

### 1. Escalafon y datos del trabajador

El **Escalafon** es una base de informacion donde se administra la informacion laboral actualizada del trabajador: cargo, dependencia, estamento, modalidad, dedicacion, categoria, horas de trabajo y otros datos que sostienen la planificacion y la distribucion.

Mensaje ejecutivo: si la informacion laboral del trabajador no esta actualizada a tiempo, el PIT y Planilla pueden tomar datos desactualizados; la planificacion y la distribucion pierden precision.

### 2. PIT y trabajo individual docente

El **PIT (Plan de Trabajo Individual)** es la base inicial para el caso particular de docentes a tiempo completo. Su informacion se integra al calculo de distribucion junto con el empadronamiento existente de componentes de planilla versus cuentas contables.

Mensaje ejecutivo: si el PIT no esta administrado, completo y actualizado a tiempo, la distribucion de docentes y dependencias pierde precision.

### 3. RRHH / Remuneraciones / Planilla

RRHH trabaja directamente desde el sistema de **Remuneraciones**. Cada planilla debe distribuir sus pagos mediante un boton por planilla. Solo una planilla cerrada debe considerarse lista para una distribucion confiable.

La distribucion de planilla guarda la informacion de ese instante como un registro del momento. Si luego se actualiza informacion remunerativa, se abre o se modifica una planilla, se debe volver a distribuir para que Contabilidad trabaje con informacion actualizada.

Mensaje ejecutivo: Planilla es el punto operativo que convierte la informacion laboral y remunerativa en base distribuible.

### 4. Contabilidad

Contabilidad toma como base la informacion distribuida por Planilla, almacenada en tablas de base de datos, para visualizar y confirmar el pago de cada planilla distribuido en cuentas contables.

Contabilidad visualiza la distribucion entregada por Planilla y valida su centro de costos con las cuentas contables especificas calculadas desde la distribucion de planilla.

Mensaje ejecutivo: Contabilidad no debe cerrar con informacion antigua. Si Planilla cambia, Contabilidad necesita la nueva distribucion entregada por Planilla para cerrar correctamente.

### 5. Presupuesto / Planificacion

Presupuesto funciona como visor y analizador. No ejecuta mecanismos que cambien el calculo de distribucion; revisa la informacion generada desde Planilla y la observa con una clasificacion mas orientada a indicadores.

Planificacion toma la informacion para lectura institucional, control y seguimiento.

Mensaje ejecutivo: Presupuesto y Planificacion consumen informacion ya distribuida; su valor es visibilidad, control y alineamiento.

## Regla critica: empadronamiento existente y gobernado

La nueva distribucion se calcula de acuerdo con un **empadronamiento que ya existe**: los componentes de planilla ya estan empadronados versus las cuentas contables que corresponden a cada **tipo de pago**, cada **estamento** Y/O cada **modalidad del trabajador**.

Este punto debe recibir mucho hincapie. El empadronamiento es la matriz de correspondencia que le dice al sistema como clasificar lo que se paga. No se crea durante la distribucion: la distribucion consume lo que ya esta empadronado en ese momento.

El empadronamiento no debe mostrarse como paso operativo dentro del flujo visual, porque ya esta hecho y existe como regla de calculo previa. Debe presentarse como criterio existente que el sistema consulta al distribuir.

Si un componente, tipo de pago, estamento Y/O modalidad del trabajador no esta correctamente asociado a su cuenta contable, la distribucion resultante puede ser imprecisa aunque la planilla este cerrada.

Mensaje ejecutivo: el sistema automatiza el calculo, pero la calidad del resultado depende de que la matriz de empadronamiento existente este bien gobernada y actualizada.

## Regla critica: informacion por instante

La distribucion toma la informacion existente en el instante de ejecucion. No toma cambios posteriores de forma retroactiva.

Ejemplos que deben quedar claros:

- Si el PIT cambia despues de generar la planilla o despues de distribuir, los ultimos cambios del PIT no se reflejan automaticamente.
- Si se cambia la planilla despues de distribuir, Contabilidad seguira viendo el registro anterior hasta que se redistribuya.
- Si se actualiza el empadronamiento despues de distribuir, debe ejecutarse nuevamente la distribucion para que el nuevo criterio impacte.

Mensaje ejecutivo: cada cierre depende del registro correcto en el momento correcto.

## Diapositivas requeridas

### Caratula inicial: Nueva Distribucion Contable y Presupuestal

Tema: apertura ejecutiva de alto impacto.

Mensaje principal: presentar el cambio como una cadena institucional ordenada, moderna y lista para decision gerencial.

Enfoque:

- Debe ser muy llamativa visualmente.
- Debe mostrar de inmediato el nombre del cambio: **Nueva Distribucion Contable y Presupuestal**.
- Debe sugerir el flujo institucional sin entrar todavia al detalle: Escalafon, PIT, Planilla, Contabilidad y Planificacion.
- Debe sentirse como una presentacion CEO, no como una pantalla operativa.

Frase sugerida: **Un solo flujo institucional para cerrar bien y pagar a tiempo.**

### Diapositiva 1: Escalafon actualizado

Tema: base de informacion del trabajador.

Mensaje principal: Escalafon debe mantener actualizada la informacion laboral del trabajador para que PIT planifique y Planilla distribuya con informacion vigente.

Enfoque:

- Escalafon concentra informacion laboral del trabajador.
- La informacion debe estar actualizada a tiempo para planificar bien el PIT y distribuir correctamente en Planilla.
- Ejemplos de datos relevantes: cargo, dependencia, modalidad, dedicacion, estamento, categoria y horas de trabajo.
- Si un docente tiene informacion laboral desactualizada, la planificacion y la distribucion pierden precision.

Frase sugerida: **Informacion laboral vigente para planificar y distribuir bien.**

### Diapositiva 2: PIT a tiempo

Tema: importancia del llenado del PIT por parte de los docentes.

Mensaje principal: el PIT es la base inicial para que la distribucion de docentes y dependencias sea lo mas precisa posible.

Enfoque:

- Mientras mas acertado, completo y actualizado a tiempo este el PIT, mejor sera el calculo.
- Aplica especialmente a docentes a tiempo completo.
- El PIT no debe verse como tramite aislado, sino como insumo de gestion institucional.

Frase sugerida: **El calculo nace antes de la planilla: nace con el PIT correcto y a tiempo.**

### Diapositiva 3: Planilla cerrada y redistribucion

Tema: importancia de que Planilla cierre correctamente las planillas.

Mensaje principal: solo una planilla cerrada se distribuye bien. Si una planilla esta abierta, no debe tomarse como base confiable del calculo.

Enfoque:

- Planilla genera y cierra.
- Luego se ejecuta la distribucion por boton de cada planilla.
- Si despues de distribuir se cambia algo en planilla, se debe volver a distribuir para que el cierre contable este actualizado.
- Contabilidad depende de la ultima distribucion valida de Planilla.

Frase sugerida: **Cerrar no es el final; cerrar bien permite distribuir bien.**

### Diapositiva 4: Contabilidad y centro de costos

Tema: continuidad del rol de Contabilidad al tomar la distribucion generada por Planilla.

Mensaje principal: Contabilidad ya contabilizaba planillas para confirmar la distribucion y completar el flujo de pago de remuneraciones hasta el trabajador. Con la nueva distribucion mantiene ese rol, pero ahora trabaja con la informacion distribuida que Planilla entrega.

Enfoque:

- Contabilidad mantiene su responsabilidad de confirmar la contabilizacion de las planillas dentro del flujo de pago.
- Contabilidad trabaja sobre la ultima distribucion valida emitida por Planilla.
- Visualiza las cuentas contables calculadas desde la distribucion de planilla.
- Usa esa informacion para contabilizar y validar el nuevo centro de costos sin cambiar el rol operativo de Planilla.
- Si Planilla cambia o redistribuye, Contabilidad debe trabajar con el nuevo registro entregado.

Frase sugerida: **Contabilidad confirma el pago con la distribucion vigente que Planilla entrega.**

### Diapositiva 5: Presupuesto como visor

Tema: rol de Presupuesto.

Mensaje principal: Presupuesto no realiza el calculo ni modifica la distribucion. Es visor, control y lectura por indicadores.

Enfoque:

- Presupuesto revisa si la informacion distribuida desde Planilla es consistente.
- Visualiza la distribucion con mejor clasificacion por indicadores.
- Su funcion es observacion ejecutiva, no recalculo operativo.

Frase sugerida: **Presupuesto mira la calidad del dato; no altera el registro del momento.**

### Diapositiva 6: Flujo visual completo

Tema: flujo de informacion desde PIT hasta los nodos finales.

Debe mostrarse visualmente:

- Nodo inicial: **Escalafon**.
- Nodo siguiente: **PIT**.
- Criterio existente de calculo: **Empadronamiento existente de componentes vs cuentas contables por tipo de pago, estamento Y/O modalidad del trabajador**. No debe representarse como nodo ni paso del flujo.
- Nodo intermedio: **Planilla / Remuneraciones**.
- Accion interna de Planilla: generar, cerrar y distribuir por planilla.
- Nodo final 1: **Contabilidad**.
- Accion interna de Contabilidad: visualizar cuentas contables correctas, confirmar la distribucion y validar el nuevo centro de costos.
- Nodo final 2: **Planificacion / Presupuesto**.
- Accion interna de Planificacion / Presupuesto: visualizar indicadores y seguimiento.

Mensaje principal: la informacion avanza por una cadena de responsabilidad. Cada nodo necesita que el anterior este cerrado, actualizado y distribuido.

Frase sugerida: **Una sola cadena: si el registro queda desactualizado, todo el cierre queda desalineado.**

### Diapositiva 7: Conclusiones ejecutivas

Tema: cierre grafico sobre trabajo en equipo, oportunidad y pago.

Mensaje principal: la distribucion no es solo una funcion de software; es una coordinacion institucional para pagar a tiempo.

Enfoque:

- Escalafon con informacion laboral vigente.
- PIT actualizado a tiempo.
- Empadronamiento existente bien gobernado por tipo de pago, estamento Y/O modalidad del trabajador.
- Planillas cerradas y redistribuidas cuando haya cambios.
- Contabilidad valida antes del cierre.

Frase sugerida: **Trabajo coordinado y a tiempo: la condicion para cerrar bien y pagar a tiempo.**

## Tono visual y narrativo

- Publico objetivo: CEOs y alta gerencia.
- Evitar lenguaje tecnico profundo.
- Priorizar frases cortas, graficos claros y jerarquia visual.
- Usar animaciones llamativas, pero al servicio del entendimiento.
- Transmitir que el cambio ya fue trabajado y que el objetivo es aceptarlo sin resistencia.
- La presentacion debe poder navegarse con teclado: derecha, izquierda, arriba y abajo.
- La experiencia debe sentirse moderna, ejecutiva y manipulable.

## Criterio tecnico para index.html

- Usar librerias por CDN cuando aporten estructura o efectos visuales reales.
- No descargar librerias al proyecto local.
- Usar **Reveal.js por CDN** como base de presentacion para no reconstruir desde cero la navegacion, transiciones y soporte de teclado.
- Usar **GSAP por CDN** para animaciones ejecutivas mas llamativas en entradas, flujo, pulsos y elementos graficos.
- Mantener todo el contenido de las diapositivas dentro de `index.html` y basado solo en este archivo de especificaciones.
- El HTML debe abrirse directamente en navegador sin servidor local obligatorio.
