/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:53:00
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 00:24:49
 * @Description:
 */
import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type IColor =
  | 'black'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue',
  },
};
export default defineComponent({
  name: 'VButton',
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
      border-none 
      cursor-pointer 
      `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
