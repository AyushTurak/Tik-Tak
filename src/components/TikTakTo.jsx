import React, { useState } from 'react'
import './TikTakToe.css'
import circle from '../assets/circle.png'
import cross from  '../assets/cross.png'

let data = ["","","","","","","","",""  ];

function TikTakTo() {

const [lock , setLock] = useState(false)
let [count ,setCount] = useState(0)

const toggle = (e,num) => {
if(lock){
  return 0;
}
if(count%2==0)
{
e.target.innerHTML = `<img src='circle.png' alt='1/>` ;
data[num]=x ;
setCount(count = count + 1);
}
else
{
e.target.innerHTML = `<img src='cross.png'/>` ;
data[num]=x ;
setCount(count = count + 1);
}
}

  return (
    <div className='container'>
      <h1 className='TikTakToe'>TIK TAK TOE<span className='bg-red-500'> React </span> </h1>
      <div className="board">

<div className="row1">
<div className="boxes" onClick={(e)=>toggle(e,0)}></div>
<div className="boxes" onClick={(e)=>toggle(e,1)}></div>
<div className="boxes" onClick={(e)=>toggle(e,2)}></div>
</div>

<div className="row2">
<div className="boxes" onClick={(e)=>toggle(e,3)}></div>
<div className="boxes" onClick={(e)=>toggle(e,4)}></div>
<div className="boxes" onClick={(e)=>toggle(e,5)}></div>
</div>

<div className="row3">
<div className="boxes" onClick={(e)=>toggle(e,6)}></div>
<div className="boxes" onClick={(e)=>toggle(e,7)}></div>
<div className="boxes" onClick={(e)=>toggle(e,8)}></div>
</div>

      </div>
      <button className="reset">Reset</button>
    </div>
  )
}

export default TikTakTo
