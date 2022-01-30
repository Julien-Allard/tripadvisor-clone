document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#connect").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#modal").classList.remove("hidden");
    document.querySelector("body").style.overflow = "hidden";
  });

  document.querySelector("#close-modal").addEventListener("click", () => {
    document.querySelector("#modal").classList.add("hidden");
    document.querySelector("body").style.overflow = "visible";
  });
});
