import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Select from '../select/Select'
import styles from './BoxOptions.module.scss'

function BoxOptions({ id, title }) {
	const [element, setElement] = useState('')
	const [htmlElement, setHtmlElement] = useState(null)

	function setStyle({ target }) {
		setHtmlElement(document.querySelector(`#${element}`))
		const option = target.attributes['name'].value
		if (!htmlElement) return
		htmlElement.style[`${option}`] = target.value
	}

	useEffect(() => {
		setElement(id)
	}, [])

	return (
		<div>
			<div className='option box'>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.configs}>
					<Select
						onChange={setStyle}
						option={'flex-grow'}
						values={[0, 1, 2, 3, 4, 5]}
					/>
					<Select
						onChange={setStyle}
						option={'align-self'}
						values={['flex-start', 'center', 'flex-end']}
					/>
				</div>
			</div>
		</div>
	)
}

export default BoxOptions
