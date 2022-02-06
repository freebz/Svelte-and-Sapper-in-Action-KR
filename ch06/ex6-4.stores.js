// 예제 6-4 주기적으로 값이 바뀌는 스토어

import {readable} from 'svelte/store';

let value = 0;
export const tensStore = readable(
  value,
  set => {
    const token = setInterval(() => {
      value += 10;
      set(value);
    }, 1000);
    return () => clearInterval(token);
  }
);