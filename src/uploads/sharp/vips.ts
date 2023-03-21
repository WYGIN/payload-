import Vips from 'wasm-vips';
let img;
(async() => {
  const vi = await Vips();
  img = vi.Image;
})();
export const loadImage = (opt) => {
  let image;
  if(opt.isBuffer) {
    if(opt.rawChannels > 0) {
      image = img.newFromMemory(opt.buffer, opt.bufferLength, opt.rawWidth, opt.rawHeight, opt.rawChannels, opt.rawDepth);
      if(opt.rawPremultiplied) {
        image.unpremultiply();
      }
    } else {
      image = img.newFromBuffer(opt.buffer, opt.bufferLength, null, {access: opt.access, fail_on: opt.failOn });
    }
  } else {
    image = img.newFromFile(opt.file ,{access: opt.access, fail_on: opt.failOn });
  }
}
