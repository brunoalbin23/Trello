package com.trello.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trello.demo.models.Lista;

@Repository
public interface ListaRepository extends JpaRepository<Lista, Long> {
}
