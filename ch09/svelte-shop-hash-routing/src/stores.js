// 예제 9-1 stores.js 파일에 정의한 cartStore

import {writable} from 'svelte/store';

export const cartStore = writable([]);