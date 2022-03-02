// 예제 21-11 app/nav.js 파일

import {navigate} from 'svelte-native';

let drawer;

export function setDrawer(d) {
  drawer = d;
}

export function goToPage(page, props) {
  drawer.closeDrawer();
  // clearHistory를 true로 설정하면 "<Back" 버튼이 표시되지 않습니다.
  navigate({page, props, clearHistory: true, frame: 'mainFrame'});
}

export function toggleDrawer() {
  drawer.toggleDrawerState();
}
