const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];
    const sala1 = alunos.slice(0, alunos.length /2); // Divide os alunos em duas salas, cada uma com 10 alunos
    const sala2 = alunos.slice(alunos.length / 2); // A segunda sala recebe os alunos restantes
    console.log(sala1);
    console.log(sala2);