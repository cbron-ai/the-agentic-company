import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";

const root = process.cwd();
const ajv = new Ajv({ allErrors: true, strict: false });
const cases = [
  ["schemas/agent.schema.json", "examples/config/agent.json"],
  ["schemas/project.schema.json", "examples/config/project.json"],
  ["schemas/approval.schema.json", "examples/config/approval.json"]
];
let failed = false;
for (const [schemaPath, dataPath] of cases) {
  const schema = JSON.parse(fs.readFileSync(path.join(root, schemaPath), "utf8"));
  const data = JSON.parse(fs.readFileSync(path.join(root, dataPath), "utf8"));
  const validate = ajv.compile(schema);
  if (!validate(data)) {
    failed = true;
    console.error(`FAIL ${dataPath}`);
    for (const error of validate.errors ?? []) console.error(`  ${error.instancePath || "/"} ${error.message}`);
  } else {
    console.log(`PASS ${dataPath}`);
  }
}
if (failed) process.exitCode = 1;
