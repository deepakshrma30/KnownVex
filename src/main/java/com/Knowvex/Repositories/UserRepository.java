package com.Knowvex.Repositories;

import com.Knowvex.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<UserModel, UUID> {
    Boolean existsByEmailIgnoreCase(String email);
    UserModel findByEmailIgnoreCase(String email);
}
