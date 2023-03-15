const sharp = {
  const InputDescriptor = {
    name: string;
    file: string;
    buffer: string = null;
    //failOn: VipsFailOn = VIPS_FAIL_ON_WARNING;
    limitInputPixels: bigint = 0x3FFF * 0x3FFF;
    unlimited: boolean = false;
    //access: VipsAccess = VIPS_ACCESS_RANDOM;
    bufferLength: bigint = 0;
    isBuffer: boolean: false;
    density: number= 72.0;
    //rawDepth: VipsBandFormat = VIPS_FORMAT_UCHAR;
    rawChannels: number = 0;
    rawWidth: number = 0;
    rawHeight: number = 0;
    rawPremultiplied: boolean = false;
    pages: number = 1;
    page: number = 0;
    level: number = 0;
    subifd: number = -1;
    createChannels: number = 0;
    createWidth: number = 0;
    createHeight: number = 0;
    createBackground: Array<number> = {0.0, 0.0, 0.0, 255.0};
    createNoiseType: string;
    createNoiseMean: number = 0.0;
    createNoiseSigma: number = 0.0;
    textValue: string;
    textFont: string;
    textFontFile: string;
    textWidth: number = 0;
    textHeight: number = 0;
    textAlign: VipsAlign = VIPS_ALIGN_LOW;
    textJustify: boolean = false;
    textDpi: number = 72;
    textRgba: boolean = false;
    textSpacing: number = 0;
    textAutofitDpi: number = 0;
  };
  
  HasAttr(obj: object, attr: string): boolean {};
  AttrAsStr(obj: object, attr: string): string {};
  AttrAsStr(obj: object, attr: bigint): string {};
  AttrAsUint32(obj: object, attr: string): number {};
  AttrAsInt32(obj: object, attr: string): number {};
  AttrAsInt32(obj: object, attr: bigint): number {};
  AttrAsDouble(obj: object, attr: string): number {};
  AttrAsDouble(obj: object, attr: bigint): number {};
  AttrAsBoolean(obj: object, attr: string): boolean {};
  AttrAsVectorOfDouble(obj: object, attr: string): Array<number> {};
  AttrAsInt32Vector(obj: object, attr: string): Int32Array {};
  AttrAsEnum(obj: object, attr: string, type) {};
}
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
