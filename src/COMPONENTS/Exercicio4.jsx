import { useState } from "react";

function Exercicio4() {
  const [fatura, setFatura] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  function processarDados() {
    const novaFatura = {
      cliente: "Edson Maia",
      valor: 250.45,
      vencimento: "03-09-2026",
    };

    setFatura(novaFatura);
    setMostrar((prev) => !prev); // alterna mostrar / esconder
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", color: "gold" }}>
      <h2>Processamento de ssd </h2>

      <button onClick={processarDados}>
        {mostrar ? "Esconder Dados" : "Processar Dados"}
      </button>

      {mostrar && fatura && (
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          Cliente: {fatura.cliente}
          <br />
          Valor: R$ {fatura.valor}
          <br />
          Vencimento: {fatura.vencimento}
        </div>
      )}
    </div>
  );
}

export default Exercicio4;
