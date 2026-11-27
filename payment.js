const paymentLinks = new Map([
  ["cloudtips", /^https:\/\/pay\.cloudtips\.ru\/[^/?#\s\\][^\s\\]*$/],
  ["ozon", /^https:\/\/finance\.ozon\.ru\/apps\/sbp\/ozonbankpay\/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i],
  ["godonate", /^https:\/\/godonate\.ru\/@[A-Za-z0-9_-]+$/],
  ["yookassa", /^https:\/\/(?:yookassa\.ru|yoomoney\.ru)\/[^/?#\s\\][^\s\\]*$/],
]);

const paymentCodes = new Map([
  ["https://pay.cloudtips.ru/p/a015b36e", {
    src: "cloudtips-support-qr.png",
    alt: "QR-код для добровольного перевода через CloudTips",
  }],
  ["https://finance.ozon.ru/apps/sbp/ozonbankpay/01a21c5b-00c4-7998-aeda-91f18773261e", {
    src: "ozon-support-qr.png",
    alt: "QR-код для добровольного перевода через Ozon Банк",
  }],
  ["https://godonate.ru/@auskraft", {
    src: "godonate-support-qr.png?v=teal-1184",
    alt: "QR-код для добровольного перевода через GoDonate",
  }],
]);

async function getPaymentDestination() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const publicSite = location.hostname === "auskraft.ru" || location.hostname === "www.auskraft.ru";
    const settingsBase = publicSite ? "https://auskraft.github.io/apps-support/" : document.baseURI;
    const settingsUrl = new URL("payment-settings.json", settingsBase);
    settingsUrl.searchParams.set("v", Date.now().toString());
    const response = await fetch(settingsUrl, { cache: "no-store", signal: controller.signal });
    if (!response.ok) throw new Error("Settings unavailable");
    const settings = await response.json();
    const provider = settings.activeProvider;
    const destination = settings[provider];
    if (typeof destination !== "string" || !paymentLinks.get(provider)?.test(destination)) {
      throw new Error("Invalid payment URL");
    }
    return destination;
  } finally {
    clearTimeout(timeout);
  }
}

async function openPayment(status) {
  status.textContent = "Открываем платёжную страницу…";
  try {
    window.location.replace(await getPaymentDestination());
  } catch {
    status.textContent = "Не удалось открыть платёжную страницу. Попробуйте ещё раз чуть позже.";
    document.getElementById("payment-retry").hidden = false;
  }
}

async function showPaymentCode(image) {
  image.hidden = true;
  try {
    const code = paymentCodes.get(await getPaymentDestination());
    if (!code) return;
    image.src = code.src;
    image.alt = code.alt;
    await image.decode();
    image.hidden = false;
  } catch {
    // The payment link remains available when a matching QR cannot be loaded.
  }
}

const paymentStatus = document.getElementById("payment-status");
if (paymentStatus) openPayment(paymentStatus);

const paymentCode = document.getElementById("payment-code");
if (paymentCode) {
  showPaymentCode(paymentCode);
  window.addEventListener("pageshow", event => {
    if (event.persisted) showPaymentCode(paymentCode);
  });
}
