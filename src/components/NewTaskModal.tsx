// src/components/NewTaskModal.tsx
import { useState } from 'react';
import styles from '../styles/NewTaskModal.module.scss';

interface NewTaskModalProps {
  onClose: () => void;
  onAdd: (title: string) => void;
}

export default function NewTaskModal({ onClose, onAdd }: NewTaskModalProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Nova tarefa</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título da tarefa"
            className={styles.input}
          />
          <div className={styles.buttons}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>
              Cancelar
            </button>
            <button type="submit" className={styles.addButton}>
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}