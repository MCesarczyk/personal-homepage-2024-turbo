import type { Meta, StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';

import { Section } from './Section';

const meta: Meta<typeof Section> = {
  component: Section,
  title: 'Organisms/Section',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Section title' },
    elements: { control: 'array', description: 'Section list items' },
  },
};
export default meta;

const Template: StoryFn<ComponentProps<typeof Section>> = (args) => (
  <Section {...args} />
);

export const _Section = Template.bind({});
_Section.args = {
  title: 'Section',
  elements: ['Item 1', 'Item 2', 'Item 3'],
};
