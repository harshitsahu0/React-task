import React from 'react'

const Demo = () => {

  let s = "THISISSAMPLESENTENCE";
  let row=3;

  var str = "";

  var finalStr = "";

  //   // zigzag =
  // //  T       I       M       S       E
  // //  H   S   S   A   P   E   E   T   N   E
  // //  I       S       L       N       C

  //   for(let i=0; i<row; i++)
  //   {
  //     for(let j=0; j<s.length; j++)
  //     {
  //       // if(i==0)
  //       // {
  //       //     if(j+1%2==0){
  //       //       document.write(" ")
  //       //     }else{
  //       //       document.write(s[j])
  //       //     }

  //       // }
  //       let k=1;

  //       if(i===0)
  //       {

  //         if(j==0 || j==4 || j==8 || j==12 || j==16){
  //           // debugger
  //           // document.write(s[j] + " ");
  //           finalStr += s[j];
  //           str += s[j] + " ";
  //         }else{
  //           document.write("");
  //         }
  //       }else if(i===1){
  //         if(j==1||j==3||j==5||j==7||j==9||j==11||j==13||j==15||j==17||j==19){
  //           // document.write(s[j] + " ");
  //           str+= s[j];
  //           finalStr += s[j];
  //         }else{

  //         }
  //       }else if(i===2){
  //         if(j==2||j==6||j==10||j==14 || j==18)
  //         {
  //           // document.write(s[j] + " ");
  //           finalStr += s[j];
  //           str+= s[j] + " ";
  //         }
  //         else{
  //           document.write(" ");
  //         }
  //       }


  //     }
  //     // document.write('<br/>')
  //     str += "\n";
  //   }  
  // document.write(str);

  // document.write(str+"\n"+finalStr);

  console.log("===================================");

  // let n=3;
  // let str= "TIMSEHSSAPEETNEISLNC";



  // if (n == 1) {
  //   document.write(`${str}<br/>`);
  // }
  // let res = "";
  // let arr = new Array(n).fill("");
  // let down = false;
  // let row = 0; // helps in building individual blocks of strings

  // for (let i = 0; i < str.length; i++) {
  //   arr[row] += str[i];
  //   if (row == n - 1) {
  //     down = false;
  //   }
  //   if (row == 0) {
  //     down = true;
  //   }
  //   if (!down)
  //     row--;
  //   else
  //     row++;
  // }

  // for (let i = 0; i < n; i++) {
  //   document.write(arr[i]);
  // }

  // document.write("<br/>")

  // console.log(arr);


  let k=1,l=2,m=3;

  for(let i=0;i<row;i++){
    for(let j=0;j<s.length;j++){
      if(i===0)
      {
        if(j===0||j===k+1){
          str += s[j] + " ";
          k=j+3
          finalStr+= s[j];
        }
      }else if(i===1){
        if(j===1||j===l+1){
          str += s[j];
          l=j+1;
          finalStr+= s[j];
        }
      }else if(i===2){
        if(j===2||j===m+1){
          str += s[j] + " ";
          m=j+3;
          finalStr+= s[j];
        }
      }
    }
    str += "\n";
  }

  console.log(str);
  console.log(finalStr);


  // let arr = [];
  // let n=20;
  // let count = 0;
  // for(let i=1;i<n;i++)
  // {
  //   arr[i]=false;
  // }
  // for(let j=1; j<=n;j++){
  //     for(let k=j-1 ; k<arr.length;k++){
  //       let z = k+1;
  //       if(z%j==0){
  //         if(arr[k]==true){
  //           arr[k]=false;
  //         }else{
  //           arr[k]=true;
  //         }
  //       }
  //     }
  //   }

  //   for(let i=0;i<arr.length;i++){
  //     if(arr[i]===true){
  //       count++;
  //     }
  //   }

  //   console.log(arr);
  //   console.log("Number of door which are still open : ",count);

  return (
    <div style={{ width: "100%", border: "1px solid red" }}>
      <h1>Demo Div</h1>
      <p>Hello World!</p>
    </div>
  )
}

export default Demo
