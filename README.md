# 8puzzle
Trabalho sobre Resolução de Problemas por meio de Busca

> O trabalho deve permitir que o usuário embaralhe as peças para o Estado Inicial do jogo, para que por meio da busca consiga encontrar a sequência correta de passsos para chegar no Estado Final. O Estado Final pode ser escolhido pelo jogador.

<img width="497" height="580" alt="image" src="https://github.com/user-attachments/assets/3e1511c1-f26f-4a0f-bfc5-6aef9fc4a8c3" />

A cada novo estado (movimento) a ser escolhido, dentre as opções possíveis, será definida uma função de avaliação (estimativa) que seja usada como critério para escolher os próximos passos.

O projeto deve permitir o usuário:

    definir o estado final;
    embaralhar as peças;
    optar por uma das funções para avaliação;
    escolher o tipo de busca para solução;
    escolher a opção de calcular o 1º nível ou 2º nível quando usar buscas heurísticas;

Ao encontrar a solução (sequência de passos), o programa deve mostrar demostrar a solução encontrada o passo a passo.

Também deve apresentar a quantidade de passos (nós) visitados para obter a solução, o tempo gasto, tamanho do caminho da solução encontrada.
