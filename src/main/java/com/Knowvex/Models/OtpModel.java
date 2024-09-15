package com.Knowvex.Models;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "otp")
@Data
public class OtpModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID otpId;

    @Column(nullable = false)
    private long otp;

    @Column(nullable = false)
    private String email;

    @Column
    private Timestamp createdAt;

    @Column
    private Timestamp expiresAt;

}
