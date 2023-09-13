<script lang="ts">
  import MainStatCard from './MainStatCard.svelte';

  import { loadMainStats, MainStat } from '../../data_loader';

  const mainStats: MainStat[] = loadMainStats();
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
  {#each mainStats as stat}
    <MainStatCard
      logo={stat.logoUrl}
      socialMediaName={stat.socialMediaName}
      profileHandle={stat.profileHandle}
      statName={stat.statName}
      statValue={stat.statValue}
      deltaType={stat.deltaType}
      deltaIcon={stat.deltaIconUrl}
      deltaDesc={stat.deltaDesc}
    />
  {/each}
</div>
