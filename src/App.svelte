<script>
  import Header from './lib/components/Header.svelte';
  import MainStat from './lib/components/mainstat/MainStat.svelte';
  import Overview from './lib/components/overview/Overview.svelte';
</script>

<!-- Background -->
<div
  class="absolute z-[-1] top-0 w-full h-[300px] rounded-b-3xl bg-very-pale-blue dark:bg-very-dark-blue-2 transition-all"
/>

<!-- Container -->
<div class="w-[400px] md:w-[1200px] mx-auto my-12 font-inter">
  <Header />
  <MainStat />
  <Overview />
</div>
