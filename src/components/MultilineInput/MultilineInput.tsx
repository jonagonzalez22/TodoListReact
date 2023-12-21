import React from 'react';
import styles from './MultilineInput.module.css';
import TextField from '@mui/material/TextField';

export type MultilineInputProps = {
	handleChangeNewTaskInput?: (
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	newTaskInputValue: string;
};

const MultilineInput: React.FC<MultilineInputProps> = ({
	handleChangeNewTaskInput,
	newTaskInputValue,
}) => {
	return (
		<div className={styles.multilineinput}>
			<TextField
				id='outlined-multiline-flexible'
				label='Nueva tarea'
				multiline
				value={newTaskInputValue}
				maxRows={4}
				onChange={handleChangeNewTaskInput}
				onKeyUp={() => {}}
			/>
		</div>
	);
};

export default MultilineInput;
