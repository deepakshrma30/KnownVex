package com.Knowvex.Repositories;

import com.Knowvex.Models.QueryModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface QueryRepository extends JpaRepository<QueryModel, UUID> {
}
