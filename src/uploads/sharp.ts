interface Options {
  failOn: 'none' | 'truncated' | 'error' | 'warning' = 'warning';
  limitInputPixels: number | boolean = 268402689;
  unlimited: boolean = false;
  sequentialRead: boolean = false;
  density: number = 72;
  pages: number = 1;
  page: number = 0;
  subifd: number = -1;
  level: number = 0;
  animated: boolean = false;
  raw = {
    width: number;
    height: number;
    channels: number;
    premultiplied: boolean = false;
  };
  create = {
    width: number;
    height: number;
    channels: number;
    background: string | Object;
    noise: {
      type: string = 'gaussian';
      mean: number;
      sigma: number;
    }
  };
  text = {
    text: string;
    font: string;
    fontfile: string;
    width: number = 0;
    height: number = 0;
    align: 'left' | 'centre' | 'center' | 'right' = 'left';
    justify: boolean = false;
    dpi: number = 72;
    rgba: boolean = false;
    spacing: number = 0;
  }
};

interface ResizeOptions {
  width: number;
  height: number;
  options = {
    width: string;
    height: string;
    fit: 'cover' | 'contain' | 'fill' | 'inside' | 'outside' = 'cover';
    position: string = 'centre';
    background: string | Object = {r:0,g:0,b:0,alpha:1};
    kernel: string = 'lanczos3';
    withoutEnlargement: boolean = false;
    withoutReduction: boolean = false;
    fastShrinkOnLoad: boolean = true;
  };
};

interface ToBufferOptions {
  resolveWithObject: boolean;
};

interface OutputInfo {};

interface ResizeOptions {};

export default function (input, options: Options) => {
  const resize = (options: ResizeOptions) => {};
  const toFormat = (format: string | Object, options: Options) => {};
  const toBuffer = (options: ToBufferOptions, callback) => {};
}



























