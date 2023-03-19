import Vips from 'wasm-vips';
let img;
export const loadImage = (opt) => {
  let image;
  if(opt.isBuffer) {
    if(opt.rawChannels > 0) {
      image = img.newFromMemory(opt.buffer, opt.bufferLength, opt.rawWidth, opt.rawHeight, opt.rawChannels, opt.rawDepth);
      if(opt.rawPremultiplied) {
        image.unpremultiply();
      }
    } else {
      
    }
  }
}
