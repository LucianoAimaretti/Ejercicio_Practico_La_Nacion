# Primer Ejercicio

## Assets

> [Maqueta](http://especiales.lanacion.com.ar/arc-css/acumulado.asp)

> Endpoint: `https://api-test-ln.herokuapp.com/articles [get method available]`

## Objetivos

-   A partir del tag main de html, componentizar todos los elementos que considere necesario.
-   El endpoint provisto contiene un json con lo que representan 30 notas o artículos. con estos datos se deben alcanzar los siguientes objetivos:
    -   Agrupar, totalizar y ordenar de mayor a menor los tags encontrados en las notas ▪ los tags serán encontrados en cada artículo dentro del atributo “taxonomy.tags”.
    -   Del ordenamiento anterior mostrar los primeros 10 tags debajo del título.
-   El resultado de este item debe ser similar al siguiente resultado para ser mostrado en la lista:
    `[ { "slug":"huevo-tid47236", "text":"Huevo", "count":13 }, { "slug":"leche-tid47244", "text":"Leche", "count":9 }, { "slug":"arroz-tid47136", "text":"Arroz", "count":7 }, { "slug":"manteca-tid47257", "text":"Manteca", "count":7 }, { "slug":"azucar-tid47141", "text":"Azúcar", "count":7 }, { "slug":"harina-0000-tid48184", "text":"Harina 0000", "count":5 }, { "slug":"ajo-tid47126", "text":"Ajo", "count":4 }, { "slug":"pescados-tid67216", "text":"Pescados", "count":4 }, { "slug":"frutas-tid67217", "text":"Frutas", "count":4 }, { "slug":"semillas-de-sesamo-tid47338", "text":"Semillas de sésamo", "count":3 } ] `
    -   El href a contener debe ser: “/tema/[tag.slug]”.
    -   Mostrar los 30 artículos en la grilla de artículos.
        -   Listar sólo artículos con el `"subtype":"7"`.
        -   La fecha a mostrar debe ser la de display_date.
        -   El formato de la fecha debe salir como sale en la maqueta.
        -   El título a mostrar se encuentra en en el atributo `headline.basic`.
        -   tomar de imagen para el artículo la que sale en el `promo_items.url`.

## Se espera observar:

-   Una web app hecha en React from Scratch o bien usar Next.js
-   Debe cumplir con Server Side Rendering.
-   Repositorio con el código en GitHub.
-   Implementar Hooks.
-   Usar solo React y/o Redux si lo considera necesario para manejo de estados entre componentes.

## Será un plus si agrega:

-   Uso de programación declarativa.
-   Para manejo de estado entre componentes, se valorará Context API de React . Implementar una API Client patterns para consultas del Endpoint.
-   Implementar Async/Await para la consulta de los datos remotos.
-   Test unitarios o implementar TDD.
-   Usar docker o bien implementar el código resultante en alguno Paas gratuito como heroku o now.sh, etc.

### App

## App funcional: [Link App](https://la-nacion-ejercicio-practico.vercel.app/)

## App Local

En caso de querer la app en local, se deben seguir los siguientes pasos:

-   Abrir la ventana de comandos y ejecutar `git clone https://github.com/LucianoAimaretti/Ejercicio_Practico_Frontend_Ssr.git`.

-   Ingresamos en la carpeta contenedora y ejecutamos `npm i`.

-   Luego configuramos una variable de entorno llamada `REACT_APP_URL_LA_NACION` con el endpoint brindado.

-   Por utimo ejecutamos `npm start`.

## App Server - Express

En caso de querer la app en express, se deben seguir los siguientes pasos:

-   Abrir la ventana de comandos y ejecutar `git clone https://github.com/LucianoAimaretti/Ejercicio_Practico_Frontend_Ssr.git`

-   Ingresamos en la carpeta contenedora y ejecutamos `npm i`.

-   Luego configuramos una variable de entorno llamada `REACT_APP_URL_LA_NACION` con el endpoint brindado

-   Ejecutamos `npm run build` y por ultimo `npm run ssr`.
