import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useEffect } from "react";
import { api } from "../../services/api";


export function Summary() {
  useEffect(() => {
    api.get('transactions')
      .then(res => console.log(res.data))
  }, [])


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$12.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- R$1.100,00</strong>
      </div>
      <div className="hightlight-background" >
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$10.900,00</strong>
      </div>
    </Container>
  )
}