<script lang="ts">
  let toggleIcon: HTMLElement;

  let darkMode = document.documentElement.classList.contains('dark');
  $: toggleText = darkMode ? 'Dark Mode' : 'Light Mode';
  $: toggleColor = darkMode ? 'bg-very-dark-blue-1' : 'bg-white';
  $: togglePos = darkMode ? 'translate-x-0' : 'translate-x-6';

  function handleToggle(e: Event) {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('dark');
  }
</script>

<div
  class="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-6"
>
  <div
    class="w-full md:w-auto pb-6 border-b-[0.5px] md:border-b-0 border-b-dark-grayish-blue dark:border-b-desaturated-blue"
  >
    <h1 class="text-very-dark-blue-1 dark:text-white text-2xl font-bold">
      Social Media Dashboard
    </h1>
    <p class="text-dark-grayish-blue dark:text-desaturated-blue font-bold mt-1">
      Total Followers: 23,004
    </p>
  </div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="w-full md:w-auto flex justify-between items-center gap-4">
    <p
      class="text-dark-grayish-blue dark:text-desaturated-blue text-sm font-bold"
    >
      {toggleText}
    </p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-12 h-6 rounded-xl p-1 hover:cursor-pointer bg-dark-grayish-blue dark:bg-gradient-to-r dark:from-blue dark:to-green"
      on:click={handleToggle}
    >
      <div
        class="w-4 h-4 rounded-full {togglePos} transition-all {toggleColor}"
        bind:this={toggleIcon}
      />
    </div>
  </div>
</div>
