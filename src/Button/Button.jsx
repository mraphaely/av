import './Button.css'


  
  // eslint-disable-next-line react/prop-types
  const Btn = ({texto, source , ativo, setAtivo}) => {
    
      return(
          <a href={source} id='btn'>
            <input  onClick={() => setAtivo(!ativo)} type='button' value={texto}/>
        
        </a>
            
    )
}

export default Btn;

