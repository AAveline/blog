<svelte:head>
	<title>Aymeric Aveline - Freelance Developper</title>
</svelte:head>

	<div>
		<h1>Hello, <span>i'm Aymeric</span></h1>
	</div>

<style lang="scss">
	div {
		display: flex;
		align-items: center;
		flex-flow: column;
		height: 100%;
	}

	h1 {
		color: var(--orange);
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: auto;
		max-width: 14rem;

		span {
			color: var(--grey);
		}
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
