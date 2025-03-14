declare module 'dom-to-image' {
  export function toJpeg(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<string>;
  export function toPng(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<string>;
  export function toSvg(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<string>;
  export function toBlob(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<Blob>;
  export function toPixelData(node: HTMLElement, options?: { quality?: number, width?: number, height?: number }): Promise<Uint8Array>;
}