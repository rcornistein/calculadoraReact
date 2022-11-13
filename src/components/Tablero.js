import React, {useState} from 'react';


const Tablero= ()=>{


const [valorVisor, setValorVisor] = useState("0");
const [valorCalculo, setValorCalculo] = useState();
const [total, setTotal] = useState();

const limpiar= (e)=>{
    setValorVisor("0");
    setValorCalculo("");
    setTotal("");
}


const atras= ()=>{

  
    setValorVisor(valorVisor.slice(0,-1));
    setValorCalculo(valorCalculo.slice(0,-1));
  
}

const boton= (e)=>{

    let auxiliar=valorVisor;
    let auxiliar_calculo= valorCalculo;

    if(valorVisor=="0")  {
 
        setValorVisor(e.target.id);
        setValorCalculo(e.target.name);
    
    }

    if(valorVisor!=="0")  {
        setValorVisor(auxiliar+e.target.id);
        setValorCalculo(auxiliar_calculo+e.target.name);
    
    };    

    }

    const calcular=()=> {
        limpiar();
      
      try{
      let total=eval(valorCalculo). toFixed(2)
      
      
      setTotal(total);
      }

      catch(e){
        window.alert("Revisar expresion matematica")
        
      }
    }

    function potencia(a,b){

        return( Math.pow(b,a));
    
    }
    
    function raiz_n(a,b){
    
        return( Math.pow(b,1/a));
    
    }
    
    function factorialize(num) {
      var result = num;
      if(!Number.isInteger(num)){
    
         alert("Ingresar un número entero");
         return("Error");
         };
      
      if (num === 0 || num === 1) 
        return 1; 
      while (num > 1) { 
        num--;
        result *= num;
      }
      return result;
    };
    



return(

<div className="container" > 



    <div className="container">
        <div className="row">
            <div className="col-xs-12 justify-text-center" id="titulo" >
                <h3 >  Calculadora           </h3>
            </div>  
        </div>
    </div>

    <div className="container " id="ppal">
        <div className="row align-items-center">
            <div className="fundo-mod margem borda">
                <div id="display">
                    <div ><p id="result" value="0">{total}</p></div>
                    <div ><p id="previa" value="0">{valorVisor}</p></div>
                </div>
            

                <div className="container" >
                <table >
                    <tr>
                        <td><input type="button" className=" btn-block" onClick={boton} id="(" name=" ( " value="("/></td>
                        <td><input type="button" className="btn-block" id=")" name=")"  onClick={boton} value=")"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="factorial(" name="factorialize(" value="x!"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="cuad(" name="potencia(2," value=" x²"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="raiz(" name="Math.sqrt(" value=" √"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="raiz_n_(" name="raiz_n(" value =" √n"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" className="btn-block" onClick={boton} id="sin(" name="Math.sin(" value="sin"/></td>
                        <td><input type="button" className="btn-block" onClick={boton}  id="cos(" name="Math.cos(" value="cos"/></td>
                        <td><input type="button" className="btn-block" onClick={boton}  id="tan(" name="Math.tan" value="tan"/></td>
                        <td><input type="button" className="btn-block" onClick={boton}  id="cubo(" name="potencia(3," value="x³"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="," name="," value=","/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="^" name="**" value="xⁿ"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" className="btn-block" id="1"  onClick={boton} name="1" value="1"/></td>
                        <td><input type="button" className="btn-block" id="2" onClick={boton} name="2" value="2"/></td>
                        <td><input type="button" className="btn-block" id="3" onClick={boton} name="3" value="3"/></td>
                        <td><input type="button" className="btn-block" id="/" onClick={boton} name="/" value="/"/></td>
                        <td><input type="button" className="btn-block" id="%" onClick={boton}  name="*(1/100)*" value="%"/></td>
                        <td><input type="button" className="btn-block" id="ln(" onClick={boton} name="Math.log(" value="ln"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" className="btn-block" id="4" onClick={boton} name="4" value="4"/></td>
                        <td><input type="button" className="btn-block" id="5" onClick={boton} name="5" value="5"/></td>
                        <td><input type="button" className="btn-block" id="6" onClick={boton} name="6" value="6"/></td>
                        <td><input type="button" className="btn-block" id="*" onClick={boton} name="*" value="*"/></td>
                        <td><input type="button" className="btn-block" id="log" onClick={boton} name="Math.log10(" value="log"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="e" name="Math.E" value="e"/></td>
                    </tr>
                    <tr>
                        <td><input type="button" className="btn-block" id="7" onClick={boton} name="7" value="7"/></td>
                        <td><input type="button" className="btn-block" id="8" onClick={boton} name="8" value="8"/></td>
                        <td><input type="button" className="btn-block" id="9" onClick={boton} name="9" value="9"/></td>
                        <td><input type="button" className="btn-block" id="-" name="-" onClick={boton} value="-"/></td>
                        <td><input type="button" className="btn-block" id="AC" name=" AC"  onClick={limpiar} value="AC"/></td>
                        <td rowSpan="2"> <input type="button" className="btn-block" id="igual" name="=" onClick={calcular} value="="/></td>
                    </tr>
                    <tr>
                        <td><input type="button" className="btn-block" id="." onClick={boton} name="." value="."/></td>
                        <td><input type="button" className="btn-block" id="0" onClick={boton} name="0" value="0"/></td>
                        <td><input type="button" className="btn-block" onClick={boton} id="π" name="Math.PI" value="π"/></td>
                        <td><input type="button" className="btn-block" id="+" name="+" onClick={boton} value="+"/></td>
                        <td><input type="button" className="btn-block"   id="atras" name="atras" onClick={atras} value="<-"/> </td>
                    </tr>            
                
                
                
                </table>   
                </div>
                
            </div>
        </div>
    </div>

 
 
</div>


);


};


export default Tablero;

