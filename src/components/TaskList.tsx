"use client"; // Esto indica que es un Client Component

import { useState } from 'react';
import TaskItem from './TaskItem';
import NewTaskModal from './NewTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
import styles from '../styles/TaskList.module.scss';
import { Task } from '../types';

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Lavar as mãos', completed: false },
    { id: 2, title: 'Fazer um bolo', completed: false },
    { id: 3, title: 'Lavar a louça', completed: false },
    { id: 4, title: 'Limpar o banheiro', completed: true },
  ]);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTaskToDelete(id);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setTaskToDelete(null);
    }
  };



  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={styles.taskListContainer}>
      <h2 className={styles.heading}>Suas tarefas de hoje</h2>
      
      <div className={styles.taskList}>
        {activeTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
        {completedTasks.length > 0 && (
          <>
            <h3 className={styles.completedHeading}>Tarefas finalizadas</h3>
            {completedTasks.map(task => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))}
          </>
        )}
      </div>
      <button className={styles.addButton} onClick={() => setIsNewTaskModalOpen(true)}>
        Adicionar nova tarefa
      </button>
      {isNewTaskModalOpen && (
        <NewTaskModal 
          onClose={() => setIsNewTaskModalOpen(false)} 
          onAdd={addTask}
        />
      )}
      {taskToDelete !== null && (
        <DeleteTaskModal 
          onConfirm={confirmDelete}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
}