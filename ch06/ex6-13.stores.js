// 예제 6-13 src/stores.js에 상속 스토어 정의하기

import {derived} from 'svelte/store';

export const bigDogStore = derived(dogStore, store =>
  Object.values(store).filter(dog => dog.size === 'large')
);