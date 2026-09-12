document.addEventListener("DOMContentLoaded", () => {
  const cards = [...document.querySelectorAll(".device-card")];
  const search = document.querySelector("#searchDevices");
  const buttons = [...document.querySelectorAll(".filter-btn")];
  let group = "all";
  const apply = () => {
    const q = (search?.value || "").toLowerCase().trim();
    let shown = 0;
    cards.forEach((c) => {
      const okGroup = group === "all" || c.dataset.group === group;
      const okQ = !q || c.textContent.toLowerCase().includes(q);
      const ok = okGroup && okQ;
      c.style.display = ok ? "" : "none";
      if (ok) shown++;
    });
    const empty = document.querySelector(".empty");
    if (empty) empty.style.display = shown ? "none" : "block";
  };
  search?.addEventListener("input", apply);
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      buttons.forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      group = b.dataset.filter;
      apply();
    }),
  );
});
