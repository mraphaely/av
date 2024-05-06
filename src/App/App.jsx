import './App.css'
import starIcon from '../../images/icon-star.svg'
import React from 'react';

//componentes
import Btn from '../Button/Button';
import Card from '../Card/Card';

const App = () => {
    function HandleSubimit(event){
        event.preventDefault()
        // console.log(event.target)
    }
    const [ativo, setAtivo] = React.useState(false)
    
    return (
        <main className="container_main">
            <form onSubmit={HandleSubimit} className="container_card">
                <img src={starIcon} className='estrelinha'/>
                <Card
                title={'How did we do?'}
                paragraph={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos velit perspiciatis iste sapiente inventore culpa deserunt temporibus ad commodi omnis ab debitis hic dolores similique, aliquam eius illo quod.'}
                id={"card1"}
              
                />

            <div>    
                <Btn texto={'1'} onChange={(event) => setAtivo(event.target.value)}/>
                <Btn texto={'2'} onChange={(event) => setAtivo(event.target.value)}/>
                <Btn texto={'3'} onChange={(event) => setAtivo(event.target.value)}/>
                <Btn texto={'4'} onChange={(event) => setAtivo(event.target.value)}/>
                <Btn texto={'5'} onChange={(event) => setAtivo(event.target.value)}/>
           </div>
               <button id='sub'>SUBMIT</button>
            </form>
        </main>
    )
}

export default App;
