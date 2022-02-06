// 예제 6-24 src/store-util.js에 구현한 데이터를 영구 저장할 수 있는 쓰기 기능 스토어

import {writable} from "svelte/store";

function persist(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function writableSession(key, initialValue) {
  const sessionValue = JSON.parse(sessionStorage.getItem(key));
  if (!sessionValue) persist(key, initialValue);

  const store = writable(sessionValue || initialValue);
  store.subscribe(value => persist(key, value));
  return store;
}