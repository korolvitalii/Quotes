import { renderHook, act } from '@testing-library/react-hooks';
import { useData } from '../hooks/useData';
import * as axios from 'axios';

jest.mock('axios');

describe('useData hook', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({
      data: [{ quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' }],
    });
  });

  it('should set mocked data', async () => {
    const { result, waitForNextUpdate, waitFor } = renderHook(() => useData());
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current.data).toEqual([
      { quote: 'Fall seven times and stand up eight.', author: 'Japanese Proverb' },
    ]);
  });

  it('should status SUCCESS', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useData());
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current.status).toEqual('SUCCESS');
  });
});
