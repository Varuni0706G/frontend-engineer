import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    hoverable: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Card Title</h3>
        <p style={{ margin: 0, color: '#666' }}>This is the card content. Cards are flexible containers for grouping related information.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Outlined Card</h3>
        <p style={{ margin: 0, color: '#666' }}>This card has a thicker border for more emphasis.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Elevated Card</h3>
        <p style={{ margin: 0, color: '#666' }}>This card has a shadow to appear elevated from the surface.</p>
      </div>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    hoverable: true,
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Hoverable Card</h3>
        <p style={{ margin: 0, color: '#666' }}>This card lifts up when you hover over it.</p>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => alert('Card clicked!'),
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Clickable Card</h3>
        <p style={{ margin: 0, color: '#666' }}>This card is clickable and will show an alert when clicked.</p>
      </div>
    ),
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>Small Padding</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>This card has smaller padding.</p>
      </div>
    ),
  },
};

export const MediumPadding: Story = {
  args: {
    padding: 'md',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Medium Padding</h3>
        <p style={{ margin: 0, color: '#666' }}>This card has medium padding (default).</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.375rem', fontWeight: 600 }}>Large Padding</h3>
        <p style={{ margin: 0, color: '#666' }}>This card has larger padding for more spacious content.</p>
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: 600 }}>Product Card</h3>
        <p style={{ margin: '0 0 1.5rem 0', color: '#666' }}>
          This is a product description. Cards can contain various types of content including text, images, and actions.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary" size="sm">Add to Cart</Button>
          <Button variant="neutral" size="sm">View Details</Button>
        </div>
      </div>
    ),
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: '800px' }}>
      <Card variant="default" hoverable>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>Default Card</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>Simple card with default styling.</p>
      </Card>
      <Card variant="outlined" hoverable>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>Outlined Card</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>Card with outlined border.</p>
      </Card>
      <Card variant="elevated" hoverable>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.125rem', fontWeight: 600 }}>Elevated Card</h3>
        <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>Card with shadow elevation.</p>
      </Card>
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card variant="elevated" padding="lg" style={{ maxWidth: '300px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          backgroundColor: '#3b82f6', 
          margin: '0 auto 1rem auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 600
        }}>
          JD
        </div>
        <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: 600 }}>John Doe</h3>
        <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.875rem' }}>Senior Frontend Developer</p>
        <p style={{ margin: '0 0 1.5rem 0', color: '#666', fontSize: '0.875rem' }}>
          Passionate about creating beautiful and accessible user interfaces.
        </p>
        <Button variant="primary" size="sm" fullWidth>View Profile</Button>
      </div>
    </Card>
  ),
};