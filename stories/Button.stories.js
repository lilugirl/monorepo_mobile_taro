import { Button } from '../components/Button/Button';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
export const Secondary = {
    args: {
        label: 'Button',
    },
};
export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
