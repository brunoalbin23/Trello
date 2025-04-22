package com.trello.demo.controllers;

import com.trello.demo.models.Task;
import com.trello.demo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/lists/{listId}/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping
    public Optional<Task> getTasksByList(@PathVariable Long listId) {
        return taskService.getTasksByListId(listId);
    }

    @PostMapping
    public Task createTask(@PathVariable Long listId, @RequestBody Task task) {
        return taskService.createTask(listId, task);
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
    }

    @PutMapping("/{taskId}/move/{newListId}")
    public Task moveTask(@PathVariable Long taskId, @PathVariable Long newListId) {
        return taskService.moveTask(taskId, newListId);
    }
}
