import {useState , useEffect} from 'react'
const CounterComponent = () =>
{
 const [count, setCount] = useState(0);
 const [show , setShow] = useState(true)


    useEffect(()=>{
        console.log(count)
    },[count]);

    const increament = ()=>
    {
        if(count<10)
     {
        setCount(count+1)
      }else if(count===10){
        setShow(false);
      }
       
    }

    // const reset = () =>{
    //     if(count===10){
    //         setCount(0)
    //     }
    // }

    const decreament = ()=>{
        if(count>0){
        setCount(count-1)
        }else{
            alert("number in counter shouldn't go below 0")
            setCount(0)
        }
    }

    const reset = () =>{
        if(count>=10){
            setCount(0)
            setShow(true)
        }
    }



    let style = {
        headingStyle: {
            textAlign: 'center',
         fontSize: '3em' ,
         margin: '10px',
         padding: '12px'
        },
        paraStyle: {
            textAlign: 'center',
           fontSize: '5em',
           padding: '15px',
           fontWeight: '400',
           margin: '10px' 
        },
        btnStyle: {
            fontSize: '1.8em',
            borderColor: '#eee',
            background: 'Black',
            borderRadious: '4em',
            color: 'White',
            margin: '10px',
            padding: '12px',
            cursor: 'pointer'
        }
    }
    if(show){
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={style.headingStyle}>Counter App</h1>
                <p style={style.paraStyle}>{count}</p>
                <button style={style.btnStyle} onClick={increament}>Increment</button>
                <button style={style.btnStyle} onClick={decreament}>Decrement</button>
                
         {/* <button style={style.btnStyle} onClick={reset}>GO BACK TO 0</button>  */}
                
            </div>
          )
    }else{
        return (
            <div style={{textAlign:'center'}}>
                <h1 style={style.headingStyle}>Counter App</h1>
                <p style={style.paraStyle}>{count}</p>
               <button style={style.btnStyle} onClick={reset}>GO BACK TO 0</button> 
                
            </div>
          )
    }
  
  
}

export default CounterComponent