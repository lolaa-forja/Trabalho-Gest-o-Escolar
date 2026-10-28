- field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

- label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
}

- control {
  display: flex;
  align-items: center;
  height: 44px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color 0.15s, box-shadow 0.15s;
}

- control:focus-within {
  border-color: var(--color-focus);
  box-shadow: 0 0 0 3px rgba(31, 79, 216, 0.2);
}

- invalid { border-color: var(--color-danger); }
- invalid:focus-within { box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.2); }

- input {
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 var(--space-3);
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 16px;
  color: var(--color-text);
  outline: none;
}

- input::placeholder { color: var(--color-text-muted); }
- input:disabled { cursor: not-allowed; opacity: 0.6; }

- addon {
  display: flex;
  align-items: center;
  padding-right: var(--space-2);
}

- hint { font-size: 13px; color: var(--color-text-muted); margin: 0; }
- error { font-size: 13px; color: var(--color-danger); margin: 0; }