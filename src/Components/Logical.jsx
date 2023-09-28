import React from 'react'

const Logical = () => {

    const s = "123456789A";
    const row = 4;
    console.log(s)
    const finalArr = [];

    for (let i = 0; i < row; i++) {
        finalArr.push(new Array());
    }

    let h = 0;
    let down = false;
    for (let j = 0; j < s.length; j++) {
        finalArr[h].push(s[j]) ;
        if (h == row - 1) {
            down = false;
        }
        if (h == 0) {
            down = true;
        }
        if (!down)
        h--;
        else
        h++;
    }



    console.log(finalArr);
    var final = "";
    for(var i = 0; i < finalArr.length; i++){
        final += finalArr[i].join("");
    }

    console.log(final);
    return (
        <div>
           <h1>hello this is a logical task</h1>
        </div>
    )
}

export default Logical
