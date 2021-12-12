import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('Quotes component', () => {
  const quote = { quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' };

  const props = { data: quote, status: 'SUCCESS' };

  it('should text be correct', () => {
    const component = render(<Quote {...quote} />);
    const quoteText = component.getAllByText('Fall seven times and stand up eight.');
    const quoteAuthor = component.getAllByText('Japanese Proverb');
    expect(quoteAuthor[0]).toBeInTheDocument();
    expect(quoteText[0]).toBeInTheDocument();
  });
});
