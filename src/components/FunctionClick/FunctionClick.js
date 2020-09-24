import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log('clicked')
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("sajek-container");
            loginArea.style.display = "none";

        })
    }
    return (
        <div>
            <div className="sajek-container">
                <button  onClick={clickHandler} id = "login">this is sajek</button>
                <h1>fuck off</h1>
            </div>   
        </div>
    )
}
export default FunctionClick