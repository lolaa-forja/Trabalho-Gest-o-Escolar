"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import styles from "./page.module.css";

interface FieldErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!email.trim()) next.email = "Informe seu e-mail.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Digite um e-mail valido.";
    if (!password) next.password = "Informe sua senha.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    try {
      // Troque pela chamada real da sua API de autenticacao
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setFormError("E-mail ou senha incorretos. Confira os dados e tente de novo.");
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setFormError("Nao foi possivel entrar agora. Verifique sua conexao e tente de novo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.brand} aria-hidden="true">
        <h2 className={styles.brandTitle}>Gestao escolar em um so lugar</h2>
        <p className={styles.brandText}>
          Turmas, notas, frequencia e comunicados para professores, alunos e secretaria.
        </p>
      </section>

      < section className={styles.panel} >
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div>
            <h1 className={styles.title}>Entrar</h1>
            <p className={styles.subtitle}>Use o e-mail cadastrado na escola.</p>
          </div>

          { formError && (
            <p className={styles.formError} role="alert">
              {formError}
            </p>
          )}

          < Input
            label="E-mail"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="nome@escola.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          < Input
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            endAdornment={
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPassword((v) => !v)}
                aria-pressed={showPassword}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </Button>
            }
          />

          < Button type="submit" fullWidth loading={loading}>
            Entrar
          </Button>

          < p className={styles.footer}>
            <a href="/recuperar-senha">Esqueci minha senha</a>
          </p>
        </form>
      </section>
    </main>
  );
}