const Livro = require('../models/livro'); // Importa o modelo 'Livro' do arquivo de modelos


// Criar um novo livro
exports.criarLivro = async (req, res) => {
    // Cria uma nova instância do modelo 'Livro' com os dados recebidos na requisição
    const livro = new Livro({
        titulo: req.body.titulo,   // Título do livro
        autor: req.body.autor,     // Autor do livro
        ano: req.body.ano,         // Ano de publicação do livro
        genero: req.body.genero    // Gênero do livro (opcional)
    });


    try {
        // Salva o novo livro no banco de dados
        const novoLivro = await livro.save();
        // Retorna o livro criado com status 201 (Criado)
        res.status(201).json(novoLivro);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
};


// Listar todos os livros
exports.listarLivros = async (req, res) => {
    try {
        // Busca todos os livros no banco de dados
        const livros = await Livro.find();
        // Retorna a lista de livros
        res.json(livros);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};


// Buscar um livro por ID
exports.buscarLivroPorId = async (req, res) => {
    try {
        // Busca um livro pelo ID recebido nos parâmetros da requisição
        const livro = await Livro.findById(req.params.id);
        if (livro == null) {
            // Se o livro não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Livro não encontrado' });
        }
        // Retorna o livro encontrado
        res.json(livro);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};

// Atualizar um livro por ID com PUT
exports.atualizarLivro = async (req, res) => {
    try {
        // Busca o livro pelo ID
        const livro = await Livro.findById(req.params.id);
        if (livro == null) {
            // Se o livro não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Substitui todos os campos do livro com os dados fornecidos na requisição
        livro.titulo = req.body.titulo;
        livro.autor = req.body.autor;
        livro.ano = req.body.ano;
        livro.genero = req.body.genero;

        // Salva o livro atualizado no banco de dados
        const livroAtualizado = await livro.save();
        // Retorna o livro atualizado
        res.json(livroAtualizado);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
};


// Deletar um livro por ID
exports.deletarLivro = async (req, res) => {
    try {
        // Busca e remove o livro pelo ID
        const livro = await Livro.findByIdAndDelete(req.params.id);

        if (!livro) {
            // Se o livro não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Retorna uma mensagem de sucesso
        res.json({ message: 'Livro deletado com sucesso' });
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
};


// Atualizar parcialmente um livro por ID com PATCH
exports.atualizarParcialmenteLivro = async (req, res) => {
    try {
        // Busca o livro pelo ID
        const livro = await Livro.findById(req.params.id);
        if (livro == null) {
            // Se o livro não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        // Atualiza apenas os campos fornecidos na requisição
        if (req.body.titulo != null) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.autor != null) {
            livro.autor = req.body.autor;
        }
        if (req.body.ano != null) {
            livro.ano = req.body.ano;
        }
        if (req.body.genero != null) {
            livro.genero = req.body.genero;
        }

        // Salva o livro atualizado no banco de dados
        const livroAtualizado = await livro.save();
        // Retorna o livro atualizado
        res.json(livroAtualizado);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
};
