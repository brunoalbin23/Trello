package com.trello.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trello.demo.models.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
