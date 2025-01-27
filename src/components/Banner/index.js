import "./Banner.css"

export const Banner = () => {
    // JSX o React entende o que é isso e faz o append do componente
    return (
        <header className="banner">
            <img src="/images/banner.png" alt="Principal banner of page organo"/>
        </header>
    )
}

export default Banner