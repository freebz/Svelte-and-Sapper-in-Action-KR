// 예제 8-9 src/helper.js에 정의한 도우미 함수들

import {onMount} from 'svelte';

export function onMountFocus() {
  onMount(() => {
    const input = document.querySelector('input');
    input.focus();
  });
}

export function onMountLog(name) {
  onMount(() => console.log(name, 'mounted'));
}