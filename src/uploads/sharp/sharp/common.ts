import is from '../is';
import color from 'color';

class sharp {
  const createInputDescriptor = (input, inputOptions, containerOptions) => { 
   const inputDescriptor = { 
     failOn: 'warning', 
     limitInputPixels: Math.pow(0x3FFF, 2), 
     unlimited: false, 
     sequentialRead: false 
   };
   if (is.string(input)) { 
     // filesystem 
     inputDescriptor.file = input; 
   } else if (is.buffer(input)) { 
     // Buffer 
     if (input.length === 0) { 
       throw Error('Input Buffer is empty'); 
     } 
     inputDescriptor.buffer = input; 
   } else if (is.typedArray(input)) { 
     if (input.length === 0) { 
       throw Error('Input Bit Array is empty'); 
     } 
     inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength); 
   } else if (is.plainObject(input) && !is.defined(inputOptions)) { 
     // Plain Object descriptor, e.g. create 
     inputOptions = input; 
     if (_inputOptionsFromObject(inputOptions)) { 
       // Stream with options 
       inputDescriptor.buffer = []; 
     } 
   } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) { 
     // Stream without options 
     inputDescriptor.buffer = []; 
   } else { 
     throw new Error(`Unsupported input '${input}' of type ${typeof input}${ 
       is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : '' 
     }`); 
   } 
   if (is.object(inputOptions)) { 
     // Deprecated: failOnError 
     if (is.defined(inputOptions.failOnError)) { 
       if (is.bool(inputOptions.failOnError)) { 
         inputDescriptor.failOn = inputOptions.failOnError ? 'warning' : 'none'; 
       } else { 
         throw is.invalidParameterError('failOnError', 'boolean', inputOptions.failOnError); 
       } 
     } 
     // failOn 
     if (is.defined(inputOptions.failOn)) { 
       if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ['none', 'truncated', 'error', 'warning'])) { 
         inputDescriptor.failOn = inputOptions.failOn; 
       } else { 
         throw is.invalidParameterError('failOn', 'one of: none, truncated, error, warning', inputOptions.failOn); 
       } 
     } 
     // Density 
     if (is.defined(inputOptions.density)) { 
       if (is.inRange(inputOptions.density, 1, 100000)) { 
         inputDescriptor.density = inputOptions.density; 
       } else { 
         throw is.invalidParameterError('density', 'number between 1 and 100000', inputOptions.density); 
       } 
     } 
     // limitInputPixels 
     if (is.defined(inputOptions.limitInputPixels)) { 
       if (is.bool(inputOptions.limitInputPixels)) { 
         inputDescriptor.limitInputPixels = inputOptions.limitInputPixels 
           ? Math.pow(0x3FFF, 2) 
           : 0; 
       } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) { 
         inputDescriptor.limitInputPixels = inputOptions.limitInputPixels; 
       } else { 
         throw is.invalidParameterError('limitInputPixels', 'positive integer', inputOptions.limitInputPixels); 
       } 
     } 
     // unlimited 
     if (is.defined(inputOptions.unlimited)) { 
       if (is.bool(inputOptions.unlimited)) { 
         inputDescriptor.unlimited = inputOptions.unlimited; 
       } else { 
         throw is.invalidParameterError('unlimited', 'boolean', inputOptions.unlimited); 
       } 
     } 
     // sequentialRead 
     if (is.defined(inputOptions.sequentialRead)) { 
       if (is.bool(inputOptions.sequentialRead)) { 
         inputDescriptor.sequentialRead = inputOptions.sequentialRead; 
       } else { 
         throw is.invalidParameterError('sequentialRead', 'boolean', inputOptions.sequentialRead); 
       } 
     } 
     // Raw pixel input 
     if (is.defined(inputOptions.raw)) { 
       if ( 
         is.object(inputOptions.raw) && 
         is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && 
         is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && 
         is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4) 
       ) { 
         inputDescriptor.rawWidth = inputOptions.raw.width; 
         inputDescriptor.rawHeight = inputOptions.raw.height; 
         inputDescriptor.rawChannels = inputOptions.raw.channels; 
         inputDescriptor.rawPremultiplied = !!inputOptions.raw.premultiplied; 
  
         switch (input.constructor) { 
           case Uint8Array: 
           case Uint8ClampedArray: 
             inputDescriptor.rawDepth = 'uchar'; 
             break; 
           case Int8Array: 
             inputDescriptor.rawDepth = 'char'; 
             break; 
           case Uint16Array: 
             inputDescriptor.rawDepth = 'ushort'; 
             break; 
           case Int16Array: 
             inputDescriptor.rawDepth = 'short'; 
             break; 
           case Uint32Array: 
             inputDescriptor.rawDepth = 'uint'; 
             break; 
           case Int32Array: 
             inputDescriptor.rawDepth = 'int'; 
             break; 
           case Float32Array: 
             inputDescriptor.rawDepth = 'float'; 
             break; 
           case Float64Array: 
             inputDescriptor.rawDepth = 'double'; 
             break; 
           default: 
             inputDescriptor.rawDepth = 'uchar'; 
             break; 
         } 
       } else { 
         throw new Error('Expected width, height and channels for raw pixel input'); 
       } 
     } 
     // Multi-page input (GIF, TIFF, PDF) 
     if (is.defined(inputOptions.animated)) { 
       if (is.bool(inputOptions.animated)) { 
         inputDescriptor.pages = inputOptions.animated ? -1 : 1; 
       } else { 
         throw is.invalidParameterError('animated', 'boolean', inputOptions.animated); 
       } 
     } 
     if (is.defined(inputOptions.pages)) { 
       if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 100000)) { 
         inputDescriptor.pages = inputOptions.pages; 
       } else { 
         throw is.invalidParameterError('pages', 'integer between -1 and 100000', inputOptions.pages); 
       } 
     } 
     if (is.defined(inputOptions.page)) { 
       if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 100000)) { 
         inputDescriptor.page = inputOptions.page; 
       } else { 
         throw is.invalidParameterError('page', 'integer between 0 and 100000', inputOptions.page); 
       } 
     } 
     // Multi-level input (OpenSlide) 
     if (is.defined(inputOptions.level)) { 
       if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) { 
         inputDescriptor.level = inputOptions.level; 
       } else { 
         throw is.invalidParameterError('level', 'integer between 0 and 256', inputOptions.level); 
       } 
     } 
     // Sub Image File Directory (TIFF) 
     if (is.defined(inputOptions.subifd)) { 
       if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 100000)) { 
         inputDescriptor.subifd = inputOptions.subifd; 
       } else { 
         throw is.invalidParameterError('subifd', 'integer between -1 and 100000', inputOptions.subifd); 
       } 
     } 
     // Create new image 
     if (is.defined(inputOptions.create)) { 
       if ( 
         is.object(inputOptions.create) && 
         is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && 
         is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && 
         is.integer(inputOptions.create.channels) 
       ) { 
         inputDescriptor.createWidth = inputOptions.create.width; 
         inputDescriptor.createHeight = inputOptions.create.height; 
         inputDescriptor.createChannels = inputOptions.create.channels; 
         // Noise 
         if (is.defined(inputOptions.create.noise)) { 
           if (!is.object(inputOptions.create.noise)) { 
             throw new Error('Expected noise to be an object'); 
           } 
           if (!is.inArray(inputOptions.create.noise.type, ['gaussian'])) { 
             throw new Error('Only gaussian noise is supported at the moment'); 
           } 
           if (!is.inRange(inputOptions.create.channels, 1, 4)) { 
             throw is.invalidParameterError('create.channels', 'number between 1 and 4', inputOptions.create.channels); 
           } 
           inputDescriptor.createNoiseType = inputOptions.create.noise.type; 
           if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 10000)) { 
             inputDescriptor.createNoiseMean = inputOptions.create.noise.mean; 
           } else { 
             throw is.invalidParameterError('create.noise.mean', 'number between 0 and 10000', inputOptions.create.noise.mean); 
           } 
           if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 10000)) { 
             inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma; 
           } else { 
             throw is.invalidParameterError('create.noise.sigma', 'number between 0 and 10000', inputOptions.create.noise.sigma); 
           } 
         } else if (is.defined(inputOptions.create.background)) { 
           if (!is.inRange(inputOptions.create.channels, 3, 4)) { 
             throw is.invalidParameterError('create.channels', 'number between 3 and 4', inputOptions.create.channels); 
           } 
           const background = color(inputOptions.create.background); 
           inputDescriptor.createBackground = [ 
             background.red(), 
             background.green(), 
             background.blue(), 
             Math.round(background.alpha() * 255) 
           ]; 
         } else { 
           throw new Error('Expected valid noise or background to create a new input image'); 
         } 
         delete inputDescriptor.buffer; 
       } else { 
         throw new Error('Expected valid width, height and channels to create a new input image'); 
       } 
     } 
     // Create a new image with text 
     if (is.defined(inputOptions.text)) { 
       if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) { 
         inputDescriptor.textValue = inputOptions.text.text; 
         if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) { 
           throw new Error('Expected only one of dpi or height'); 
         } 
         if (is.defined(inputOptions.text.font)) { 
           if (is.string(inputOptions.text.font)) { 
             inputDescriptor.textFont = inputOptions.text.font; 
           } else { 
             throw is.invalidParameterError('text.font', 'string', inputOptions.text.font); 
           } 
         } 
         if (is.defined(inputOptions.text.fontfile)) { 
           if (is.string(inputOptions.text.fontfile)) { 
             inputDescriptor.textFontfile = inputOptions.text.fontfile; 
           } else { 
             throw is.invalidParameterError('text.fontfile', 'string', inputOptions.text.fontfile); 
           } 
         } 
         if (is.defined(inputOptions.text.width)) { 
           if (is.number(inputOptions.text.width)) { 
             inputDescriptor.textWidth = inputOptions.text.width; 
           } else { 
             throw is.invalidParameterError('text.textWidth', 'number', inputOptions.text.width); 
           } 
         } 
         if (is.defined(inputOptions.text.height)) { 
           if (is.number(inputOptions.text.height)) { 
             inputDescriptor.textHeight = inputOptions.text.height; 
           } else { 
             throw is.invalidParameterError('text.height', 'number', inputOptions.text.height); 
           } 
         } 
         if (is.defined(inputOptions.text.align)) { 
           if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) { 
             inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align]; 
           } else { 
             throw is.invalidParameterError('text.align', 'valid alignment', inputOptions.text.align); 
           } 
         } 
         if (is.defined(inputOptions.text.justify)) { 
           if (is.bool(inputOptions.text.justify)) { 
             inputDescriptor.textJustify = inputOptions.text.justify; 
           } else { 
             throw is.invalidParameterError('text.justify', 'boolean', inputOptions.text.justify); 
           } 
         } 
         if (is.defined(inputOptions.text.dpi)) { 
           if (is.number(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 100000)) { 
             inputDescriptor.textDpi = inputOptions.text.dpi; 
           } else { 
             throw is.invalidParameterError('text.dpi', 'number between 1 and 100000', inputOptions.text.dpi); 
           } 
         } 
         if (is.defined(inputOptions.text.rgba)) { 
           if (is.bool(inputOptions.text.rgba)) { 
             inputDescriptor.textRgba = inputOptions.text.rgba; 
           } else { 
             throw is.invalidParameterError('text.rgba', 'bool', inputOptions.text.rgba); 
           } 
         } 
         if (is.defined(inputOptions.text.spacing)) { 
           if (is.number(inputOptions.text.spacing)) { 
             inputDescriptor.textSpacing = inputOptions.text.spacing; 
           } else { 
             throw is.invalidParameterError('text.spacing', 'number', inputOptions.text.spacing); 
           } 
         } 
         delete inputDescriptor.buffer; 
       } else { 
         throw new Error('Expected a valid string to create an image with text.'); 
       } 
     } 
   } else if (is.defined(inputOptions)) { 
     throw new Error('Invalid input options ' + inputOptions); 
   } 
   return inputDescriptor; 
 }
}

module.exports = sharp;
