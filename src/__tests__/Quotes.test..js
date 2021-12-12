import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes component', () => {
  let props;
  let sut;
  const quotes = [{ quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' }];

  props = { data: quotes, status: 'SUCCESS' };

  beforeEach(() => {
    sut = render(<Quotes {...props} />);
  });

  it('should text be correct', () => {
    const elements = sut.getAllByText('Fall seven times and stand up eight.');
    expect(elements[0]).toBeInTheDocument();
  });

  it('should text be correct', () => {
    const elements = sut.getAllByText('Japanese Proverb');
    expect(elements[0]).toBeInTheDocument();
  });
});
