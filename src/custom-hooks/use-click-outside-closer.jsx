import { useEffect } from "react";

export function useClickOutsideCloser(
  isShowing,
  hideElement,
  elementRef,
  openerRef
) {
  const element = elementRef?.current;
  const opener = openerRef?.current;

  const handleClickOutside = (event) => {
    if (!element || !opener) return;

    const target = event.target;

    if (
      isShowing &&
      !element.contains(target) &&
      target !== opener &&
      !opener.contains(target)
    ) {
      hideElement();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  });
}
