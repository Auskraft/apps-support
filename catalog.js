const filters = document.querySelector(".catalog-filters");
const results = document.getElementById("catalog-results");
const appList = document.getElementById("catalog-apps");
const detail = document.getElementById("catalog-detail");
const empty = document.getElementById("catalog-empty");
const announcement = document.getElementById("catalog-announcement");
const appTemplate = document.getElementById("catalog-app-template");
const detailTemplate = document.getElementById("catalog-detail-template");
const versionTemplate = document.getElementById("catalog-version-template");

let selectedApp = catalogApps[0];

const nameWidths = new ResizeObserver((entries) => {
  for (const { target, contentRect } of entries) {
    const track = target.querySelector(".catalog-name-marquee");
    const overflow = Math.ceil(track.getBoundingClientRect().width - contentRect.width);
    target.classList.toggle("can-scroll", contentRect.width > 0 && overflow > 1);
    target.style.setProperty("--name-distance", -overflow + "px");
    target.style.setProperty("--name-duration", Math.max(2, overflow / 30 + 1) + "s");
  }
});

const appButtons = catalogApps.map((app) => {
  const button = appTemplate.content.firstElementChild.cloneNode(true);
  button.querySelector("img").src = app.icon;
  const name = button.querySelector(".catalog-app-name");
  name.querySelector(".catalog-name-label").textContent = app.name;
  name.querySelector(".catalog-name-marquee").textContent = app.name;
  nameWidths.observe(name);
  const ribbon = button.querySelector(".catalog-ribbon");
  if (app.badgeText) {
    ribbon.querySelector(".catalog-ribbon-label").textContent = app.badgeText;
  } else {
    ribbon.remove();
  }
  button.addEventListener("click", () => {
    if (selectedApp !== app) {
      selectApp(app);
      announcement.textContent = "Выбрано приложение: " + app.name;
    }
  });
  appList.append(button);
  return button;
});

function renderRelease(release) {
  const row = versionTemplate.content.firstElementChild.cloneNode(true);
  row.querySelector(".catalog-version-number").textContent = release.version;
  row.querySelector(".catalog-release-notes").textContent = release.notes || "Изменения не указаны";
  const download = row.querySelector(".catalog-download");
  download.href = release.apkUrl;
  download.setAttribute("aria-label", `Скачать версию ${release.version} с Яндекс Диска`);
  return row;
}

function renderApp(app) {
  const view = detailTemplate.content.firstElementChild.cloneNode(true);
  const availableReleases = app.releases.filter(release => release.apkUrl?.trim());
  const [current] = availableReleases;
  view.querySelector(".catalog-icon").src = app.icon;
  view.querySelector("h2").textContent = app.name;
  view.querySelector(".catalog-description").textContent = app.description;
  const highlights = view.querySelector(".catalog-highlights");
  if (app.highlights) {
    highlights.querySelector("p").textContent = app.highlights;
  } else {
    highlights.remove();
  }
  const storeLink = view.querySelector(".catalog-store-link");
  if (app.storeUrl) {
    storeLink.href = app.storeUrl;
  } else {
    storeLink.remove();
  }
  const download = view.querySelector(".catalog-download-primary");
  const history = view.querySelector(".catalog-history");
  if (current) {
    download.href = current.apkUrl;
    view.querySelector(".catalog-download-note").remove();
    view.querySelector(".catalog-latest-number").textContent = current.version;
    view.querySelector(".catalog-release-notes").textContent = current.notes;
    history.querySelector("tbody").replaceChildren(...availableReleases.map(renderRelease));
  } else {
    download.remove();
    view.querySelector(".catalog-latest").remove();
    history.remove();
  }
  detail.replaceChildren(view);
}

function selectApp(app) {
  selectedApp = app;
  appButtons.forEach((button, index) => {
    button.setAttribute("aria-pressed", String(catalogApps[index] === selectedApp));
  });
  renderApp(app);
}

filters.addEventListener("click", (event) => {
  const active = event.target.closest("button[data-category]");
  if (!active || active.getAttribute("aria-pressed") === "true") return;

  const category = active.dataset.category;
  filters.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button === active));
  });
  appButtons.forEach((button, index) => {
    button.hidden = category !== "all" && !catalogApps[index].categories.includes(category);
  });
  const matchingApps = catalogApps.filter((app, index) => !appButtons[index].hidden);
  appList.scrollTop = 0;
  results.hidden = matchingApps.length === 0;
  empty.hidden = !results.hidden;
  if (matchingApps.length > 0 && !matchingApps.includes(selectedApp)) {
    selectApp(matchingApps[0]);
  }
  announcement.textContent = matchingApps.length > 0
    ? active.textContent + ". Приложений: " + matchingApps.length + ". Выбрано: " + selectedApp.name
    : "В этой категории пока нет приложений.";
});

selectApp(selectedApp);
filters.hidden = false;
results.hidden = false;
