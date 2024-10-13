package com.Knowvex.Repositories;

import com.Knowvex.Enums.PlanEnum;
import com.Knowvex.Enums.ProductEnum;
import com.Knowvex.Models.CartModel;
import com.Knowvex.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public interface CartRepository extends JpaRepository<CartModel, UUID> {
    boolean existsByProductAndPlanAndUser(ProductEnum product, PlanEnum plan, UserModel user);
    List<CartModel> findAllByUser(UserModel user);

    @Modifying
    @Transactional
    void deleteAllByUser(UserModel user);
}
