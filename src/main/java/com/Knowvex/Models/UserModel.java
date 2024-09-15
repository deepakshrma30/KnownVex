package com.Knowvex.Models;

import com.Knowvex.Enums.RoleEnum;
import com.Knowvex.Utils.ViewUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "knowvex_user")
@Data
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(ViewUtil.signup.class)
    private UUID id;

    @JsonView(ViewUtil.signup.class)
    @Column(nullable = false, name = "first_name")
    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @JsonView(ViewUtil.signup.class)
    @Column(nullable = false, name = "last_name")
    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    @Column(nullable = false, unique = true)
    @JsonView({ViewUtil.signup.class, ViewUtil.login.class})
    @NotBlank(message = "Email cannot be empty")
    private String email;

    @JsonView(ViewUtil.signup.class)
    @Column(nullable = false)
    @NotBlank(message = "Phone number cannot be empty")
    private String phoneNumber;

    @JsonView({ViewUtil.signup.class, ViewUtil.login.class})
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    @NotBlank(message = "Password cannot be empty")
    private String password;

    @Column
    @JsonView(ViewUtil.signup.class)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Boolean active = false;

    @Enumerated(EnumType.STRING)
    @JsonView(ViewUtil.signup.class)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private RoleEnum role = RoleEnum.USER;

    @Column
    @CreationTimestamp
    @JsonIgnore
    private Timestamp createdAt;

    @Column
    @UpdateTimestamp
    @JsonIgnore
    private Timestamp updatedAt;

    @PrePersist
    @PreUpdate
    public void normalizeEmail() {
        if (email != null) {
            email = email.toLowerCase();
        }
    }

    @OneToMany(mappedBy = "user")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    List<CartModel> carts;
}
