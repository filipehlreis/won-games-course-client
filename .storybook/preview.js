import GlobalStyles from '../src/styles/global';

export const decorators = [
  Story => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  }
]

