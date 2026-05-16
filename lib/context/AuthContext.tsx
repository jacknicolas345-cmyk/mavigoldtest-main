"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = { id: string; role: string; name?: string };

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

function parseToken(token: string): User | null {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return { id: payload.id, role: payload.role, name: payload.name };
  } catch {
    return null;
  }
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // اول localStorage چک کن، بعد cookie
    const t = localStorage.getItem("token") || getCookie("token");
    if (t) {
      setToken(t);
      setUser(parseToken(t));
      // هر دو رو set کن
      localStorage.setItem("token", t);
      setCookie("token", t, 7);
    }
  }, []);

  const login = (t: string) => {
    localStorage.setItem("token", t);
    setCookie("token", t, 7);
    setToken(t);
    setUser(parseToken(t));
  };

  const logout = () => {
    localStorage.removeItem("token");
    deleteCookie("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAdmin: user?.role === "admin" }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
