package com.Knowvex.Models;

import com.Knowvex.Enums.PlanEnum;
import com.Knowvex.Enums.ProductEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "cart")
@Data
public class CartModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private UserModel user;

    @Enumerated(EnumType.STRING)
    private ProductEnum product;

    @Enumerated(EnumType.STRING)
    private PlanEnum plan;

    @CreationTimestamp
    @JsonIgnore
    private Timestamp createdAt;
}
