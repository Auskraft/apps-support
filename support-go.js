const supportSites = new Map([
  ["github", "https://auskraft.github.io/apps-support/#top"],
  ["sprinthost", "https://auskraft.ru/support-apps/#top"],
]);

async function openSupportSite() {
  let destination = supportSites.get("github");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);
  try {
    const configUrl = new URL("https://auskraft.github.io/apps-support/support-site.json");
    configUrl.searchParams.set("v", Date.now().toString());
    const response = await fetch(configUrl, {cache: "no-store", signal: controller.signal});
    if (response.ok) {
      const config = await response.json();
      destination = supportSites.get(config.activeSite) ?? destination;
    }
  } catch {
    // Restore access through the previous address when the settings cannot be read.
  } finally {
    clearTimeout(timeout);
  }
  window.location.replace(destination);
}

openSupportSite();
