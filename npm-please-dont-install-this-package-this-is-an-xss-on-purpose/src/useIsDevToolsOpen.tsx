export function useIsDevToolsOpen() {
  if (typeof window === 'undefined') {
    return false;
  }

  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;

  return (
    !(heightThreshold && widthThreshold) &&
    (((window as any).Firebug &&
      (window as any).Firebug.chrome &&
      (window as any).Firebug.chrome.isInitialized) ||
      widthThreshold ||
      heightThreshold)
  );
}
