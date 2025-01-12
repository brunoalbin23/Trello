const Board = require('../models/Board');

exports.getAllBoards = async (req, res) => {
    try {
        const boards = await Board.findAll();
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tableros' });
    }
};

exports.createBoard = async (req, res) => {
    try {
        const { nombre } = req.body;
        const newBoard = await Board.create({ nombre });
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el tablero' });
    }
};

exports.deleteBoard = async (req, res) => {
    try {
        const { id } = req.params;
        await Board.destroy({ where: { id } });
        res.status(200).json({ message: 'Tablero eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el tablero' });
    }
};
