<script>
	import TerminalLine from '$lib/terminal-line.svelte';
	export let initData = `{
        name : "Luthfi",
        gender: "Male"
    }`;
	let numrows = ['data.greeting'];
	let globalString = `
    let logs = [];
    let data = ${initData}
    \n
    `;

	/**
	 *
	 * @param {number} ms
	 */
	const sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const focusToLastInput = () => {
		const inputs = document.querySelectorAll('input');
		const lastInput = inputs[inputs.length - 1];
		lastInput.focus();
	};

	const clearTerminal = async () => {
		numrows = [];
		await sleep(100);
		numrows = [''];
	};
	const addTerminalLine = () => {
		numrows = [...numrows, ''];
	};

	/**
	 *
	 * @param {String} newString
	 */
	const addGlobalString = (newString) => {
		const regConst = /const.*=/g;
		const regLet = /let.*=/g;
		const regVar = /var.*=/g;
		const regEqual = /=/g;

		if (regConst.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regLet.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regVar.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regEqual.test(newString)) {
			globalString = globalString + newString + '\n';
		}
	};
</script>

<div
	class="terminal m-auto bg-chalk-black min-w-[400px] w-[50%] h-[300px] rounded-lg p-4 "
	on:click={focusToLastInput}
>
	<div id="terminal-body" class="terminal-body p-4 h-full overflow-y-auto sc3">
		{#each numrows as row}
			<TerminalLine
				{clearTerminal}
				{addTerminalLine}
				{addGlobalString}
				{globalString}
				initialValue={row}
			/>
		{/each}
	</div>
</div>
