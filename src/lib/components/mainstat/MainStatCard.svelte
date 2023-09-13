<script lang="ts">
  import { DeltaType, SocialMediaName } from '../../data_loader';
  import { computeDeltaDescTextColor } from '../../utils';

  export let logo: string;
  export let socialMediaName: SocialMediaName;
  export let profileHandle: string;
  export let statName: string;
  export let statValue: string;
  export let deltaType: DeltaType;
  export let deltaIcon: string;
  export let deltaDesc: string;

  let bgColor: string = computeBgColor(socialMediaName);
  let deltaDescTextColor: string = computeDeltaDescTextColor(deltaType);

  function computeBgColor(socialMediaName: SocialMediaName) {
    switch (socialMediaName) {
      case SocialMediaName.FACEBOOK:
        return 'bg-facebook-blue';
      case SocialMediaName.TWITTER:
        return 'bg-twitter-blue';
      case SocialMediaName.INSTAGRAM:
        return 'bg-gradient-to-r from-instagram-1 to-instagram-2';
      case SocialMediaName.YOUTUBE:
        return 'bg-youtube-red';
    }
  }
</script>

<div class="h-[250px] {bgColor} pt-1 rounded-md shadow-md">
  <div
    class="h-full w-full bg-light-grayish-blue dark:bg-dark-desaturated-blue flex flex-col justify-center items-center gap-4 p-4"
  >
    <!-- logo & profileId -->
    <div class="flex justify-center gap-2">
      <img
        src={logo}
        alt="logo"
      />
      <p
        class="text-dark-grayish-blue dark:text-desaturated-blue text-sm font-bold"
      >
        {profileHandle}
      </p>
    </div>

    <!-- Stat -->
    <div class="flex flex-col items-center gap-2 p-4">
      <p class="text-6xl font-bold text-very-dark-blue-1 dark:text-white">
        {statValue}
      </p>
      <p
        class="uppercase text-dark-grayish-blue dark:text-desaturated-blue tracking-[0.5em] text-xs"
      >
        {statName}
      </p>
    </div>

    <!-- Delta -->
    <div class="flex justify-center items-center gap-1">
      <img
        src={deltaIcon}
        alt="delta-icon"
      />
      <p class="{deltaDescTextColor} text-xs font-bold capitalize">
        {deltaDesc}
      </p>
    </div>
  </div>
</div>
