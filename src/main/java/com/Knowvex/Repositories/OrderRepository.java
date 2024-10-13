package com.Knowvex.Repositories;

import com.Knowvex.Models.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderModel, UUID> {

    Optional<OrderModel> findByOrderId(String OrderID);
}
