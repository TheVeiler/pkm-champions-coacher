<script>
	/**
	 * Search results
	 * @type {Array<unknown>}
	 */
	let results = $state([])

	/**
	 * Reference to SearchBar HTMLElement
	 * @type {HTMLElement}
	 */
	let searchbar

	/**
	 * Search query
	 * @type {string}
	 */
	let query = $state("")

	/**
	 * @param {KeyboardEvent} e
	 */
	function onKeyDown(e) {
		if (e.ctrlKey && e.key === "k") {
			e.preventDefault()

			searchbar.focus()
		}
	}

	function search() {
		if (query !== "") {
			results.push(query)

			console.log($state.snapshot(results))
		} else {
			results = []

			console.log($state.snapshot(results))
		}
	}
</script>

<svelte:window on:keydown={onKeyDown} />

<div id="search-container">
	<input
		type="text"
		placeholder="Rechercher..."
		name="search"
		id="search"
		bind:this={searchbar}
		bind:value={query}
		oninput={search}
		autocomplete="off"
	/>
	<span class="shortcut">CTRL K</span>
	<ul id="search-results">
		{#each results as result}
			<li>{result}</li>
		{/each}
	</ul>
</div>

<style>
	#search-container {
		--placeholder-color: rgb(117, 117, 117);
		--placeholder-font: Arial;
		--placeholder-size: 0.85rem;

		align-self: center;
		align-items: center;
		background: var(--bg-elevated);
		border: 1px solid var(--border-subtle);
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-bottom: 2rem;
		overflow-y: visible;
		position: fixed;
		width: min(100vw, 20rem);

		&:has(> :focus) {
			border-color: var(--accent-primary);
			box-shadow: 0 0 8px var(--glow-purple);

			ul:has(> li) {
				display: block;
			}
		}

		> * {
			box-sizing: border-box;
			padding: 0.5rem 1rem;
		}

		#search {
			background: none;
			border: none;
			color: var(--text-main);
			height: 2rem;
			width: 100%;

			&:focus {
				outline: none;
			}

			&::placeholder {
				color: var(--placeholder-color);
				font-family: var(--placeholder-font);
				font-size: var(--placeholder-size);
			}
		}

		.shortcut {
			color: var(--placeholder-color);
			font-family: var(--placeholder-font);
			font-size: var(--placeholder-size);

			position: absolute;
			right: 0;
			top: 0;
		}
		#search:not(:placeholder-shown) + .shortcut {
			display: none;
		}

		ul {
			border-top: 1px solid var(--accent-secondary);
			display: none;
			list-style: none;
			margin: 0;
			width: 100%;

			li {
				padding: 0.4em 0;
			}
		}
	}
</style>
