/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:53:00
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 08:51:40
 * @Description:
 */
import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type ISize = 'small' | 'medium' | 'large';

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
  size: {
    type: String as PropType<ISize>,
    default: 'medium',
  },
  round: {
    type: Boolean,
    default: false,
  },
} as const;
export default defineComponent({
  name: 'VButton',
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'sm',
      },
      large: {
        x: '4',
        y: '2',
        text: 'lg',
      },
    };
    return () => (
      <button
        class={`
          py-${size[props.size].y} 
          px-${size[props.size].x} 
          font-semibold 
          rounded-lg
          shadow-md 
          text-white
          text-${size[props.size].text}
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
