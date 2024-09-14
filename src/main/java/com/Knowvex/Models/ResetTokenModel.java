package com.Knowvex.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "password_reset_token")
@Data
public class ResetTokenModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private String email;

    @Column
    private Timestamp createdAt;

    @Column
    private Timestamp expiresAt;
}
