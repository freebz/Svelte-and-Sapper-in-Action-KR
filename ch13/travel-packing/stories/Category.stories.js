// 예제 12-17 stories/Category.stories.js 파일에 정의한 Category 컴포넌트 스토리

import {action} from '@storybook/addon-actions';
import Category from '../src/Category.svelte';
import '../public/global.css';

export default {title: 'Category'};

function getOptions(items) {
  const category = {id: 1, name: 'Clothes', items};
  return {
    Component: Category,
    props: {
      category,
      categories: {[category.id]: category},
      dnd: {},
      show: 'all'
    },
    on: {delete: action('category delete dispatched')}
  };
}

export const empty = () => getOptions({});
export const nonEmpty = () =>
  getOptions({
    1: {id: 1, name: 'socks', packed: true},
    2: {id: 2, name: 'shoes', packed: false}
  });