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
    width: string;
    height: string;
    fit: 'cover' | 'contain' | 'fill' | 'inside' | 'outside' = 'cover';
    position: string = 'centre';
    background: string | Object = {r:0,g:0,b:0,alpha:1};
    kernel: string = 'lanczos3';
    withoutEnlargement: boolean = false;
    withoutReduction: boolean = false;
    fastShrinkOnLoad: boolean = true;
    // cpp
    resizeBackground: Array<number>;
};

interface ToBufferOptions {
  resolveWithObject: boolean;
};

interface info {
  format: string | Object;
  size: number;
  width: number;
  height: number;
  channels: any;
  premultiplied: any;
  cropOffsetLeft?: any;
  cropOffsetTop?: any;
  textAutofitDpi?: any;
}

interface OutputInfo {
  callback: function = (err, info: info);
  resolveWithObject: boolean;
  orientation: number;
  icc: string;
  exif: Object = {};
  density: number;
  format: string;
  quality: number = 80;
  progressive: boolean = false;
  chromaSubsampling: string = '4:2:0';
  optimiseCoding: boolean = true;
  mozjpeg: boolean = false;
  trellisQuantisation: boolean = false;
  overshootDeringing: boolean = false;
  optimiseScans: boolean = false;
  optimizeScans: boolean = false;
  quantisationTable: number = 0;
  quantizationTable: number = 0;
  force: boolean = true;
  compressionLevel: number = 6;
  adaptiveFiltering: boolean = false;
  palette: boolean = false;
  quality: number = 100;
  effort: number = 7;
  colours: number = 256;
  colors: number = 256;
  dither: number = 1.0;
  alphaQuality: number = 100;
  lossless: boolean = false;
  nearLossless: boolean = false;
  smartSubsample: boolean = false;
  loop: number = 0;
  delay: number | Array<number>;
  minSize: boolean = false;
  mixed: boolean = false;
  reoptimise: boolean = false;
  reoptimize: boolean = false;
  interFrameMaxError: number = 0;
  interPaletteMaxError: number = 3;
  tileWidth: number = 512;
  tileHeight: number = 512;
  predictor: string = 'horizontal';
  pyramid: boolean = false;
  xres: number = 1.0;
  yrea: number = 1.0;
  resolutionUnit: string = 'inch';
  bitdepth: number = 8;
  distance: number = 1.0;
  decodingTier: number = 0;
  depth: string = 'uchar';
  overlap: number = 0;
  angle: number = 0;
  background: string | Object = {r:255,g:255,b:255,alpha:1};
  skipBlanks: number = -1;
  container: string = 'fs';
  layout: string = 'dz';
  centre: boolean = false;
  center: boolean = false;
  id: string = 'https://example.com/iiif';
  basename: string;
  seconds: number;
  ...Options;
  //cpp
  formatOut: string;
  fileOut: string;
  withMetadata: boolean;
  withMetadataOrientation: number;
  withMetadataDensity: number;
  withMetadataIcc: string;
  withMetadataStrs: object;
  timeoutSeconds: number;
  jpegQuality: number;
  jpegProgressive: boolean;
  jpegChromaSubsampling: string;
  jpegTrellisQuantisation: boolean;
  jpegQuantisationTable: number;
  jpegOvershootDeringing: boolean;
  jpegOptimiseScans: boolean;
  jpegOptimiseCoding: boolean;
  pngProgressive: boolean;
  pngCompressionLevel: number;
  pngAdaptiveFiltering: boolean;
  pngPalette: boolean;
  pngQuality: number;
  pngEffort: number;
  pngBitdepth: number;
  pngDither: number;
  jp2Quality: number;
  jp2Lossless: boolean;
  jp2TileHeight: number;
  jp2TileWidth: number;
  jp2ChromaSubsampling: string;
  webpQuality: number;
  webpAlphaQuality: number;
  webpLossless: boolean;
  webpNearLossless: boolean;
  webpSmartSubsample: boolean;
  webpEffort: number;
  webpMinSize: boolean;
  webpMixed: boolean;
  gifBitdepth: number;
  gifEffort: number;
  gifDither: number;
  gifInterFrameMaxError: number;
  gifInterPaletteMaxError: number;
  gifReoptimise: boolean;
  tiffQuality: number;
  tiffPyramid: boolean;
  tiffBitdepth: number;
  tiffTile: boolean;
  tiffTileWidth: number;
  tiffTileHeight: number;
  tiffXres: number;
  tiffYres: number;
  tiffCompression: enum;
  
};

class sharp {
  static OutputInfo: OutputInfo = {};
  static ResizeOptions: ResizeOptions = {};
  static constructor (input, options: Options) => {
    
  }
  const resize = (width: number, height: number, options: ResizeOptions) => {};
  const toFormat = (format: string | Object, options: Options) => {};
  const toBuffer = (options: ToBufferOptions, callback) => {};
}


























