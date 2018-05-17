describe("A suite", function() {
  it("fails", function() {
    expect(false).toBe(true);
  });

  it("passed", function() {
    expect(true).toBe(true);
  });

  xit("pending", function() {});
});
