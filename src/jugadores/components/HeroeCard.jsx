import { Link } from "react-router-dom";


export const HeroeCard = ({id,nombre,tipo,origen,genero,descripcion}) => {
  
  const imgSrc = `/assets/Heroes/${id}.jpg`; 
    return (
        <>
            <div className="col-md-4 mb-3">
                <div className="card" style={{ maxWidth: '100%', height: '100%' }}>
                    <div className="row g-0 h-100">
                        <div className="col-md-4">
                        <img src={imgSrc} alt={nombre} className="img-fluid rounded-start" style={{ height: '100%', objectFit: 'cover' }} /></div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{nombre}</h5>
                                <p className="card-text">
                                    <small className="text-muted">Origen/Genero: {origen}{genero}</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Tipo: {tipo} </small>
                                </p>
                                <p className="card-text mt-auto text-center">
                                    <Link className="btn bg-black text-white" to={`/hero/${id}`} >Ver más</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
  )
}
