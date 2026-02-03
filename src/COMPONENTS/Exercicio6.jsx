function Exercicio6() {
  function DestacarAtraso() {
    let caixa = document.getElementById("alerta-cobranca");
    caixa.style.border = "2px solid red";
    caixa.innerText = "Pagamento Atrasado!!!";
    caixa.style.color = "red";
  }
  return (
    <div>
      <h2>Cobrança</h2>
      <div id="alerta-cobranca" style={{}}>
        Status: Normal
      </div>
      <button onClick={DestacarAtraso}>Destacar Atraso</button>
    </div>
  );
}

export default Exercicio6;
