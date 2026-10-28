import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  // Elemento a direita do campo (ex.: botao de mostrar senha) /
  endAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, hint, endAdornment, id, className, ...props },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;
  const message = error ?? hint;

  return (
    <div className={`${styles.field} ${className ?? ""}`}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      <div className={`${styles.control} ${error ? styles.invalid : ""}`}>
        <input
          ref={ref}
          id={inputId}
          className={styles.input}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          {...props}
        />
        {endAdornment <div className={styles.addon}>{endAdornment}</div>}
      </div>

      {message  (
        <p
          id={messageId}
          className={error ? styles.error : styles.hint}
          role={error ? "alert" : undefined}
        >
          {message}
        </p>
      )}
    </div>
  );
});