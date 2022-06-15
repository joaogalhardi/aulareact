import React from "react";
import { HeaderModificada, Titulo } from "./styles";

export default function Header(props){
    return(
        <HeaderModificada>
            <Titulo>TÍTULO DA PÁGINA {props.titulo}</Titulo>
        </HeaderModificada>
    )
}