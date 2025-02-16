import { useState } from 'react';
import JAVA from './assets/java-logo.png';

function Course(props){
    
const [purchase,setPurchase] = useState(false)
    function BuyCourse(discount){
        console.log(props.name+" Purchased with "+discount+"% discount")
        setPurchase(true);
    }
return(
<div className="card">
    <img src={props.image} alt="" />
    <h3>{props.name}</h3>
    <p>{props.content}</p>
    <p>{props.price}</p>
    <button onClick={()=>BuyCourse(20)}>Buy Now</button>
    <p>{purchase?"Already Purchased" : "Get it for discount"}</p>
</div>

);
}

export default Course
