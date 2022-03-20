import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import '../styles/Style.css';
import '../styles/FloorPlan.css';

function FloorPlan () {
    return(
        <div>
            <h1>Floor Plan</h1>
                <div className="mainFloor">
                    <div className="floorDiv">
            
                        <Bedroom bedNum = "1" />
                        <Kitchen />
                        <Bath size = "Full"/>
                        <Bedroom bedNum = "2" />
                        <LivingRoom />
                        <Bath size = "half"/>
                        <Bedroom bedNum = "3" />
                    </div>
                </div>
        </div>
    )
}


export default FloorPlan;