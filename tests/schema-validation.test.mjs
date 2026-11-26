import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import Ajv from "ajv";

const readJson = (file) => JSON.parse(fs.readFileSync(new URL(file, import.meta.url), "utf8"));
const ajv = new Ajv({ allErrors: true, strict: false });

const cases = [
  ["../schemas/agent.schema.json", "../examples/config/agent.json"],
  ["../schemas/project.schema.json", "../examples/config/project.json"],
  ["../schemas/approval.schema.json", "../examples/config/approval.json"]
];

for (const [schemaFile, exampleFile] of cases) {
  test(`validates ${exampleFile}`, () => {
    const validate = ajv.compile(readJson(schemaFile));
    assert.equal(validate(readJson(exampleFile)), true, JSON.stringify(validate.errors));
  });
}

test("rejects an approval with no target or scope", () => {
  const validate = ajv.compile(readJson("../schemas/approval.schema.json"));
  const invalid = {
    requestId: "APR-BAD",
    action: "publish",
    requestedBy: "Muse",
    expiresAt: "tomorrow",
    decision: "approved"
  };
  assert.equal(validate(invalid), false);
  assert.ok(validate.errors?.some((error) => error.keyword === "required"));
});
