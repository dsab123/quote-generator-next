import React from 'react';
import MyApp from '../pages/_app';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { randomButtonText } from '../types';

describe('App tests', () => {
  // todo daniel get this test working again, I guess? Maybe not
  // it('renders app sanity with proper loading button text', () => {
  //   const { getAllByText } = render(
  //     <Provider store={store}>
  //       <MyApp />
  //     </Provider>
  //   );

  //   expect(getAllByText(randomButtonText).pop()).toBeInTheDocument();
  // });
})