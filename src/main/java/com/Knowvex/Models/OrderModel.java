package com.Knowvex.Models;

import com.Knowvex.Enums.OrderStatusEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "orders")
@Data
public class OrderModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserModel user;

    @Column
    private double totalAmount;

    @Column
    private String items;

    @Column
    private String orderId;

    @Enumerated(EnumType.STRING)
    private OrderStatusEnum status;

    @ManyToOne
    @JoinColumn(name = "billing_address_id")
    private BillingAddressModel billingAddress;

    @CreationTimestamp
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Column(updatable = false)
    Timestamp createdAt;
}
