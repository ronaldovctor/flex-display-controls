import React from 'react'
import styles from './Box.module.scss'

function Box({ children, color, id }) {
	return (
		<div className={styles.box} id={id} style={{ backgroundColor: `${color}` }}>
			{children}
		</div>
	)
}

export default Box
