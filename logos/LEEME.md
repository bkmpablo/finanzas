# Logos de las cuentas

Pon aquí un PNG por cuenta y la app lo usará sola, sin tocar nada más.

## Cómo se llama cada archivo

El nombre sale del nombre de la cuenta en minúsculas, sin acentos y con
guiones en lugar de espacios, más `.png`:

| Cuenta en la app | Archivo             |
|------------------|---------------------|
| BBVA             | `bbva.png`          |
| N26              | `n26.png`           |
| MyInvestor       | `myinvestor.png`    |
| Trade Republic   | `trade-republic.png`|
| Revolut          | `revolut.png`       |
| Efectivo         | `efectivo.png`      |

Si renombras una cuenta, renombra también su archivo.

## Cómo deben ser

- PNG cuadrado, 128×128 o 256×256 va bien.
- Si tiene fondo transparente se verá sobre un recuadro claro.
- Pesa poco: por debajo de 50 KB cada uno.

## Si no hay archivo

No pasa nada: esa cuenta muestra sus iniciales, como hasta ahora. La app
intenta cargar el PNG y, si no está, lo descarta sin dar ningún error.

## Al añadirlos

Súbelos y sube también la versión en `sw.js` (`finanzas-v13` →
`finanzas-v14`), para que el iPhone no siga con la copia antigua en caché.

## Una advertencia

Los logotipos de los bancos son marcas registradas de esas empresas. Para
uso personal en tu propio móvil no suele haber problema, pero si subes el
repositorio en público los estás redistribuyendo. Es tu decisión; por eso
estos archivos los pones tú y no vienen incluidos.
