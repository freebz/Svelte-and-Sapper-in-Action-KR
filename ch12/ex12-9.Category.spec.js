// 예제 12-9 Category.spec.js 파일의 Category 컴포넌트에 대한 제스트 테스트 모음

import { afterEach, beforeEach, expect, test } from "@jest/globals";
import {cleanup, fireEvent, render, waitFor} from "@testing-library/svelte";

import Category from './Category.svelte';

describe('Category', () => {
  let itemCount = 0;

  const category = {id: 1, name: 'Clothes', items: {}};
  const categories = [category];
  const dnd = {};
  const props = {categories, category, dnd, show: 'all'};

  beforeEach(() => {
    category.items = {
      1: {id: 1, name: 'socks', packed: true},
      2: {id: 2, name: 'shoes', packed: false}
    };
    itemCount = Object.keys(category.items).length;
  });

  afterEach(cleanup);

  test('should match snapshot', () => {
    const {container} = render(Category, props);
    expect(container).toMatchSnapshot();
  });

  function expectItemCount(count) {
    return waitFor(() => {
      const lis = document.querySelectorAll('li');
      expect(lis.length).toBe(count);
    });
  }

  test('should render', async () => {
    const {getByText} = render(Category, props);
    expect(getByText('Clothes'));
    expect(getByText('1 of 2 remaining'));
    expect(getByText('New Item'));
    expect(getByText('Add Item'));
    await expectItemCount(itemCount);
  });

  test('should add an item', async () => {
    const {getByTestId, getByText} = render(Category, props);

    const input = getByTestId('item-input');
    const value = 't-shirts';
    await fireEvent.input(input, {target: {value}});
    await fireEvent.click(getByText('Add Item'));

    await expectItemCount(itemCount + 1);
    expect(getByText(value));
  });

  test('should delete an item', async () => {
    const {getAllByTestId} = render(Category, props);

    const deleteBtns = getAllByTestId('delete');
    fireEvent.click(deleteBtns[0]); // deletes first item
    await expectItemCount(itemCount - 1);
  });

  test('should toggle an item', async () => {
    const {container, getByText} = render(Category, props);

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes.length).toBe(2);

    const [shoesCheckbox, socksCheckbox] = checkboxes;

    expect(socksCheckbox.nextElementSibling.textContent).toBe('socks');
    await fireEvent.click(socksCheckbox);

    expect(getByText('2 of 2 remaining'));

    expect(shoesCheckbox.nextElementSibling.textContent).toBe('shoes');
    await fireEvent.click(shoesCheckbox);
    expect(getByText('1 of 2 remaining'));
  });
});