const alunos = ["Joao", "Juliana ", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;
       
        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    }else {
        console.log(`${aluno} não está cadastrado(a)`);
    }
}

exibeNomeENota("Joao");