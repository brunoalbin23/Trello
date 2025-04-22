package com.trello.demo.services;

import com.trello.demo.models.Lista;
import com.trello.demo.models.Board;
import com.trello.demo.repositories.ListaRepository;
import com.trello.demo.repositories.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ListaService {

    @Autowired
    private ListaRepository listaRepository;

    @Autowired
    private BoardRepository boardRepository;

    public Optional<Lista> getListsByBoardId(Long boardId) {
        return listaRepository.findById(boardId);
    }

    public Lista createList(Long boardId, Lista lista) {
        Board board = boardRepository.findById(boardId).orElse(null);
        if (board != null) {
            lista.setBoard(board);
            return listaRepository.save(lista);
        }
        return null;
    }

    public void deleteList(Long id) {
        listaRepository.deleteById(id);
    }
}
