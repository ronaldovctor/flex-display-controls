import React, { useState } from 'react'
import Display from '../../components/display/Display'
import BoxOptions from '../../components/box-options/BoxOptions'
import DisplayOptions from '../../components/display-options/DisplayOptions'

function Body() {
	return (
		<section className='content mainContainer'>
			<div
				style={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}
			>
				<DisplayOptions id='flex-container' title='Flex Container' />
				<BoxOptions id='flex-item-1' title='Flex Item 1' />
				<BoxOptions id='flex-item-2' title='Flex Item 2' />
				<BoxOptions id='flex-item-3' title='Flex Item 3' />
			</div>
			<Display id={'flex-container'} />
		</section>
	)
}

export default Body
