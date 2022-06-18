export const OpenModalMock = () =>
  document.querySelector("#dialog").setAttribute("open", "true");
export const CloseModalMock = () =>
  document.querySelector("#dialog").removeAttribute("open");
