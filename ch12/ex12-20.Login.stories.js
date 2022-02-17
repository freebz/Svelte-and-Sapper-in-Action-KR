// 예제 12-20 stories/Login.stories.js 파일에 정의한 Login 컴포넌트 스토리

import {action} from '@storybook/addon-actions';
import StyleWrapper from './StyleWrapper.svelte';
import Login from '../src/Login.svelte';
import '../public/global.css';

export default {title: 'Login'};

export const basic = () => ({
  Component: StyleWrapper,
  props: {
    component: Login,
    style: `
      background-color: cornflowerblue;
      height: 100vh;
      padding: 1rem
    `
  },
  on: {login: action('login dispatched')}
});