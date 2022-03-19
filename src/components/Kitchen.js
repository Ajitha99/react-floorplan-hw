import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen (){
    return(
    <div>
        <div className="kitchenDiv">
            <h3>Kitchen</h3>
            <div className="kitProDiv">
                <Oven />
                <Sink />
            </div>
        </div>
    </div>
    )
}
export default Kitchen;