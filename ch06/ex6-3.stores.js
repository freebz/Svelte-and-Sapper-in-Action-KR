// 예제 6-3 읽기 전용 스토어

import {readable} from 'svelte/store';

export const dogStore = readable([], set => {
  const res = await fetch('/dogs');
  const dogs = await res.join();
  set(dogs);
  return () => {};
});