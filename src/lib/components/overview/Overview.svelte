<script lang="ts">
  import { loadOverviewStats, type OverviewStat } from '../../data_loader';
  import OverviewCard from './OverviewCard.svelte';

  const overviewStats: OverviewStat[] = loadOverviewStats();
</script>

<div class="mt-12">
  <h2 class="text-2xl text-dark-grayish-blue dark:text-white font-bold">
    Overview - Today
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
    {#each overviewStats as stat}
      <OverviewCard
        logo={stat.logoUrl}
        statName={stat.statName}
        statValue={stat.statValue}
        deltaType={stat.deltaType}
        deltaIcon={stat.deltaIconUrl}
        deltaDesc={stat.deltaDesc}
      />
    {/each}
  </div>
</div>
