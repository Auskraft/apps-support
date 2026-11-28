(() => {
  "use strict";

  const registry = globalThis.AuskraftLegalSlugs ?? [];
  const legacyByCatalogId = new Map(registry.map(app => [app.catalogId, app]));
  const docsRoot = new URL(
    "docs/",
    location.hostname === "auskraft.github.io"
      ? "https://auskraft.ru/support-apps/"
      : location.href
  );
  const priority = ["privacy", "terms"];
  const dateFormat = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Moscow"
  });
  let index;

  function readIndex() {
    index ??= fetch(new URL("index.json", docsRoot), {
      credentials: "omit",
      cache: "no-cache"
    })
      .then(response => {
        if (!response.ok) throw new Error("Documents unavailable");
        return response.json();
      })
      .then(payload => {
        const apps = Object.entries(payload.apps ?? {}).filter(([, app]) =>
          typeof app?.slug === "string" && /^[a-z0-9][a-z0-9-]{0,79}$/.test(app.slug));
        return {
          byPackage: new Map(apps),
          byCatalogId: new Map(apps.filter(([, app]) => typeof app.catalogId === "string")
            .map(([, app]) => [app.catalogId, app]))
        };
      })
      .catch(() => {
        index = undefined;
        return null;
      });
    return index;
  }

  function render(view, app) {
    const id = app.id || /(?:^|\/)assets\/apps\/([a-z0-9_-]+)\.[a-z]+$/i.exec(app.icon)?.[1];
    const storePackage = app.storeUrl?.match(/\/catalog\/app\/([a-zA-Z0-9_.]+)(?:[/?#]|$)/)?.[1];
    const region = view.querySelector(".catalog-documents");
    if (!region) return;

    void readIndex().then(publishedIndex => {
      if (!view.isConnected || !publishedIndex) return;
      const {byCatalogId, byPackage} = publishedIndex;
      const legacy = legacyByCatalogId.get(id);
      const published = byCatalogId.get(id) ?? byPackage.get(app.applicationId) ??
        byPackage.get(legacy?.appId) ?? byPackage.get(storePackage);
      if (!published) return;
      const documents = Object.entries(published.documents ?? {})
        .filter(([kind, doc]) => /^[a-z][a-z0-9-]{0,47}$/.test(kind) &&
          typeof doc?.title === "string" && doc.title.trim());
      const rank = kind => priority.includes(kind) ? priority.indexOf(kind) : priority.length;
      documents.sort(([left], [right]) => rank(left) - rank(right) || left.localeCompare(right));
      if (documents.length === 0) return;

      const items = documents.map(([kind, doc]) => {
        const row = document.createElement("li");
        const link = document.createElement("a");
        link.href = new URL(published.slug + "/" + kind + ".html", docsRoot);
        link.textContent = doc.title;
        row.append(link);
        const date = new Date(doc.updatedAt);
        if (!Number.isNaN(date.getTime())) {
          const time = document.createElement("time");
          time.dateTime = date.toISOString();
          time.textContent = dateFormat.format(date);
          row.append(time);
        }
        return row;
      });

      region.querySelector("ul").replaceChildren(...items);
      region.hidden = false;
    });
  }

  globalThis.AuskraftCatalogDocuments = Object.freeze({render});
})();
