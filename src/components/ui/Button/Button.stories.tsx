import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './../../../stories/Button';
import { Button, ButtonProps } from 'antd';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Клик',
    style: { background: 'black', color: 'white', borderRadius: '0' },
  },
};
