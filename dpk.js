const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  if (!event) return "0";

  const MAX_PARTITION_KEY_LENGTH = 256;

  const getHashedValue = (key) => {
    if (!key) {
      throw new Error("key is not provided!");
    }
    return crypto.createHash("sha3-512").update(key).digest("hex");
  };

  const eventKey = event.partitionKey ?? (event || {});

  const stringEventKey =
    typeof eventKey === "string" ? eventKey : JSON.stringify(eventKey);

  return stringEventKey.length < MAX_PARTITION_KEY_LENGTH
    ? stringEventKey
    : getHashedValue(stringEventKey);
};
