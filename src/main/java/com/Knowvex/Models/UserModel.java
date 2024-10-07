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
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
@Table(name = "knowvex_user")
@Data
public class UserModel implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonView(ViewUtil.signup.class)
    private UUID id;

    @JsonView(ViewUtil.signup.class)
    @Column(nullable = false)
    @NotBlank(message = "First name cannot be empty")
    private String name;

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

    @CreationTimestamp
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Column(updatable = false)
    Timestamp createdAt;

    @Column
    @UpdateTimestamp
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    Timestamp updatedAt;

    @PrePersist
    @PreUpdate
    public void normalizeEmail() {
        if (email != null) {
            email = email.toLowerCase();
        }
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Stream.of(this.role)
                .map(role -> new SimpleGrantedAuthority(role.name()))
                .collect(Collectors.toList());
    }

    @Override
    @JsonIgnore
    public String getUsername() {
        return this.email;
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonExpired() {
        return UserDetails.super.isAccountNonExpired();
    }

    @Override
    @JsonIgnore
    public boolean isAccountNonLocked() {
        return UserDetails.super.isAccountNonLocked();
    }

    @Override
    @JsonIgnore
    public boolean isCredentialsNonExpired() {
        return UserDetails.super.isCredentialsNonExpired();
    }

    @Override
    @JsonIgnore
    public boolean isEnabled() {
        return true;
    }
}
