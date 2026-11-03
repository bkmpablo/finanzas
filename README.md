# Finanzas

App para controlar ingresos, gastos y cuentas desde el iPhone. Funciona sin conexión y guarda los datos en el propio móvil.

## Qué hace

- **Movimientos**: gastos, ingresos y traspasos entre cuentas, con categoría, fecha y nota.
- **Movimientos fijos**: alquiler, nómina, suscripciones… se crean solos cada mes.
- **Presupuestos** por categoría, con aviso al 80% y al pasarte.
- **Previsión** de fin de mes y **comparativa** con el mes anterior.
- **Cuentas**: saldo de cada banco y patrimonio total.
- **Importar el extracto del banco** en CSV, con detección de duplicados.

## Publicar en GitHub Pages

1. Sube todos los archivos de esta carpeta a la raíz del repositorio.
2. Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)` → Save.
3. Al cabo de un minuto estará en `https://TU-USUARIO.github.io/finanzas/`.

## Instalar en el iPhone

Abre la URL en Safari → Compartir → "Añadir a pantalla de inicio".

## Actualizar

Sube los cambios y sube también la versión en `sw.js` (por ejemplo `finanzas-v10` → `finanzas-v11`). Si no, el iPhone puede seguir mostrando la versión que tiene en caché.

## Copias de seguridad

Los datos viven solo en ese iPhone, en el almacenamiento de Safari. Si borras la app de la pantalla de inicio o los datos de Safari, se pierden.

Ajustes → "Exportar copia de seguridad" genera un `.json` que puedes guardar en Archivos o iCloud. Para restaurar, "Importar copia de seguridad".

## Importar extractos del banco

Descarga el extracto en CSV desde la web de tu banco y usa Ajustes → "Importar extracto del banco (CSV)". La app te deja indicar qué columna es la fecha, el concepto y el importe, sugiere una categoría por el concepto y desmarca las líneas que ya tienes apuntadas. Las categorías que corrijas se recuerdan para la próxima importación.

## Añadir desde un enlace (Atajos de iOS)

La app acepta parámetros en la URL, útil solo si la usas en Safari y no desde el icono:

```
?gasto=12,5&cat=Ocio&nota=Cine
?ingreso=1200&cat=Nómina&cuenta=BBVA
?nuevo=gasto
```

Si faltan el importe o la categoría, se abre el formulario con lo que haya.
