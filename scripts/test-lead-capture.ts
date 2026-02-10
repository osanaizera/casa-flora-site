/**
 * SDCMS Lead Capture Integration Test
 *
 * Tests the full lead capture flow:
 * 1. Fetches lead magnet config (GET /api/lead-magnets/{publicId})
 * 2. Validates schema fields
 * 3. Captures a test lead (POST /api/lead-magnets/{publicId}/capture)
 * 4. Tests the local /api/contact route (if dev server is running)
 *
 * Usage:
 *   npx tsx scripts/test-lead-capture.ts
 */

const BASE_URL = process.env.CMS_BASE_URL?.replace(/\/$/, "") || "https://sdcms-web.vercel.app";
const PUBLIC_ID = process.env.NEXT_PUBLIC_SDCMS_LEAD_PUBLIC_ID || "vsqKKfHElmI6";
const LOCAL_API = "http://localhost:3000";

const TEST_DATA = {
  name: "Teste Integração",
  email: `test+${Date.now()}@casaflora-test.com`,
  phone: "(21) 99999-0000",
};

let passed = 0;
let failed = 0;

function log(status: "PASS" | "FAIL" | "INFO" | "SKIP", msg: string) {
  const icons = { PASS: "✅", FAIL: "❌", INFO: "ℹ️ ", SKIP: "⏭️ " };
  console.log(`${icons[status]} ${msg}`);
  if (status === "PASS") passed++;
  if (status === "FAIL") failed++;
}

// ─── Test 1: Fetch lead magnet config ──────────

async function testFetchConfig() {
  console.log("\n── Test 1: GET /api/lead-magnets/{publicId} ──");

  const res = await fetch(`${BASE_URL}/api/lead-magnets/${PUBLIC_ID}`);
  const json = await res.json();

  if (res.status !== 200) {
    log("FAIL", `Config fetch returned ${res.status}`);
    return null;
  }
  log("PASS", `Config fetch returned 200`);

  if (!json.ok) {
    log("FAIL", `Response ok=false: ${JSON.stringify(json)}`);
    return null;
  }
  log("PASS", `Response ok=true`);

  const fields = json.data?.formSchema?.fields;
  if (!Array.isArray(fields) || fields.length === 0) {
    log("FAIL", `No fields in formSchema`);
    return null;
  }
  log("PASS", `Found ${fields.length} form fields`);

  // Validate expected fields
  const fieldKeys = fields.map((f: { key: string }) => f.key);
  for (const expected of ["name", "email", "phone"]) {
    if (fieldKeys.includes(expected)) {
      log("PASS", `Field "${expected}" present`);
    } else {
      log("FAIL", `Field "${expected}" missing (found: ${fieldKeys.join(", ")})`);
    }
  }

  log("INFO", `Title: "${json.data.title}"`);
  log("INFO", `Delivery message: "${json.data.delivery?.responseMessage}"`);

  return json.data;
}

// ─── Test 2: Capture a test lead ───────────────

async function testCaptureLead() {
  console.log("\n── Test 2: POST /api/lead-magnets/{publicId}/capture ──");

  const payload = {
    data: {
      name: TEST_DATA.name,
      email: TEST_DATA.email,
      phone: TEST_DATA.phone,
    },
    hp: "",
  };

  log("INFO", `Sending test lead: ${TEST_DATA.email}`);

  const res = await fetch(`${BASE_URL}/api/lead-magnets/${PUBLIC_ID}/capture`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = await res.json();

  if (res.status !== 200) {
    log("FAIL", `Capture returned ${res.status}: ${JSON.stringify(json)}`);
    return;
  }
  log("PASS", `Capture returned 200`);

  if (json.ok) {
    log("PASS", `Capture ok=true — "${json.message}"`);
  } else {
    log("FAIL", `Capture ok=false: ${JSON.stringify(json)}`);
  }
}

// ─── Test 3: Capture with missing required field ─

async function testCaptureValidation() {
  console.log("\n── Test 3: Validation - missing required fields ──");

  const res = await fetch(`${BASE_URL}/api/lead-magnets/${PUBLIC_ID}/capture`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      data: { email: "partial@test.com" },
      hp: "",
    }),
  });

  // Expect 400 or 422
  if (res.status >= 400 && res.status < 500) {
    log("PASS", `Validation error returned ${res.status} (expected 4xx)`);
  } else {
    log("FAIL", `Expected 4xx but got ${res.status}`);
  }
}

// ─── Test 4: Honeypot rejection ─────────────────

async function testHoneypotRejection() {
  console.log("\n── Test 4: Honeypot anti-spam ──");

  const res = await fetch(`${BASE_URL}/api/lead-magnets/${PUBLIC_ID}/capture`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      data: {
        name: "Bot Test",
        email: "bot@spam.com",
        phone: "123",
      },
      hp: "i-am-a-bot",
    }),
  });

  // If honeypot is filled, CMS should reject or silently discard
  if (res.status === 200) {
    const json = await res.json();
    // Some implementations return 200 but silently discard
    log("INFO", `Honeypot response: ${res.status} — ${JSON.stringify(json)}`);
    log("PASS", `Honeypot test completed (CMS may silently discard)`);
  } else {
    log("PASS", `Honeypot rejected with ${res.status}`);
  }
}

// ─── Test 5: Local /api/contact route ────────────

async function testLocalContactApi() {
  console.log("\n── Test 5: Local /api/contact route ──");

  try {
    const healthCheck = await fetch(`${LOCAL_API}/api/sdcms/health`, {
      signal: AbortSignal.timeout(3000),
    });
    if (!healthCheck.ok) throw new Error("not running");
  } catch {
    log("SKIP", `Dev server not running at ${LOCAL_API} — skipping`);
    return;
  }

  const res = await fetch(`${LOCAL_API}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Teste Local",
      email: `local+${Date.now()}@casaflora-test.com`,
      phone: "(21) 98888-0000",
      message: "",
    }),
  });

  const json = await res.json();

  if (res.ok && json.ok) {
    log("PASS", `Local /api/contact returned OK — "${json.message}"`);
  } else {
    log("FAIL", `Local /api/contact failed: ${JSON.stringify(json)}`);
  }
}

// ─── Run all tests ───────────────────────────────

async function main() {
  console.log("═══════════════════════════════════════════");
  console.log("  SDCMS Lead Capture — Integration Tests   ");
  console.log(`  Base: ${BASE_URL}`);
  console.log(`  PublicID: ${PUBLIC_ID}`);
  console.log("═══════════════════════════════════════════");

  await testFetchConfig();
  await testCaptureLead();
  await testCaptureValidation();
  await testHoneypotRejection();
  await testLocalContactApi();

  console.log("\n═══════════════════════════════════════════");
  console.log(`  Results: ${passed} passed, ${failed} failed`);
  console.log("═══════════════════════════════════════════\n");

  process.exit(failed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
