
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 500000, years: 30, rate: 5.5 })).toEqual("2838.95");
});


it("should return a result with 2 decimal places", function() {
  expect(2000.33434.toFixed(2)).toEqual("2000.33");
});

