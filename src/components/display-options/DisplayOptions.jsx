import React, { useState, useEffect } from 'react'
import Select from '../select/Select'
import styles from './DisplayOptions.module.scss'

function DisplayOptions({ id, title }) {
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
			<div className='option'>
				<h3>{title}</h3>
				<div className={styles.configs}>
					<Select
						onChange={setStyle}
						option={'flex-direction'}
						values={['column', 'row']}
					/>
					<Select
						onChange={setStyle}
						option={'flexwrap'}
						values={['wrap', 'nowrap']}
					/>
					<Select
						onChange={setStyle}
						option={'justify-content'}
						values={[
							'space-between',
							'space-around',
							'space-evenly',
							'start',
							'center',
						]}
					/>
					<Select
						onChange={setStyle}
						option={'align-items'}
						values={[
							'stretch',
							'center',
							'flex-start',
							'flex-end',
							'baseline',
							'initial',
						]}
					/>
					<Select
						onChange={setStyle}
						option={'align-content'}
						values={[
							'stretch',
							'center',
							'flex-start',
							'flex-end',
							'space-between',
							'space-around',
							'space-evenly',
							'initial',
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default DisplayOptions
