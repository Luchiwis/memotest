# Memotest de Lucio

*este es el mejor memotest que existe en el mundo mundial y lo hice yo*

## Reglas del juego
- El juego consiste en emparejar las cartas iguales
- El juego termina cuando se encuentran todos los pares de cartas
- El juego debe ser jugado por **dos jugadores**


## Cómo jugar

1. Ingresar el nombre de los jugadores
2. Clickear sobre las cartas para encontrar los pares
3. Ganará el jugador que encuentre más pares

## Tecnologías utilizadas
- HTML
- CSS
- JavaScript
- React
- TailwindCSS


|Modo facil| Modo dificil|
|---       |---          |
| 4x4      | 6x6         |
| 8 pares  | 18 pares    |

### codigo
esto fue lo que mas me costo hacer hasta ahora
```javascript
export function shuffle(arr) {
    // funcion que desordena el array
    let arr2 = []
    while (arr.length > 0) {
        const posicionRandom = Math.round(Math.random() * arr.length)
        const elemento = arr.splice(posicionRandom, 1)
        arr2 = arr2.concat(elemento)
    }
    return arr2
}
```