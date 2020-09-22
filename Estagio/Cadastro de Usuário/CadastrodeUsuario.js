class Cadastro {
    constructor() {
        this.qtd = 0;
        this.id = 0;
        this.ehEditar = false;
        this.idEditar = "";
    }

    salvar() {
        // Lê os dados no input.
        let nome = document.getElementById("nome").value;
        let data = document.getElementById("data").value;
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;

        

        if (this.ehEditar==true){

            document.getElementById(this.idEditar).childNodes[0].innerText=nome;
            this.ehEditar=false;

        }else{

        //Incluir na lista

        let lista = document.getElementById("dados");
        // Cria as tags div,span e img.
        let div = document.createElement("div");
        div.classList.add("item-lista")
        div.id = "conv-" + this.id;

        let span = document.createElement("span");
        span.innerText = nome;

        let imgExc = document.createElement("img");
        imgExc.src = "img/exc.svg";

        let imgEdit = document.createElement("img");
        imgEdit.src = "img/edit.svg";
        // Chamar as funções.
        imgExc.setAttribute("onclick", "lista.excluir('" + div.id + "')");
        imgEdit.setAttribute("onclick", "lista.editar('" + div.id + "')");
        // Crias tags filhos
        div.appendChild(span);
        div.appendChild(imgExc);
        div.appendChild(imgEdit);

        lista.appendChild(div);

     
        //Contador 
        this.qtd = this.qtd + 1;
        this.id= this.id + 1;

        this.atualizarQtd();
        this.limpar();

        }
    }
    //Funções.
    atualizarQtd(){
        let labelQtd = document.getElementById("labelQtd");
    }

    excluir(id) {
        let usuario = document.getElementById(id);
        let list = document.getElementById("dados");
        list.removeChild(usuario);
        this.qtd = this.qtd - 1;

    }
    editar(id){
        let nome = document.getElementById(id).childNodes[0].innerText
        document.getElementById("nome").value = nome;
        this.ehEditar = true;
        this.idEditar = id;


    }
    limpar() {

        document.getElementById("nome").value = "";
        document.getElementById("data").value = "";
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    }
}
var lista = new Cadastro();
