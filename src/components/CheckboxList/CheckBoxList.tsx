import React, { useState } from 'react';
import styles from './checkBoxList.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export type CheckboxListProps = {
	tasks: string[];
	deleteTasks: (index: number) => void;
	selectTasdToUpdate: (index: number) => void;
};

const CheckboxList: React.FC<CheckboxListProps> = ({
	tasks,
	deleteTasks,
	selectTasdToUpdate,
}) => {
	const [checked, setChecked] = useState<string[]>([]);

	const handleToggle = (value: string) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<div className={styles.checkBoxListContainer}>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{tasks.map((todo, index) => {
					const labelId = `checkbox-list-label-${index}`;

					return (
						<ListItem key={todo} disablePadding>
							<ListItemButton
								role={undefined}
								onClick={handleToggle(todo)}
								dense>
								<ListItemIcon>
									<Checkbox
										edge='start'
										checked={checked.indexOf(todo) !== -1}
										tabIndex={-1}
										disableRipple
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemIcon>
								<ListItemText id={labelId} primary={`${todo}`} />
							</ListItemButton>
							<ListItemSecondaryAction>
								<IconButton
									edge='end'
									aria-label='delete'
									onClick={() => {
										selectTasdToUpdate(index);
									}}>
									<EditIcon />
								</IconButton>
								<IconButton
									edge='end'
									aria-label='edit'
									onClick={() => {
										deleteTasks(index);
									}}>
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
};

export default CheckboxList;
