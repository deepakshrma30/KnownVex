package com.Knowvex.Repositories;

import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

public interface BillingAddressRepository extends JpaRepository<BillingAddressModel, UUID> {
    List<BillingAddressModel> findAllByUser(UserModel user);

    @Modifying
    @Transactional
    @Query("UPDATE BillingAddressModel b SET b.isDefault = false WHERE b.user = :user AND b.isDefault = true")
    void setOtherAddressesToNonDefault(UserModel user);
}
