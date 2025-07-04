<script>
  import './page.css';
  import { goto } from '$app/navigation';

  let { data } = $props();

  // Incializa o estado do nome. Caso exista um nome na URL ele é usado no load, retornado para a página e utilizado como valor inicial do input. Caso não exista, o input fica vazio.
  let name = $state(data.result?.name || '');

  let debounceTimer = null;

  function handleInput() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const url = new URL(window.location.href);
      if (name) {
        url.searchParams.set('name', name);
      } else {
        url.searchParams.delete('name');
      }
      goto(url.pathname + url.search, { replaceState: true, keepFocus: true, noScroll: true });
    }, 1000);
  }
</script>

<div class="container">
	<h1>Descubra a idade do nome</h1>

	<div class="input-container">
		<input type="text" bind:value={name} oninput={handleInput} placeholder="Digite um nome..." />
	</div>

	{#if data.result}
		<div class="result">
			<p>A idade estimada para o nome <strong>{data.result.name}</strong> é:</p>
			<div class="age">{data.result.age} anos</div>
		</div>
	{/if}
</div>
