package com.Knowvex.Models;

import com.Knowvex.Enums.QueryStatusEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "queries")
@Data
public class QueryModel {

    @Id
    @GeneratedValue
    @Column(name = "query_id", updatable = false, nullable = false)
    private UUID queryId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "message", nullable = false, columnDefinition = "TEXT")
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private QueryStatusEnum status = QueryStatusEnum.PENDING;

    @CreationTimestamp
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Column(updatable = false)
    Timestamp createdAt;

    @Column
    @UpdateTimestamp
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    Timestamp updatedAt;
}
