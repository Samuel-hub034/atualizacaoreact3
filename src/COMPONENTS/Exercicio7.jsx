function Exercicio7() {
  function saudarCliente() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    let mensagem = document.getElementById("mensagem-saudacao");
    mensagem.innerText = `Olá, ${nomeDigitado}!`;
  }

  return (
    <div>
      <h2>Saudação ao Cliente</h2>
      <input type="text" id="nome-cliente" placeholder="Digite seu Nome" />
      <button onClick={saudarCliente}>Saudar</button>
      <div
        id="mensagem-saudacao"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio7;
