/*
 * @Author: 朽木白
 * @Date: 2022-08-15 22:53:00
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-16 09:14:38
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
  plain: {
    type: Boolean,
    default: false,
  },
} as const;
export default defineComponent({
  name: 'VButton',
  props,
  setup(props, { slots }) {
    console.log(props.round);

    const size = {
      small: {
        x: '2',
        y: '1',
        text: 'sm',
      },
      medium: {
        x: '3',
        y: '1.5',
        text: 'base',
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
          ${props.round ? 'rounded-full' : 'rounded-lg'} 
          font-semibold 
          shadow-md 
          text-white
          text-${size[props.size].text}
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-solid
          border-${props.color}-${props.plain ? '500' : '500'}
          cursor-pointer 
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
      `}
      >
        {slots.default ? slots.default() : ''}
      </button>
    );
  },
});
