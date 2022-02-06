// 예제 6-16 count-store.js에 정의한 count 스토어

import {writable} from "svelte/store";

const {subscribe, set, update} = writable(0);

export const count = {
  subscribe,
  increment: () => update(n => n + 1),
  decrement: () => update(n => n - 1),
  reset: () => set(0)
};