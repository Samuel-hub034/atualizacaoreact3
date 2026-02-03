function Exercicio3() {
  function processarDados() {
    let fatura = {
      cliente: "João Silva",
      valor: 250.45,
      vencimento: "03-04-2026",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "Cliente: " +
      fatura.cliente +
      "<br>" +
      "Valor: R$" +
      fatura.valor +
      "<br>" +
      "Vencimento: " +
      fatura.vencimento;
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Processamento de Fatura </h2>
      <button onClick={processarDados}>Processar Dados</button>
      <div
        id="detalhes-fatura"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      >
        Resultado Finaceiro{" "}
      </div>
    </div>
  );
}

export default Exercicio3;
