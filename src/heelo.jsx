import React from "react";
export const hello=() => {

    return ( <div id="container">
        <h1>hi jell</h1>
    </div>
    );
};

export const hello1 =()=>{
    return React.createElement(
         "div",{id:"container"},
         React.createElement("h1",null,"hello jel")
    );
    
};
export const  Notifications=()=> {

    const notificationCount = 3;

    return (
        <div>

            <h2>Notifications</h2>

            {notificationCount > 0 && (
                <p>You have new notifications!</p>
            )}

        </div>
    );

}

 