function Exercicio8() {
  function calcularTotal() {
    let produtos = [{ nome: "Produto A", preco: 100.5, imposto: 15 }];
    let resultado = document.getElementById("total-produtos");

    let total = produtos.preco + produtos[0].imposto;
    resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  return (
    <div
      style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
    >
      <h2>Calculadora de total d Produtos</h2>
      <button onClick={calcularTotal}>Calcular Total</button>
     
      <div
        id="total-produtos"
        style={{ marginTop: "10px", fontWeight: "2px" }}
      ></div>
    </div>
  );
}

export default Exercicio8;

