import { getHerosByTipo } from "../../helpers/GetHeroesByTipo"
import { HeroeCard } from "./HeroeCard";


export const HeroeList = ({tipo}) => {
    const heroes = getHerosByTipo(tipo);

    return (
        <>
            <h1 className="Destacados">Destacados</h1>
            <div className="container">
                <div className="row">
                    { 
                        heroes.map(aux => (
                            <HeroeCard key={aux.id} {...aux} />
                        ))  
                    }
                </div>
            </div>
        </>
    )
}