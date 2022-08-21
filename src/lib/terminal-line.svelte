<script>
	import { json } from '@sveltejs/kit';

	import { element } from 'svelte/internal';

	export let globalString = '';
	export let initialValue = '';

	export let addGlobalString = (/** @type {string} */ newString) => {
		console.log(newString);
	};
	export let addTerminalLine = () => {
		console.log('add terminal line');
	};
	export let clearTerminal = () => {
		console.log('clear terminal');
	};
	let result = '';
	let disable_input = false;
	// @ts-ignore
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			if (event.target.value.trim() === 'clear') {
				clearTerminal();
				return;
			}
			try {
				let elementValue = event.target.value;
				const consoleLog = /console.log/g;

				if (consoleLog.test(elementValue)) {
					elementValue = elementValue.replace(consoleLog, 'logs.push');
					elementValue += ' \n JSON.parse(JSON.stringify(logs))';
				}
				result = JSON.stringify(eval(globalString + elementValue), null, 4);
				addGlobalString(event.target.value);
			} catch (err) {
				// @ts-ignore
				result = err.message;
			}
			result = '\n' + result;
			disable_input = true;
			addTerminalLine();
		}
	};
	if (initialValue) {
		result = JSON.stringify(eval(globalString + initialValue), null, 4);
		result = '\n' + result;
		disable_input = true;
		addTerminalLine();
	}
</script>

<div>
	<div>
		<div class=" flex ">
			<span class=" py-1 pl-2 pr-4 font-bold rounded-l-lg text-chalk-green">$system></span>

			<!-- svelte-ignore a11y-autofocus -->
			<input
				autofocus
				class=" pl-4 caret-chalk-green bg-transparent flex-grow p-1 text-chalk-light-gray focus:outline-0 "
				type="text"
				name=""
				id=""
				tabindex="0"
				on:keydown={handleKeyDown}
				disabled={disable_input}
				value={initialValue}
			/>
		</div>
	</div>
	<pre class=" text-chalk-light-gray pl-2 -mt-6">
		{result}
    </pre>
</div>
