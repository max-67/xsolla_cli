import React from "react";

const Counter = () => {
    let [likes, setLikes ] = React.useState(0);

    function Button1() {
        setLikes(likes += 1)
      }
      function Button2() {
          setLikes( likes-= 1);
      }
    return (
        <div>
        {likes}
        <button onClick={Button1}>+++++++</button>
        <button onClick={Button2}>------</button>
        </div>
    )
}

export default Counter;