// @flow strict
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('facebook')).toEqual(ICONS.FACEBOOK);
});
