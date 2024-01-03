import { useState } from 'react';
import CheckboxList from '../../components/CheckboxList/CheckBoxList';
import { MultilineInput } from '../../components/MultilineInput';
import styles from './TodoList.module.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Alert from '@mui/material/Alert';

const TodoList = () => {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTaskInputValue, setNewTaskInputValue] = useState<string>('');
	const [taskSelected, setTaskSelected] = useState<number>(-1);
	const [buttonTitle, setButtonTitle] = useState('Agregar');

	const addNewTasks = (): void => {
		if (newTaskInputValue.trim() === '') return;

		const updatedTasks = [...tasks];
		if (taskSelected > -1) {
			updatedTasks[taskSelected] = newTaskInputValue;
			setTaskSelected(-1);
			setButtonTitle('Agregar');
		} else {
			updatedTasks.push(newTaskInputValue);
		}

		setTasks(updatedTasks);
		setNewTaskInputValue('');
	};

	const deleteTasks = (index: number): void => {
		const newTasks = [...tasks];

		newTasks.splice(index, 1);

		setTasks(newTasks);
	};

	const selectTasdToUpdate = (index: number): void => {
		setNewTaskInputValue(tasks[index]);
		setTaskSelected(index);
		setButtonTitle('Guardar cambios');
	};

	const handleChangeNewTaskInput = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setNewTaskInputValue(event.target.value);
	};

	return (
		<article className={styles.todolist}>
			<section className={styles.addTaskContainer}>
				<MultilineInput
					handleChangeNewTaskInput={handleChangeNewTaskInput}
					newTaskInputValue={newTaskInputValue}
				/>
				<Button
					variant='contained'
					startIcon={<AddCircleOutlineIcon />}
					onClick={addNewTasks}>
					{buttonTitle}
				</Button>
			</section>

			{tasks.length > 0 ? (
				<CheckboxList
					tasks={tasks}
					deleteTasks={deleteTasks}
					selectTasdToUpdate={selectTasdToUpdate}
				/>
			) : (
				<div className={styles.alertContainer}>
					<Alert severity='info'>No hay lista de tareas.</Alert>
				</div>
			)}
		</article>
	);
};

export default TodoList;
