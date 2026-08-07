import os from "os";

export const dynamic = "force-dynamic"; // render on every request, not at build time

export default function Home() {
  return (
    <main style={{ fontFamily: "monospace", padding: 40 }}>
      <h1>CI/CD test 🚀</h1>
      <p>
        Served by pod: <strong>{os.hostname()}</strong>
      </p>
      <p>Changes</p>
    </main>
  );
}
