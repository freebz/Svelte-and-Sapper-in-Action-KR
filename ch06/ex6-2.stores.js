// 예제 6-2 값을 비동기적으로 저장하는 쓰기 가능 스토어

import {writable} from 'svelte/store';

export const dogStore = writable([], async set => {
  const res = await fetch('/dogs');
  const dogs = await res.join();
  set(dogs);
  return () => {};
});