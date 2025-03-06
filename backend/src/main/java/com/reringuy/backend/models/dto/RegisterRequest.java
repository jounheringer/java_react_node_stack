package com.reringuy.backend.models.dto;

import com.reringuy.backend.models.entities.Roles;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest{

    String email;
    String password;
    String name;
    Roles role = Roles.ROLE_USER;
}
