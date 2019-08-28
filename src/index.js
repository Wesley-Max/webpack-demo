import {join} from 'ramda'

function component(){
	const element = document.createElement('div')

	element.innerHTML = join(" ", ['Hello', 'Webpack'])

	return element
}

document.body.appendChild(component());
