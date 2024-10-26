// Abriria uma conexao com o banco de dados
// Consulta os dados no banco de dados
// Pega o retorno e armazena a variavel questions no formato array

const questions = [ //[] = array = matriz
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qual o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        answer: "Júpiter"
    }   
]; 

//console.log(questions);
//console.log(questions[1].question);

let currentQuestionIndex = 0; // Indices do nosso array, começa em zero para sempre mostrar a Primeira questão ao carregar a pagina.

function showQuestion (question){
    // Pega o elemento da div vazia no html
    const questionContainer = document.getElementById("question-container");

    // Sempre usar o console.log(nome_var) para verificar se está funcionando tudo certinho.
    // console.log(questionContainer);

    // Inclui a questão dentro da div vazia
    questionContainer.innerHTML = `
        <div>
            <!-- Primeiro question é o nome da variavel/array
    O segundo question é o campo dentro da variavel/array -->
            <h2>${question.question}</h2>
            ${
                // .map é utilizado para percorrer cada item de um array é uma função callback
                //
                question.options.map(
                    (option, index) => `
                        <button class="option-btn">${option}</button>
                    `
                ).join('')// .join('') muda os padroes do js e retira a virgula
            }
        </div>
    `;
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectOption(button.innerText); // Passa o texto do botão clicado para selectOption
        });
    });
}




function selectOption(selectedOption)
{
    console.log(selectedOption);
    const question = questions[currentQuestionIndex];
    console.log(question);
    if (selectedOption === question.answer) {
        alert("Correto!");
    } else {
        alert("Errado! A resposta correta é: " + question.answer);
    }

    console.log(currentQuestionIndex);
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    if(currentQuestionIndex < questions.length){
        showQuestion(questions[currentQuestionIndex]);
    } else{
        alert("Quiz completo");
    }
}

showQuestion(questions[currentQuestionIndex]);