import { Card } from "../Card/Card"
import "./Grid.css"
import data from "../db.json"


export function Grid() {
    const crearMazoMezclado = () => {
        return data.concat(data)
        // TODO: usar la funcion shuffle para mezclar
    }

    console.log(crearMazoMezclado())
    return (
        <div className="grid-memotest">

        </div>
    )
}