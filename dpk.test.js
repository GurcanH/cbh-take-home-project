const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey value if it's provided and its value type is string and length <= 256", () => {
    const event = { partitionKey: "123" };
    const key = deterministicPartitionKey(event);
    expect(key).toBe("123");
  });
  it("Returns the the hashed partion key value if it's provided and its value type is string and length > 256", () => {
    const str = "x".repeat(257);
    const event = { partitionKey: str };
    const key = deterministicPartitionKey(event);
    const expected = crypto.createHash("sha3-512").update(str).digest("hex");
    expect(key).toBe(expected);
  });
  it("Returns the the hashed JSON.stringify partion key value if it's provided and its value type is not string and length <= 256", () => {
    const event = { partitionKey: { subKey: "123" } };
    const key = deterministicPartitionKey(event);
    const expected = JSON.stringify(event.partitionKey);
    expect(key).toBe(expected);
  });
  it("Returns the the hashed JSON.stringify partion key value if it's provided and its value type is not string and length > 256", () => {
    const str = "x".repeat(257);
    const event = { partitionKey: { subKey: str } };
    const key = deterministicPartitionKey(event);
    const expected = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event.partitionKey))
      .digest("hex");
    expect(key).toBe(expected);
  });
});
