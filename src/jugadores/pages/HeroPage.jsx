import { useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../../helpers/GetHeroesById";
import Swal from 'sweetalert2';

export const HeroPage = () => {
    const { id } = useParams();
    const hero = getHeroesById(id);
    const navigate = useNavigate();

    const handleReturn = () => {
        if (hero.tipo === 'anime') {
            navigate('/animes');
        } else {
            navigate('/comics');
        }
    }

    if (!hero) {
        const currentUrl = window.location.href;
        const userInput = currentUrl.substring(currentUrl.lastIndexOf('/') + 1); 
    
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `El anime/comic "${userInput}" no existe!`,
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Volver a animes',
            cancelButtonText: 'Volver a comics'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/animes');
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                navigate('/comics');
            }
        });
        return null;
    }

    const { nombre, origen, genero, tipo } = hero;

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-4 mb-3">
                <div className="card" id="customcard" style={{ maxWidth: '100%', height: '100%' }}>
                    <div className="row g-0 h-100">
                        <div className="col-md-12">
                            <img src={`/assets/Heroes/${hero.id}.jpg`} alt={nombre} className="img-fluid rounded-start" style={{ height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="col-md-12 d-flex">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{nombre}</h5>
                                <p className="card-text">
                                    <small className="text-muted">Origen/Genero: {origen}{genero}</small>
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Tipo: {tipo}</small>
                                </p>
                                <p className="card-text mt-auto text-center">
                                    <button className="btn bg-black text-white" onClick={handleReturn}>Volver</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
