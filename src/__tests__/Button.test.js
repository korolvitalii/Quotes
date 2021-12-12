import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button component', () => {
  let props;
  beforeEach(() => {
    props = {
      children: 'Last quote',
      onClick: jest.fn(),
    };
  });

  it('when component is mounted', () => {
    const component = render(<Button {...props} />);
    const elements = component.getAllByText('Last quote');

    expect(elements[0]).toBeInTheDocument();
  });

  it('should call callback when click on button', () => {
    const component = render(<Button {...props} />);
    fireEvent.click(component.getByText('Last quote'));
    expect(props.onClick).toHaveBeenCalled();
  });
});
