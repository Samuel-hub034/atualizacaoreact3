function Exercicio2() {
  function atualizarStatus() {
    let etiqueta = document.getElementsByClassName("status-entrega")[0];
    etiqueta.innerHTML = "Quase";
    etiqueta.style.color = "red";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Entregas</h2>

      <p className="status-entrega">Aguardando Entrega...</p>

      <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio2;
