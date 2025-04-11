import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
    component: Button,
}

type Story = StoryObj<typeof Button>
export const Primary: Story = {
    args: {
        children: 'Button',
        sizes: 'small',
        variant: 'primary',
        onClick: () => alert('Button clicked!'),
    },
}
export const Secondary: Story = {
    args: {
        children: 'Button',
        sizes: 'small',
        variant: 'secondary',
        onClick: () => alert('Button clicked!'),
    },
}


export default meta;