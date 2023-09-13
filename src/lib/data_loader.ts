import mainStatsJson from '../assets/data/main_stats.json';
import overviewStatsJson from '../assets/data/overview_stats.json';

import IconUp from '../assets/images/icon-up.svg';
import IconDown from '../assets/images/icon-down.svg';

import IconFacebook from '../assets/images/icon-facebook.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconYoutube from '../assets/images/icon-youtube.svg';

export enum SocialMediaName {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  YOUTUBE = 'youtube',
}

export enum DeltaType {
  INC = 'inc',
  DEC = 'dec',
}

export class MainStat {
  socialMediaName!: SocialMediaName;
  logoUrl!: string;
  profileHandle!: string;
  statName!: string;
  statValue!: string;
  deltaType!: DeltaType;
  deltaIconUrl!: string;
  deltaDesc!: string;
}

export class OverviewStat {
  socialMediaName!: SocialMediaName;
  logoUrl!: string;
  statName!: string;
  statValue!: string;
  deltaType!: DeltaType;
  deltaIconUrl!: string;
  deltaDesc!: string;
}

export function loadMainStats(): MainStat[] {
  return mainStatsJson.map(json => {
    const stat = new MainStat();
    stat.socialMediaName = json.social_media_name as SocialMediaName;
    stat.logoUrl = getLogoUrl(stat.socialMediaName);
    stat.profileHandle = json.profile_handle;
    stat.statName = json.stat_name;
    stat.statValue = json.stat_value;
    stat.deltaType = json.delta_type as DeltaType;
    stat.deltaIconUrl = getDeltaIconUrl(stat.deltaType);
    stat.deltaDesc = json.delta_desc;
    return stat;
  });
}

export function loadOverviewStats(): OverviewStat[] {
  return overviewStatsJson.map(json => {
    const stat = new OverviewStat();
    stat.socialMediaName = json.social_media_name as SocialMediaName;
    stat.logoUrl = getLogoUrl(stat.socialMediaName);
    stat.statName = json.stat_name;
    stat.statValue = json.stat_value;
    stat.deltaType = json.delta_type as DeltaType;
    stat.deltaIconUrl = getDeltaIconUrl(stat.deltaType);
    stat.deltaDesc = json.delta_desc;
    return stat;
  });
}

function getLogoUrl(socialMediaName: SocialMediaName): string {
  switch (socialMediaName) {
    case SocialMediaName.FACEBOOK:
      return IconFacebook;
    case SocialMediaName.TWITTER:
      return IconTwitter;
    case SocialMediaName.INSTAGRAM:
      return IconInstagram;
    case SocialMediaName.YOUTUBE:
      return IconYoutube;
  }
}

function getDeltaIconUrl(deltaType: DeltaType): string {
  switch (deltaType) {
    case DeltaType.INC:
      return IconUp;
    case DeltaType.DEC:
      return IconDown;
  }
}
