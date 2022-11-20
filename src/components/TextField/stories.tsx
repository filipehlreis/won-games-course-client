import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined/';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ padding: 15, maxWidth: 300 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ padding: 15, maxWidth: 300 }}>
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  icon: <Email />,
};

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ padding: 15, maxWidth: 300 }}>
    <TextField error="Ops... aconteceu algo de errado" {...args} />
  </div>
);
