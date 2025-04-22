package com.trello.demo.controllers;

import com.trello.demo.models.Lista;
import com.trello.demo.services.ListaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/boards/{boardId}/lists")
public class ListController {

    @Autowired
    private ListaService listaService;

    @GetMapping
    public Optional<Lista> getListsByBoard(@PathVariable Long boardId) {
        return listaService.getListsByBoardId(boardId);
    }

    @PostMapping
    public Lista createList(@PathVariable Long boardId, @RequestBody Lista lista) {
        return listaService.createList(boardId, lista);
    }

    @DeleteMapping("/{listId}")
    public void deleteList(@PathVariable Long listId) {
        listaService.deleteList(listId);
    }
}
