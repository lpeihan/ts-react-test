import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Snapshot from './Snapshot';

afterEach(cleanup);
 
describe("<Snapshot />", () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(<Snapshot />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
