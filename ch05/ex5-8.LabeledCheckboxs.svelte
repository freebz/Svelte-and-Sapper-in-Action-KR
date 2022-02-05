<!-- 예제 5-8 src/LabeledCheckboxs.svelte 파일의 LabeledCheckboxes 컴포넌트 -->

<script>
  import PropTypes from 'prop-types/prop-types';
  const {arrayOf, checkPropTypes, shape, string} = PropTypes;

  const propTypes = {
    className: string,
    label: string.isRequired,
    list: arrayOf(shape({
      label: string.isRequired,
      value: string
    })).isRequired,
    selected: arrayOf(string).isRequired
  }
  checkPropTypes(propTypes, $$props, 'prop', 'LabeledCheckboxes');

  ... 생략 ...
</script>
... 생략 ...