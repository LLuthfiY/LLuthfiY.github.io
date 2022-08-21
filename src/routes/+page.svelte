<script>
	import Terminal from '$lib/terminal.svelte';
	import data from '$lib/data.js';

	// add terminal line
</script>

<div class=" container m-auto ">
	<div class=" flex lg:p-8 md:p-4 sm:p-1">
		<Terminal initData={JSON.stringify(data)} />
	</div>
</div>
