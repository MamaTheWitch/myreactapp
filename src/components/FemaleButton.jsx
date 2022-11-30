
export function FButton() { 
    function handleClick (event) { 
        alert ("Do not play it! It is not finished, duh!"); 
    } 
    return <button style={{width: "5%"}} onClick={handleClick}><img  id="female-of-the-species" alt="female of the species" src={"/female.png"} /></button>; 
}