import "./Banner.css"
import React from "react";

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string // O ? indica que o campo é opcional
}

export const Banner = ({ enderecoImagem, textoAlternativo }: BannerProps) => {
    // JSX o React entende o que é isso e faz o append do componente
    return (
        <>
            <header className="banner">
                {/* <img src="/images/banner.png" alt="Principal banner of page organo"/> */}
                <img src={enderecoImagem} alt={textoAlternativo} />
            </header>
        </> //Good practice to use Fragment
    )
}

export default Banner