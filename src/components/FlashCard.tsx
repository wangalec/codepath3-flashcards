import { useState } from "react";

export default function FlashCard(props: any){
    const [isFront, setFront] = useState(true);
    const swap = () => {
        setFront(!isFront);
    }
    return(
        <div onClick={swap} className="card">
            {(isFront == true ? 
            <div>
                <h2> {props.front} </h2>
            </div>
            :
            <div>
                <h2> {props.back} </h2>
            </div>
            )}
        </div>
    )
}