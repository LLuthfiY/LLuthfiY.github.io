<script>
	export let text = 'test text';
	export let keepCursor = 'true';
	export let cursor = '|';
	export let msPerCharacter = '100';
	export let totalTypingTimeInMs = '-1';
	let typedText = '';
	let isTyping = true;
	let typingTime = parseInt(msPerCharacter);

	if (totalTypingTimeInMs !== '-1') {
		typingTime = parseInt(totalTypingTimeInMs) / text.length;
	}
	/**
	 *
	 * @param {number} ms
	 */
	const sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
	const addCharWithSleep = async () => {
		for (let i = 0; i < text.length; i++) {
			await sleep(typingTime);
			typedText += text[i];
		}
		isTyping = false;
	};
	addCharWithSleep();
</script>

<p class=" text-chalk-green fs text-lg font-mono">
	{typedText}<span
		class=" text-chalk-green {isTyping ? '' : 'type'} {!isTyping && keepCursor !== 'true'
			? 'hidden'
			: ''} ">{cursor}</span
	>
</p>
