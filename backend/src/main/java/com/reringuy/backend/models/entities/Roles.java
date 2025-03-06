package com.reringuy.backend.models.entities;

public enum Roles {
    ROLE_ADMIN("ADMIN"),
    ROLE_USER("USER");

    private String role;
    Roles(String role) {
        this.role = role;
    }

    public String getRole() {
        return role;
    }
}
