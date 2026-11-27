const paymentLinks = new Map([
  ["cloudtips", /^https:\/\/pay\.cloudtips\.ru\/[^/?#\s\\][^\s\\]*$/],
  ["robokassa", /^https:\/\/(?:auth\.robokassa\.ru|robo\.market)\/[^/?#\s\\][^\s\\]*$/],
  ["yookassa", /^https:\/\/(?:yookassa\.ru|yoomoney\.ru)\/[^/?#\s\\][^\s\\]*$/],
]);

async function openPayment() {
  const status = document.getElementById("payment-status");
  status.textContent = "Открываем платёжную страницу…";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const settingsUrl = new URL("payment-settings.json", document.baseURI);
    settingsUrl.searchParams.set("v", Date.now().toString());
    const response = await fetch(settingsUrl, { cache: "no-store", signal: controller.signal });
    if (!response.ok) throw new Error("Settings unavailable");
    const settings = await response.json();
    const provider = settings.activeProvider;
    const destination = settings[provider];
    if (typeof destination !== "string" || !paymentLinks.get(provider)?.test(destination)) {
      throw new Error("Invalid payment URL");
    }
    window.location.replace(destination);
  } catch {
    status.textContent = "Не удалось открыть платёжную страницу. Попробуйте ещё раз чуть позже.";
    document.getElementById("payment-retry").hidden = false;
  } finally {
    clearTimeout(timeout);
  }
}

openPayment();
