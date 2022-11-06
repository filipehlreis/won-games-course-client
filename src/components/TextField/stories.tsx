import { Story, Meta } from '@storybook/react/types-6-0';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ padding: 15, maxWidth: 300 }}>
    <TextField {...args} />
  </div>
);
