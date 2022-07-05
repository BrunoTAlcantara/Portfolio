import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Post } from '.';

import props from './mock';

describe('<Header />', () => {
  it('should render header,excerpt,cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
