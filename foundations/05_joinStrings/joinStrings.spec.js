const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Long', () => {
    expect(values.firstName).toEqual('Long');
  });
  test('lastName is Vu', () => {
    expect(values.lastName).toEqual('Vu');
  });
  test('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test('birthYear is 2004', () => {
    expect(values.birthYear).toEqual(2004);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Long Vu and I am 22 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Long Vu', () => {
    expect(values.fullName).toEqual('Long Vu');
  });
  test('age is 22', () => {
    expect(values.age).toEqual(22);
  });
});
