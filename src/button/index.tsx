/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:53:00
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 00:00:10
 * @Description:
 */
import { defineComponent, PropType, toRefs } from 'vue';
import 'uno.css';

export default defineComponent({
  name: 'VButton',
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
      bg-green-500 
      hover:bg-green-700 
      border-none 
      cursor-pointer 
      `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
