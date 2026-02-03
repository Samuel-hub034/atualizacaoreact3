function Exercicio5() {
  function mostrarinsumo() {
    let insumo = {
      Nome: "Adubo Orgânico",
      Foto: "https://placecats.com/300/200",
      Estoque: "150 sacos",
    };

    let titulo = document.getElementById("nome-insumo");
    let imagem = document.getElementById("foto-insumo");
    titulo.innerText = insumo.Nome;
    imagem.src = insumo.Foto;
  }
  return (
    <div>
      <div
        style={{ padding: "20px", border: "2px solid #ccc", marginTop: "10px" }}
      ></div>
      <h2>Resultado do Estoque</h2>
      <button onClick={mostrarinsumo}>Mostrar insumo</button>
      <h3 id="nome-insumo" style={{ marginTop: "10px" }}></h3>
      <img
        id="foto-insumo"
        alt="Foto do Insumo"
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default Exercicio5;
