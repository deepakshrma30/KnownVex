package com.Knowvex.Repositories;

import com.Knowvex.Models.OtpModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

public interface OtpRepository extends JpaRepository<OtpModel, UUID> {
    OtpModel findByEmailIgnoreCase(String email);

    @Transactional
    @Modifying
    @Query("DELETE FROM OtpModel o WHERE o.expiresAt < CURRENT_TIMESTAMP")
    void deleteExpiredOtps();

}
