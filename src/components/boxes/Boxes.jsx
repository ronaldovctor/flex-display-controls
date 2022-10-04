import React from 'react'
import Box from './box/Box'

function Boxes({ colors }) {
	return (
		<>
			{colors.map((color, index) => {
				return (
					<Box key={index} id={`flex-item-${index + 1}`} color={color}>
						{index + 1}
					</Box>
				)
			})}
		</>
	)
}

export default Boxes
