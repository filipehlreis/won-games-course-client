
const useSessionMock = jest
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  .spyOn(require('next-auth/react'), 'useSession')
  .mockImplementation(() => {
    return {
      status: 'authenticated',
      jwt: '123',
      data: { user: { email: 'lorem@ipsum.com' } },
    };
  });
useSessionMock.mockName;
