import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { Button, Input, Card, Modal } from './components';
import './App.css'; 

const App: React.FC = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [isNoBackdropModalOpen, setNoBackdropModalOpen] = useState(false);
  const [isNoEscapeModalOpen, setNoEscapeModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  // Validation rules
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gray-50 py-8 px-4"> 
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library Showcase
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A responsive React component library built with TypeScript, Styled Components, and Storybook.
            </p>
          </div>

          {/* Buttons */}
          <Card variant="elevated" className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Button Components</h2>
            <div className="grid gap-6">
              {/* Variants */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="neutral">Neutral</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Button Sizes</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>
              </div>

              {/* Modals */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-800">Modals</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-yellow-500 text-white hover:bg-pink-600" onClick={() => setProfileModalOpen(true)}>Profile Modal</Button>
                  <Button className="bg-yellow-500 text-white hover:bg-pink-600" onClick={() => setContactModalOpen(true)}>Contact Modal</Button>
                  <Button className="bg-yellow-500 text-white hover:bg-pink-600" onClick={() => setConfirmModalOpen(true)}>Confirm Modal</Button>
                  <Button className="bg-yellow-500 text-white hover:bg-pink-600" onClick={() => setNoBackdropModalOpen(true)}>No Backdrop</Button>
                  <Button className="bg-yellow-500 text-white hover:bg-pink-600" onClick={() => setNoEscapeModalOpen(true)}>No Escape</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Input Components */}
          <Card variant="elevated" className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Input Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <Input label="Full Name" placeholder="Enter your full name" value={inputValue} onChange={setInputValue} />
                <Input 
                  label="Email Address" 
                  placeholder="user@example.com" 
                  value={email} 
                  onChange={setEmail}
                  error={email !== '' && !emailRegex.test(email)}
                  helperText={email !== '' && !emailRegex.test(email) ? 'Please enter a valid email' : "We'll never share your email"}
                />
                <Input type="password" label="Password" placeholder="Enter password" required />
              </div>
              <div className="flex flex-col gap-4">
                <Input 
                  label="Phone Number" 
                  type="tel" 
                  placeholder="1234567890" 
                  value={phone} 
                  onChange={setPhone} 
                  error={phone !== '' && !phoneRegex.test(phone)} 
                  helperText={phone !== '' && !phoneRegex.test(phone) ? 'Enter a valid 10-digit number' : ''} 
                />
                <Input 
                  label="Website" 
                  type="url" 
                  placeholder="https://example.com" 
                  value={website} 
                  onChange={setWebsite} 
                  error={website !== '' && !urlRegex.test(website)}
                  helperText={website !== '' && !urlRegex.test(website) ? 'Enter a valid website URL' : ''}
                />
                <Input label="Error Example" placeholder="This field has an error" error helperText="Please fix this error" />
              </div>
            </div>
          </Card>

          {/* Card Components */}
          <Card variant="elevated" className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Card Components</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card variant="default" hoverable>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Default Card</h3>
                <p className="text-gray-600">A simple card with default styling and hover effects.</p>
              </Card>
              <Card variant="outlined" hoverable>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Outlined Card</h3>
                <p className="text-gray-600">A card with a prominent border for emphasis.</p>
              </Card>
              <Card variant="elevated" clickable onClick={() => alert('Card clicked!')}>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Clickable Card</h3>
                <p className="text-gray-600 mb-4">This card is interactive and clickable.</p>
                <div className="text-sm text-blue-600 font-medium">Click me! →</div>
              </Card>
              <Card variant="elevated" hoverable>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Product Card</h3>
                <p className="text-gray-600 mb-4">This card could display a product with actions.</p>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm">Add to Cart</Button>
                  <Button variant="neutral" size="sm">View Details</Button>
                </div>
              </Card>
              <Card variant="elevated" padding="lg">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-blue-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    VG
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900">Varuni G</h3>
                  <p className="text-gray-600 text-sm mb-2">Frontend Developer</p>
                  <p className="text-gray-600 text-sm mb-4">Passionate about building interactive and accessible UI.</p>
                  <Button variant="primary" size="sm" fullWidth>View Profile</Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Modals */}
          <Modal isOpen={isProfileModalOpen} onClose={() => setProfileModalOpen(false)} title="Profile Info" size="md">
            <div className="space-y-4">
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Varuni G</li>
                <li>Sri Venkateswara College Of Engineering</li>
                <li>2127220501176</li>
                <li>Email: varunisekar0706@gmail.com</li>
              </ul>
              <div className="flex gap-2 justify-end pt-4">
                <Button variant="neutral" onClick={() => setProfileModalOpen(false)}>Close</Button>
              </div>
            </div>
          </Modal>

          <Modal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} title="Contact Us" size="sm">
            <form className="space-y-4">
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Email" placeholder="Enter your email" type="email" />
              <Input
  label="Message"
  placeholder="Write your message"
/>
              <div className="flex justify-end gap-2">
                <Button variant="neutral" onClick={() => setContactModalOpen(false)}>Cancel</Button>
                <Button variant="primary">Send</Button>
              </div>
            </form>
          </Modal>

          <Modal isOpen={isConfirmModalOpen} onClose={() => setConfirmModalOpen(false)} title="Confirm Action" size="lg">
            <div className="space-y-4">
              <p>Are you sure you want to delete this record? This action cannot be undone.</p>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="neutral" onClick={() => setConfirmModalOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setConfirmModalOpen(false)}>Delete</Button>
              </div>
            </div>
          </Modal>

          <Modal isOpen={isNoBackdropModalOpen} onClose={() => setNoBackdropModalOpen(false)} title="No Backdrop Close" closeOnBackdrop={false}>
            <p>This modal won't close if you click outside.</p>
          </Modal>

          <Modal isOpen={isNoEscapeModalOpen} onClose={() => setNoEscapeModalOpen(false)} title="No Escape Close" closeOnEscape={false}>
            <p>This modal won't close if you press Escape.</p>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
