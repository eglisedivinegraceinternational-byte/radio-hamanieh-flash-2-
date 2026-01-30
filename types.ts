
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  action?: () => void;
  link?: string;
  isExternal?: boolean;
}

export enum AppView {
  HOME = 'home',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface StreamInfo {
  status: 'playing' | 'paused' | 'loading' | 'error';
  title: string;
  artist: string;
}
