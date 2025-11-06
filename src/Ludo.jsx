import { useState } from "react";

export default function Ludo() {
    // let [blueMoves,setblueMoves]=useState(0);
    // let [greenMoves,setgreenMoves]=useState(0);
    // let [yellowMoves,setyellowMoves]=useState(0);
    // let [pinkMoves,setpinkMoves]=useState(0);
    

    let [Moves,setMoves]=useState({blue:0,green:0,yellow:0,pink:0});

    function moveBlue(){
        setMoves((prevMoves)=>{
           return {...prevMoves,blue:prevMoves.blue+1}
        })  
    }
       function moveYellow(){
        setMoves((prevMoves)=>{
           return {...prevMoves,yellow:prevMoves.yellow+1}
        })  
    }
    
      function movePink(){
        setMoves((prevMoves)=>{
           return {...prevMoves,pink:prevMoves.pink+1}
        })  
    }
      function moveGreen(){
        setMoves((prevMoves)=>{
           return {...prevMoves,green:prevMoves.green+1}
        })  
    }
    
    return(
        <div>
            <p>Blue Moves:{Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={moveBlue}>+1</button>
            <p>Green Moves:{Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={moveGreen}>+1</button>
            <p>yellow Moves:{Moves.yellow}</p>
            <button style={{backgroundColor:"yellow",color:"black"}} onClick={moveYellow}>+1</button>
            <p>pink Moves:{Moves.pink}</p>
            <button style={{backgroundColor:"pink",color:"black"}} onClick={movePink}>+1</button>
        </div>
    );
    
}