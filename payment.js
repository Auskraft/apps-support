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
    src: "godonate-support-qr.png?v=original",
    alt: "QR-код для добровольного перевода через GoDonate",
  }],
]);

const pagesBase = "https://auskraft.github.io/apps-support/";
const primaryBase = "https://auskraft.ru/support-apps/";
const primaryHost = location.hostname === "auskraft.ru" || location.hostname === "www.auskraft.ru";

async function readPaymentJson(address, limit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), limit);
  try {
    const url = new URL(address, document.baseURI);
    const response = await fetch(url, { cache: "no-store", credentials: "omit", redirect: "error", signal: controller.signal });
    if (!response.ok) throw new Error("Settings unavailable");
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

function paymentDestination(settings) {
  const provider = settings?.activeProvider;
  const destination = settings?.[provider];
  if (typeof destination !== "string" || !paymentLinks.get(provider)?.test(destination)) {
    throw new Error("Invalid payment URL");
  }
  return destination;
}

async function getPaymentDestination() {
  if (primaryHost) {
    try { return paymentDestination(await readPaymentJson("payment-settings.php", 4000)); }
    catch { return paymentDestination(await readPaymentJson(pagesBase + "payment-settings.json", 4500)); }
  }
  return paymentDestination(await readPaymentJson("payment-settings.json", 4500));
}

async function primaryHandoff(status) {
  if (location.hostname !== "auskraft.github.io" || status.dataset.paymentHandoff !== primaryBase + "payment.html") return null;
  try {
    const route = await readPaymentJson("support-site.json", 1600);
    if (route?.activeSite !== "sprinthost") return null;
    paymentDestination(await readPaymentJson(primaryBase + "payment-settings.php", 2400));
    return status.dataset.paymentHandoff;
  } catch { return null; }
}

async function openPayment(status) {
  status.textContent = "Открываем платёжную страницу…";
  try {
    const primary = await primaryHandoff(status);
    window.location.replace(primary || await getPaymentDestination());
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
