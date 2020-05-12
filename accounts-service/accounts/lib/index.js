module.exports = {
    getAccountById: (id) => Promise.resolve({
        accountId: id,
        accountName: 'test account name',
        accountRegistrationDate: '2020-01-01 10:45:12',
        verified: true
    }),
    createAccount: (account) => Promise.resolve({
        accountId: 'asdfkj-124-asdhg-12354ASD',
        ...account
    }),
};