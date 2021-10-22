import App from './App';
import './Cards.css'
// import { Rovo } from './DataArr'

const Card = ({Rovo}) => {
    return (
    <div className="cont">
        {
        Rovo.map((user,i) => <App key={Rovo[i].id} name={Rovo[i].name} email={Rovo[i].email} imgL={`https://robohash.org/${Rovo[i].id}`} />)      
        }
    </div>
    );
}

export default Card;