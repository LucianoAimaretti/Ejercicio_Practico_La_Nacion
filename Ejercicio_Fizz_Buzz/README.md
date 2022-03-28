# Segundo Ejercicio - Fizz-Buzz

Se debe entregar el código fuente (o repo git) junto con la documentación que crea necesaria para comunicar el diseño, si lo considera útil, también se pueden agregar test unitarios

Escriba un script que a partir de un array de ints devuelva un array de strings aplicando las siguientes reglas:

-   Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
-   Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
-   Devuelve FizzBuzz si el número es divisible por 3 y por 5.
-   Puedes utilizar cualquier lenguaje que consideres apropiado.

## Diseño

El ejercicio es un FizzBuzz clasico con un agregado mas, su diseño es simple.

Contamos con dos funciones:

-   includeNumber
-   fizzBuzz

### includeNumber

Esta funcion es la encargada de verificar si un numero esta incluido en otro.

Dicha funcion recibe dos parametros, **_number_** quien hace referencia al numero que vamos buscar y **_compareNumber_** quien hace referencia al numero donde vamos a buscar el anterior parametro.

Comenzamos tomando transformando **_number_** usando `toString()` que devuelve una cadena y este valor es asignado a la variable `str`

Por ultimo damos uso del metodo `include()` en `str` para buscar en dicha variable al numero deseado - **_number_** - y este devuelve `true` o `false`

### fizzBuzz

Esta es la encargada de realizar la logica para saber si se cumplen con las condiciones solicitadas y devolver el respectivo string.

La funcion recibe un array como parametro, quien llamaremos `list`. Definimos una variale llamada `stringList`, la cual es un array vacio donde iremos almacenando los string's

Luego tenemos un ciclo **_for_** el cual ejecutara un codigo hasta recorrer todo el array `list`.

> En dicho codigo hacemos uso del operador condicional ternario de Javascrip, donde definimos una condicion - `cond` - que se evalua en `true` o `false` y dos expresiones `exp1` y `exp2`, ejecutandose `exp1` en caso de ser afirmativa dicha condicion, sino en caso contrario, se ejecuta `exp2`, siendo su sintaxis: `cond ? exp1 : exp2`

Continuando con el codigo primero tomamos el primer valor del array y comprobamos si su resto dividido 3 y 5 da 0, en el caso verdadero se psuhea el string **_FizzBuzz_** en el array `stringList`, en caso contrario volvemos a utilizar el operador condicional, para definir otra condicion, evaluando esta vez si el resto dividido 3 da 0 o si el numero 3 esta incluido en este, dando uso de la funcion ya mencionada `includeNumber`, en caso verdadero, pushea el string **_Fizz_**, caso contrario, definimos nuevamente una condicion, en este caso si el resto dividido 5 da 0 o si dicho numero se encuentra dentro de el e pusheamos **_Buzz_**, en caso contrario no se pushea nada

# Algunas preguntas:

-   ¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y porque?

> Utilizaría validaciones para que solo se permitan determinadas extensiones y no se exceda un peso determinado y luego lo guardaría en un sistema de archivos para luego referenciarlo en una base de datos.

-   ¿Implementaría un cache del lado del cliente? ¿Por qué?

> Si, ya que permite la carga rápida del la aplicación web, también permite el almacenamiento de la información y la personalización de la experiencia del usuario. Un ejemplo puede ser guardar si un usuario inicio sesión anteriormente, el carrito de compra, documentos generados por la aplicación que puedan ser visualizados offline
