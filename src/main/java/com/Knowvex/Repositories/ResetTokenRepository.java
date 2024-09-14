package com.Knowvex.Repositories;

import com.Knowvex.Models.ResetTokenModel;
import com.Knowvex.Utils.ResetTokenUtil;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

public interface ResetTokenRepository extends JpaRepository<ResetTokenModel, UUID> {
    ResetTokenModel findByToken(String token);
    ResetTokenModel findByEmailIgnoreCase(String email);

    @Transactional
    @Modifying
    @Query("DELETE from ResetTokenModel o where o.expiresAt < CURRENT_TIMESTAMP")
    void deleteExpiredToken();
}
