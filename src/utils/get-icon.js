// @flow strict
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'mywebsite':
      icon = ICONS.MYWEBSITE;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
