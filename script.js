const btn = document.querySelector(".btn-open");
      const modal = document.querySelector(".pop-fundo");
      const closeBtn = document.querySelector(".btn-close");
      const test = document.querySelector("#teste");

      test.addEventListener("click", function (event) {
        alert("ola");
      });

      btn.addEventListener("click", () => {
        modal.style.display = "flex";

        let cep = document.querySelector('#cep')
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = ' '
        cep.value = ' '
        
      });

      closeBtn.addEventListener("click", function () {
        // document.querySelector('.pop-fundo').classList.add('.ativar')
        modal.style.display = "none";
      });

      document.addEventListener('keypress',function(e){

if(e.key=="Enter" && modal.style.display=='flex'){
  
  let btn = document.querySelector('.conferir')

  btn.click()

}

})

document.addEventListener('keydown',function(e){
if(e.key=="Escape" && modal.style.display=='flex'){
  
  let btn = document.querySelector('.btn-close')

  btn.click()

}})




      function conferir() {
        let cep = document.querySelector("#cep").value;

        if (cep.length != 8) {
          alert("CEP Invalido");
          return;
        }

        let url = `https://viacep.com.br/ws/${cep}/json/`;
        fetch(url).then(function (response) {
          response.json().then(function (data) {
            console.log(data);
            mostrarEndereco(data);
          });
        });
      }
      function mostrarEndereco(dados) {
        let resultado = document.querySelector("#resultado");

        if (dados.erro) {
          resultado.innerHTML = "Não foi possivel localizar o endereço";
        } else if (dados.logradouro == 0) {
          resultado.innerHTML = `<p>Localidade: ${dados.localidade}</p>`;
        } else {
          resultado.innerHTML = `<p> Endereço: ${dados.logradouro}</p>
                                <p> Localidade: ${dados.localidade}</p>`;
        }
      }