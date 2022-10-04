import React from 'react'
import styles from './Select.module.scss'

function Select({ onChange, option, values }) {
	return (
		<>
			<label className={styles.label}>{option}</label>
			<select name={option} onChange={onChange}>
				{values.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</>
	)
}

export default Select
