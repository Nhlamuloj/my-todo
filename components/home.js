

import AddItem from "./addItem";
import DisplayTransaction from "./displayTransaction";



function Home (props){



    
    return(
        <div className="container">
            <AddItem add={props.add} />
            <DisplayTransaction list={props.list}/>
        </div>
    )
}
export default Home;