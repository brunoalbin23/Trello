package com.trello.demo.services;

import com.trello.demo.models.Task;
import com.trello.demo.models.Lista;
import com.trello.demo.repositories.TaskRepository;
import com.trello.demo.repositories.ListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ListaRepository listRepository;

    public Optional<Task> getTasksByListId(Long listId) {
        return taskRepository.findById(listId);
    }

    public Task createTask(Long listId, Task task) {
        Lista lista = listRepository.findById(listId).orElse(null);
        if (lista != null) {
            task.setList(lista);
            return taskRepository.save(task);
        }
        return null;
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task moveTask(Long taskId, Long newListId) {
        Task task = taskRepository.findById(taskId).orElse(null);
        Lista newList = listRepository.findById(newListId).orElse(null);
        if (task != null && newList != null) {
            task.setList(newList);
            return taskRepository.save(task);
        }
        return null;
    }
}
