export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.SITE_URL?.trim();
  const vercelHost = process.env.VERCEL_URL?.trim();
  const vercelUrl = vercelHost
    ? vercelHost.includes("://")
      ? vercelHost
      : `https://${vercelHost}`
    : undefined;
  const value = configuredUrl || vercelUrl;
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.hostname !== "localhost")
      return undefined;
    return url;
  } catch {
    return undefined;
  }
}
