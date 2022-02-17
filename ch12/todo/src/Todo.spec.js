// 예제 12-3 src/Todo.spec.js의 Todo 컴포넌트에 대한 제스트 테스트 스위트

import {cleanup, render} from '@testing-library/svelte';

import Todo from './Todo.svelte';

describe('Todo', () => {
  const text = 'buy milk';
  const todo = {text};

  afterEach(cleanup);

  test('should render', () => {
    const {getByText} = render(Todo, {props: {todo}});
    const checkbox = document.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeNull(); // 체크박스를 찾은 경우
    expect(getByText(text)); // todo 문자열을 찾은 경우
    expect(getByText('Delete')); // 'Delete' 버튼을 찾은 경우
  });
});