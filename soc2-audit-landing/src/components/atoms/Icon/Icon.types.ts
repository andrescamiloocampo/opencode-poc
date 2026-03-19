export type IconName =
  | 'shield'
  | 'check'
  | 'lock'
  | 'unlock'
  | 'search'
  | 'code'
  | 'terminal'
  | 'git-branch'
  | 'zap'
  | 'clock'
  | 'users'
  | 'building'
  | 'file-text'
  | 'clipboard'
  | 'bar-chart'
  | 'trending-up'
  | 'alert-triangle'
  | 'info'
  | 'x'
  | 'menu'
  | 'chevron-down'
  | 'chevron-right'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'play'
  | 'pause'
  | 'star'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'linkedin'
  | 'twitter'
  | 'github'
  | 'youtube';

export interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
}
