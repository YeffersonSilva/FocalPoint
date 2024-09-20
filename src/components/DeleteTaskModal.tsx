import styles from '../styles/DeleteTaskModal.module.scss';

interface DeleteTaskModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteTaskModal({ onConfirm, onCancel }: DeleteTaskModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles.buttons}>
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancelar
          </button>
          <button onClick={onConfirm} className={styles.deleteButton}>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}