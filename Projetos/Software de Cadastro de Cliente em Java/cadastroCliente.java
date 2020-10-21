import java.util.Scanner;
import javax.swing.JPasswordField;
public class cadastroCliente{

	public static void main(String [] args){

		Scanner entrada = new Scanner(System.in);

		dadosCliente cliente = new dadosCliente();
        // Cadastro do usuario
        System.out.printf("Digite seu Nome:");
		cliente.nome = entrada.next();
		System.out.printf("Digite seu CPF:");
		cliente.cpf = entrada.next();
		System.out.printf("Digite seu Email:");
		cliente.email = entrada.next();
		System.out.printf("Digite uma senha:");
		cliente.senhaCadastrada = entrada.next();

		System.out.println("Conta cadastrada com sucesso!");

        //Login do usuário.
		dadosCliente loginCliente = new dadosCliente();
        int cont =0;
		for(int i=0; i<3; i++){
		 System.out.printf("Login ou Email:");
		loginCliente.login = entrada.next();
		 System.out.printf("Senha:");
		loginCliente.senha = entrada.next();

        // Identificação do usuário.
        if(loginCliente.login.equals(cliente.email) && cliente.senhaCadastrada.equals(loginCliente.senha)){
         System.out.println("Login efetuado com sucesso!!");
        break;
		}else{
			
			System.out.println("Login ou senha incorretos!");
			cont++;
		}
		
		
		
      } if(cont>=3){
			System.out.println("Conta bloqueada!");
			
		
		}
		

			
		

    }
     


	}


