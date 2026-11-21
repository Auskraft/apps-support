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

const appButtons = catalogApps.map((app) => {
  const button = appTemplate.content.firstElementChild.cloneNode(true);
  button.querySelector("img").src = app.icon;
  button.querySelector("span").textContent = app.name;
  button.addEventListener("click", () => {
    if (selectedApp !== app) {
      selectApp(app);
      announcement.textContent = "Выбрано приложение: " + app.name;
    }
  });
  appList.append(button);
  return button;
});

function renderDownload(container, apkUrl) {
  const link = container.querySelector(".catalog-download");
  if (apkUrl) {
    link.href = apkUrl;
    container.querySelector(".catalog-download-note").remove();
  } else {
    link.remove();
  }
}

function renderRelease(release) {
  const row = versionTemplate.content.firstElementChild.cloneNode(true);
  row.querySelector(".catalog-version-number").textContent = release.version;
  row.querySelector(".catalog-release-notes").textContent = release.notes;
  row.querySelector(".catalog-download").textContent = `Скачать ${release.version} с Яндекс Диска`;
  renderDownload(row, release.apkUrl);
  return row;
}

function renderApp(app) {
  const view = detailTemplate.content.firstElementChild.cloneNode(true);
  const [current, ...previous] = app.releases;
  view.querySelector(".catalog-icon").src = app.icon;
  view.querySelector("h2").textContent = app.name;
  view.querySelector(".catalog-description").textContent = app.description;
  view.querySelector(".catalog-store-link").href = app.storeUrl;
  view.querySelector(".catalog-latest-number").textContent = current.version;
  view.querySelector(".catalog-release-notes").textContent = current.notes;
  renderDownload(view.querySelector(".catalog-release-actions"), current.apkUrl);

  view.querySelector(".catalog-history").hidden = previous.length === 0;
  view.querySelector(".catalog-history ul").replaceChildren(...previous.map(renderRelease));
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
