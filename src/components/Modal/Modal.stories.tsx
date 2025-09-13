import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import type { ModalProps } from '../../types/types';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    closeOnBackdrop: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

const ModalWrapper = ({ children, ...args }: ModalProps & { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args}>
      <p>This is the modal content. You can put any content here.</p>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args} title="Modal Title">
      <p>This modal has a title in the header.</p>
    </ModalWrapper>
  ),
};

export const Small: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args} title="Small Modal" size="sm">
      <p>This is a small modal with limited width.</p>
    </ModalWrapper>
  ),
};

export const Medium: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args} title="Medium Modal" size="md">
      <p>This is a medium-sized modal with moderate width.</p>
    </ModalWrapper>
  ),
};

export const Large: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args} title="Large Modal" size="lg">
      <div>
        <p>This is a large modal with more space for content.</p>
        <div
          style={{
            height: '200px',
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginTop: '1rem',
          }}
        >
          <p>Extra content to demonstrate the modal size.</p>
        </div>
      </div>
    </ModalWrapper>
  ),
};

export const NoCloseButton: Story = {
  render: (args: ModalProps) => (
    <ModalWrapper {...args} title="No Close Button" showCloseButton={false}>
      <p>This modal doesn't have a close button in the header.</p>
    </ModalWrapper>
  ),
};
