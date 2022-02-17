// 예제 12-22 stories/Dialog.stories.js 파일에 정의한 Dialog 컴포넌트 스토리

import DialogWrapper from './DialogWrapper.svelte';
import '../public/global.css';

export default {title: 'Dialog'};

export const basic = () => ({Component: DialogWrapper});