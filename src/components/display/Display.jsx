import React from 'react'
import Boxes from '../boxes/Boxes'
import styles from './Display.module.scss'

function Display({ id }) {
	return (
		<div className={styles.display}>
			<div className={styles.displayContent} id={id}>
				<Boxes colors={['#ED780B', '#6D10B6', '#108EB6']} />
			</div>
		</div>
	)
}

export default Display
