<script lang="ts">
  import { DeltaType } from '../../data_loader';
  import { computeDeltaDescTextColor } from '../../utils';

  export let logo: string;
  export let statName: string;
  export let statValue: string;
  export let deltaType: DeltaType;
  export let deltaIcon: string;
  export let deltaDesc: string;

  let deltaDescTextColor: string = computeDeltaDescTextColor(deltaType);
</script>

<div
  class="h-[150px] flex flex-col gap-8 justify-center p-8 bg-light-grayish-blue dark:bg-dark-desaturated-blue rounded-md shadow-md"
>
  <!-- Header -->
  <div class="flex justify-between items-center">
    <p
      class="text-dark-grayish-blue dark:text-desaturated-blue font-bold capitalize"
    >
      {statName}
    </p>
    <img
      src={logo}
      alt="logo"
      class="w-6"
    />
  </div>
  <!-- Content -->
  <div class="flex justify-between items-end">
    <p class="text-4xl text-very-dark-blue-1 dark:text-white font-bold">
      {statValue}
    </p>
    <div class="flex items-center gap-1">
      <img
        src={deltaIcon}
        alt="delta-icon"
      />
      <p class="text-sm {deltaDescTextColor} font-bold">{deltaDesc}</p>
    </div>
  </div>
</div>
