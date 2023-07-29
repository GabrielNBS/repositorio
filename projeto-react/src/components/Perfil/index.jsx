import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: "Gabriel",
        avatar: 'https://github.com/GabrielNBS.png'
    }

    return (
        <div className="container">
            <img className='perfil-avatar' src={usuario.avatar} alt="" />
            <h3>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;