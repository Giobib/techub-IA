const artigos = [
    {
        id: 'inteligencia-artificial',
        titulo: 'Inteligência artificial no dia a dia',
        categoria: 'analises',
        categoriaLabel: 'Análises',
        tempo: '6 min de leitura',
        visual: 'visual-ai',
        simbolo: 'AI',
        resumo: 'Entenda como sistemas inteligentes aprendem com dados e já fazem parte de tarefas comuns.',
        palavrasChave: 'inteligência artificial machine learning tecnologia dados',
        texto: [
            'A inteligência artificial (IA) é uma área da computação que desenvolve sistemas capazes de executar tarefas que normalmente exigiriam habilidades humanas, como reconhecer imagens, compreender linguagem e encontrar padrões.',
            'Muitos desses sistemas usam aprendizado de máquina: em vez de receber uma regra para cada situação, o programa analisa exemplos e ajusta um modelo para produzir resultados. A qualidade dos dados e a forma como o sistema é avaliado influenciam diretamente o resultado.',
            'Recomendações de filmes, filtros de spam e assistentes de voz são exemplos de IA aplicada. Essas ferramentas podem ser úteis, mas suas respostas precisam ser verificadas: sistemas podem errar, reproduzir vieses presentes nos dados ou apresentar informações desatualizadas.'
        ]
    },
    {
        id: 'componentes-pc',
        titulo: 'Como escolher os componentes de um PC',
        categoria: 'hardware',
        categoriaLabel: 'Hardware',
        tempo: '8 min de leitura',
        visual: 'visual-pc',
        simbolo: 'CPU',
        resumo: 'Veja o papel do processador, da memória e do armazenamento antes de montar ou atualizar um computador.',
        palavrasChave: 'hardware computador pc processador memória armazenamento placa de vídeo',
        texto: [
            'Um computador é formado por componentes que trabalham em conjunto. O processador executa instruções, a memória RAM mantém dados temporários disponíveis e o armazenamento guarda arquivos mesmo quando o computador está desligado.',
            'A placa-mãe conecta essas peças e precisa ser compatível com o processador, o tipo de memória e os demais componentes. Para jogos ou tarefas gráficas, uma placa de vídeo dedicada pode ser importante; para navegação, estudos e tarefas leves, os gráficos integrados podem atender bem.',
            'Antes de comprar, defina o uso principal e confira compatibilidade, consumo de energia, espaço no gabinete e possibilidade de atualização. Um conjunto equilibrado costuma oferecer melhor resultado do que investir todo o orçamento em apenas uma peça.'
        ]
    },
    {
        id: 'primeiros-passos-programacao',
        titulo: 'Primeiros passos na programação',
        categoria: 'tutoriais',
        categoriaLabel: 'Tutoriais',
        tempo: '5 min de leitura',
        visual: 'visual-code',
        simbolo: '</>',
        resumo: 'Aprenda a dividir problemas em etapas e pratique lógica com pequenos programas.',
        palavrasChave: 'programação código lógica algoritmo tutorial iniciante',
        texto: [
            'Programar é escrever instruções para que o computador realize uma tarefa. Antes de escolher uma linguagem, ajuda aprender conceitos que aparecem em muitas delas: variáveis, condições, repetições e funções.',
            'Comece com um problema pequeno, como converter temperaturas ou calcular a média de notas. Escreva os passos em linguagem simples, transforme-os em código e teste diferentes entradas, inclusive valores inesperados.',
            'Erros fazem parte do processo. Leia a mensagem apresentada, identifique em que etapa o resultado se desviou do esperado e altere uma coisa por vez. Projetos curtos e frequentes ajudam mais do que tentar memorizar toda a sintaxe de uma vez.'
        ]
    },
    {
        id: 'seguranca-digital',
        titulo: 'Hábitos essenciais de segurança digital',
        categoria: 'analises',
        categoriaLabel: 'Análises',
        tempo: '7 min de leitura',
        visual: 'visual-security',
        simbolo: '◇',
        resumo: 'Conheça práticas simples para proteger suas contas, dispositivos e informações pessoais.',
        palavrasChave: 'segurança digital senha autenticação privacidade phishing',
        texto: [
            'A segurança digital começa com hábitos consistentes. Use senhas longas e únicas para cada serviço; um gerenciador de senhas pode ajudar a armazená-las sem precisar reutilizar combinações fáceis de adivinhar.',
            'Ative a autenticação em duas etapas sempre que possível. Ela adiciona uma confirmação além da senha e reduz o risco de alguém acessar sua conta apenas com uma credencial descoberta.',
            'Desconfie de mensagens urgentes que pedem senhas, códigos ou pagamentos. Confira o endereço do remetente e acesse o serviço digitando o endereço conhecido no navegador. Mantenha aplicativos atualizados e faça cópias de segurança dos arquivos importantes.'
        ]
    },
    {
        id: 'arduino',
        titulo: 'Arduino: do primeiro circuito ao projeto',
        categoria: 'tutoriais',
        categoriaLabel: 'Tutoriais',
        tempo: '6 min de leitura',
        visual: 'visual-arduino',
        simbolo: '⌘',
        resumo: 'Descubra como uma placa Arduino lê sensores e controla componentes eletrônicos.',
        palavrasChave: 'arduino eletrônica placa projeto sensor led programação',
        texto: [
            'Arduino é uma plataforma de prototipagem eletrônica que combina placas com microcontroladores e ferramentas de programação. Ela permite ler sinais de sensores e controlar componentes como LEDs, motores e displays.',
            'Um primeiro experimento comum é piscar um LED. O programa configura um pino como saída, liga o pino, espera um intervalo, desliga e repete. Com esse exercício é possível praticar conexões, alimentação e a estrutura básica de um programa.',
            'Ao montar circuitos, confira a tensão e a corrente indicadas para cada componente e desligue a alimentação antes de alterar as conexões. Depois, avance para entradas de sensores e projetos que respondam ao ambiente.'
        ]
    },
    {
        id: 'linux-iniciantes',
        titulo: 'Linux para quem está começando',
        categoria: 'tutoriais',
        categoriaLabel: 'Tutoriais',
        tempo: '7 min de leitura',
        visual: 'visual-linux',
        simbolo: '$_',
        resumo: 'Conheça distribuições, aplicações e comandos básicos do sistema operacional Linux.',
        palavrasChave: 'linux sistema operacional terminal distribuição software livre',
        texto: [
            'Linux é o núcleo de um sistema operacional. Distribuições combinam esse núcleo com ferramentas, ambiente gráfico e aplicativos para oferecer uma experiência completa. Há opções voltadas a iniciantes, servidores, desenvolvimento e outros usos.',
            'É possível usar o computador pela interface gráfica e, quando necessário, pelo terminal. Comandos como pwd mostram a pasta atual, ls lista arquivos e cd muda de diretório. Leia os comandos antes de executá-los, principalmente quando alteram ou removem arquivos.',
            'Para começar, escolha uma distribuição com documentação ativa e teste-a em uma máquina virtual ou modo live, se disponível. Assim você pode conhecer o sistema antes de instalá-lo e verificar se seus dispositivos funcionam corretamente.'
        ]
    }
];

const grade = document.getElementById('grade-artigos');
if (!grade) {
    console.error('Não encontrei o elemento #grade-artigos no HTML.');
} else {
    const pesquisa = document.getElementById('pesquisa');
    const filtros = [...document.querySelectorAll('.filtro[data-filter]')];
    const estadoVazio = document.getElementById('estado-vazio');
    const resultadoPesquisa = document.getElementById('resultado-pesquisa');
    const botaoFavoritos = document.getElementById('botao-favoritos');
    const dialogo = document.getElementById('modal-artigo');
    const favoritosKey = 'techub-favoritos';
    let filtroAtual = 'todos';
    let favoritos = new Set();
    let artigoAberto = null;
    let apenasFavoritos = false;

    try {
        const favoritosSalvos = JSON.parse(localStorage.getItem(favoritosKey) || '[]');
        if (Array.isArray(favoritosSalvos)) {
            favoritos = new Set(favoritosSalvos.filter((id) =>
                artigos.some((artigo) => artigo.id === id)
            ));
        }
    } catch (erro) {
        console.error('Não foi possível carregar os artigos favoritos:', erro);
    }

    const normalizar = (texto) => texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('pt-BR')
        .trim();

    function salvarFavoritos() {
        try {
            localStorage.setItem(favoritosKey, JSON.stringify([...favoritos]));
        } catch (erro) {
            console.error('Não foi possível salvar os artigos favoritos:', erro);
        }
    }

    function atualizarFavoritos() {
        grade.querySelectorAll('.botao-salvar[data-article-id]').forEach((botao) => {
            const salvo = favoritos.has(botao.dataset.articleId);
            botao.classList.toggle('salvo', salvo);
            botao.setAttribute('aria-pressed', String(salvo));
            botao.setAttribute('aria-label', salvo ? 'Remover dos favoritos' : 'Salvar nos favoritos');
            botao.textContent = salvo ? '♥' : '♡';
        });

        if (botaoFavoritos) {
            botaoFavoritos.setAttribute('aria-pressed', String(apenasFavoritos));
            botaoFavoritos.textContent = apenasFavoritos ? '♥ Ver todos' : '♡ Meus favoritos';
        }

        const botaoFavoritarModal = document.getElementById('modal-favoritar');
        if (botaoFavoritarModal && artigoAberto) {
            const salvo = favoritos.has(artigoAberto.id);
            botaoFavoritarModal.textContent = salvo
                ? '♥ Remover dos favoritos'
                : '♡ Adicionar aos favoritos';
            botaoFavoritarModal.setAttribute('aria-pressed', String(salvo));
        }
    }

    function alternarFavorito(id) {
        if (favoritos.has(id)) {
            favoritos.delete(id);
        } else {
            favoritos.add(id);
        }
        salvarFavoritos();
        atualizarFavoritos();
        aplicarFiltros();
    }

    function criarCard(artigo) {
        const card = document.createElement('article');
        card.className = 'artigo-card';
        card.dataset.category = artigo.categoria;
        card.dataset.articleId = artigo.id;

        const visual = document.createElement('div');
        visual.className = `artigo-visual ${artigo.visual}`;
        visual.setAttribute('aria-hidden', 'true');
        const decoracao = document.createElement('span');
        decoracao.className = 'visual-decoracao';
        const simbolo = document.createElement('span');
        simbolo.className = 'visual-simbolo';
        simbolo.textContent = artigo.simbolo;
        visual.append(decoracao, simbolo);

        const conteudo = document.createElement('div');
        conteudo.className = 'artigo-conteudo';

        const meta = document.createElement('div');
        meta.className = 'artigo-meta';
        const categoria = document.createElement('span');
        categoria.className = 'artigo-categoria';
        categoria.textContent = artigo.categoriaLabel;
        const tempo = document.createElement('span');
        tempo.className = 'artigo-tempo';
        tempo.textContent = artigo.tempo;
        meta.append(categoria, tempo);

        const titulo = document.createElement('h3');
        titulo.textContent = artigo.titulo;
        const resumo = document.createElement('p');
        resumo.textContent = artigo.resumo;

        const acoes = document.createElement('div');
        acoes.className = 'artigo-acoes';
        const ler = document.createElement('button');
        ler.className = 'link-ler';
        ler.type = 'button';
        ler.dataset.openArticle = artigo.id;
        ler.textContent = 'Ler artigo →';
        const salvar = document.createElement('button');
        salvar.className = 'botao-salvar';
        salvar.type = 'button';
        salvar.dataset.articleId = artigo.id;
        salvar.textContent = '♡';
        acoes.append(ler, salvar);
        conteudo.append(meta, titulo, resumo, acoes);
        card.append(visual, conteudo);
        return card;
    }

    grade.replaceChildren(...artigos.map(criarCard));

    function aplicarFiltros() {
        const termo = normalizar(pesquisa?.value || '');
        let quantidadeVisivel = 0;

        grade.querySelectorAll('.artigo-card').forEach((card) => {
            const artigo = artigos.find((item) => item.id === card.dataset.articleId);
            const textoBusca = normalizar([
                artigo.titulo,
                artigo.categoriaLabel,
                artigo.resumo,
                artigo.palavrasChave,
                ...artigo.texto
            ].join(' '));
            const correspondeCategoria = filtroAtual === 'todos' || artigo.categoria === filtroAtual;
            const correspondeBusca = !termo || textoBusca.includes(termo);
            const correspondeFavoritos = !apenasFavoritos || favoritos.has(artigo.id);
            const visivel = correspondeCategoria && correspondeBusca && correspondeFavoritos;
            card.hidden = !visivel;
            if (visivel) quantidadeVisivel += 1;
        });

        if (estadoVazio) estadoVazio.hidden = quantidadeVisivel > 0;
        if (resultadoPesquisa) {
            resultadoPesquisa.textContent = quantidadeVisivel === artigos.length
                ? `${artigos.length} artigos`
                : `${quantidadeVisivel} de ${artigos.length} artigos`;
        }
    }

    function definirFiltro(filtro) {
        filtroAtual = filtro;
        filtros.forEach((botao) => {
            const ativo = botao.dataset.filter === filtro;
            botao.classList.toggle('ativo', ativo);
            botao.setAttribute('aria-pressed', String(ativo));
        });
        aplicarFiltros();
    }

    function abrirArtigo(id) {
        const artigo = artigos.find((item) => item.id === id);
        if (!artigo || !dialogo) return;

        artigoAberto = artigo;
        document.getElementById('modal-categoria').textContent = artigo.categoriaLabel.toLocaleUpperCase('pt-BR');
        document.getElementById('modal-titulo').textContent = artigo.titulo;
        document.getElementById('modal-resumo').textContent = artigo.resumo;
        const texto = document.getElementById('modal-texto');
        texto.replaceChildren(...artigo.texto.map((paragrafo) => {
            const elemento = document.createElement('p');
            elemento.textContent = paragrafo;
            return elemento;
        }));
        atualizarFavoritos();
        if (!dialogo.open) dialogo.showModal();
    }

    grade.addEventListener('click', (evento) => {
        const favorito = evento.target.closest('.botao-salvar[data-article-id]');
        if (favorito) {
            alternarFavorito(favorito.dataset.articleId);
            return;
        }

        const leitura = evento.target.closest('[data-open-article]');
        if (leitura) abrirArtigo(leitura.dataset.openArticle);
    });

    filtros.forEach((botao) => {
        botao.addEventListener('click', () => {
            apenasFavoritos = false;
            atualizarFavoritos();
            definirFiltro(botao.dataset.filter);
        });
    });

    document.querySelectorAll('.categoria-card[data-filter], [data-footer-filter]').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            apenasFavoritos = false;
            atualizarFavoritos();
            definirFiltro(elemento.dataset.filter || elemento.dataset.footerFilter);
            document.getElementById('artigos').scrollIntoView({ behavior: 'smooth' });
        });
    });

    pesquisa?.addEventListener('input', aplicarFiltros);

    document.getElementById('limpar-pesquisa')?.addEventListener('click', () => {
        if (pesquisa) {
            pesquisa.value = '';
            pesquisa.focus();
        }
        aplicarFiltros();
    });

    document.getElementById('limpar-filtros')?.addEventListener('click', () => {
        apenasFavoritos = false;
        if (pesquisa) pesquisa.value = '';
        atualizarFavoritos();
        definirFiltro('todos');
    });

    botaoFavoritos?.addEventListener('click', () => {
        apenasFavoritos = !apenasFavoritos;
        atualizarFavoritos();
        aplicarFiltros();
    });

    document.querySelectorAll('[data-open-article]').forEach((botao) => {
        if (!grade.contains(botao)) {
            botao.addEventListener('click', () => abrirArtigo(botao.dataset.openArticle));
        }
    });

    document.getElementById('modal-fechar')?.addEventListener('click', () => dialogo?.close());
    document.getElementById('modal-concluir')?.addEventListener('click', () => dialogo?.close());
    document.getElementById('modal-favoritar')?.addEventListener('click', () => {
        if (artigoAberto) alternarFavorito(artigoAberto.id);
    });

    const anoAtual = document.getElementById('ano-atual');
    if (anoAtual) anoAtual.textContent = String(new Date().getFullYear());

    atualizarFavoritos();
    aplicarFiltros();
}
