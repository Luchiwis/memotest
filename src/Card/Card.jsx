import "./Card.css"
import { useState, useContext } from "react"
import { Contexto1 } from "../App"

export function Card({ src }) {

    const [ultimoMostrado, setUltimoMostrado] = useContext(Contexto1)

    const [mostrar, setMostrar] = useState(false)

    const handleClick = () => {
        setMostrar(!mostrar)

        if (src == ultimoMostrado) {
            alert("ganaste")
        } else if (ultimoMostrado == null) {
            setUltimoMostrado(src)
        } else {
            alert("te equivocaste")
            setUltimoMostrado(null)
        }


    }

    return (
        <div className="card-memotest" data-show={mostrar} onClick={handleClick}>
            <img src={src} alt="Imagen no encontrada" />
        </div>
    )
}