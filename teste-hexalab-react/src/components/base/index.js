import './index.css';
import iconeVerde from '../../assets/img/icone-verde.svg'
import { useState, useEffect } from 'react'

function Base() {
  const [valorPedido, setValorPedido] = useState(0);
  let [isValidValorPedido, setIsValidValorPedido]  = useState("valid");
  useEffect(()=>{
      if (!!valorPedido) {
        setIsValidValorPedido("valid");
        return;
      }
      setIsValidValorPedido("is-invalid")
  }, [valorPedido]);

/*   const [personalizado, setPersonalizado] = useState(0);
  let [isValidPersonalizado, setIsValidpersonalizadoo]  = useState("valid");
  useEffect(()=>{
      if (!!personalizado) {
        setIsValidPersonalizado("valid");
        return;
      }
      setIsValidPersonalizado("is-invalid")
  }, [personalizado]); */

  return (
    <>
    <header> </header>
    <article className="container fundo">

      <form id="formGorjeta">
        <div className="row">
          {/* LADO ESQUERDO*/}
          <section className="col-12 col-sm-12 col-md-7 col-lg-7 ">
            <section className="mb-3">
              <label htmlFor="valor-pedido" className="form-label" >Digite o valor total do pedido</label>
              <div className="input-group">
                <span className="input-group-text span-cinza"  >R$</span>
                <input type="text" id="valor-pedido" onChange={(event)=>setValorPedido(event.target.value)} required className={'form-control input-geral '+ isValidValorPedido}/>
              </div>
            </section>
  
  
            <section className="row mb-3">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-3 ">
                <label className="form-label">Quanto quer dar de gorjeta</label>
              </div>
  
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-3">
                <button type="button" id="5" className="btn-porcentagem" value="5">5%</button>
              </div>
  
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-3">
                <button type="button" id="10" className="btn-porcentagem" value="10">10%</button>
              </div>
  
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-3">
                <button type="button" id="15" className="btn-porcentagem" value="15"> 15%</button>
              </div>
  
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 mb-3">
                <button type="button" id="25" className="btn-porcentagem" value="25">25%</button>
              </div>
  
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="input-group">
                  <span className="input-group-text span-cinza" >%</span>
                  <input type="text" id="personalizado" className="form-control input-geral"  /*  onChange={(event)=>setPersonalizado(event.target.value)} required className={'form-control input-geral '+ isValidPersonalizado} *//>
                </div>
              </div>
            </section>
  
            <section className="mb-3">
              <label htmlFor="total-pessoas" className="form-label">Quantas pessoas irão pagar?</label>
              <div className="input-group">
                <span className="input-group-text span-cinza"><img id="total-pessoas-icone" src={iconeVerde} alt="" /></span>
                <input type="number" id="total-pessoas" className="form-control input-geral"/>
              </div>
            </section>
  
          </section>

          {/* LADO DIREITO*/}
          <section className="col-12 col-sm-12 col-md-5 col-lg-5 mt-4 mb-4 mr-2 background-lado-direito">
  
            <section className="row mb-6 mt-3">
                <label htmlFor="valor-total-gorjeta" className="form-label">Valor total da gorjeta</label>
              <div className="input-group form-azul">
                <span className="input-group-text span-azul">R$</span>
                <input type="text" id="valor-total-gorjeta" disabled className="form-control input-geral input-azul"/>
              </div>
            </section>
  
            <section className="row mb-3 mt-5">
              <label htmlFor="valor-pesssoa-gorjeta" className="form-label">Valor que cada pessoa ira pagar de gorjeta</label>
              <div className="input-group form-azul">
                <span className="input-group-text span-azul">R$</span>
                <input type="text" id="valor-pessoa-gorjeta" disabled className="form-control input-geral input-azul"/>
              </div>
            </section>
          </section>
  
        </div>
      </form>
  
    </article>
  
  
    <footer></footer>
    </>
  );
}

export default Base;
