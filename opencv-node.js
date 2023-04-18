const { Canvas, Image, ImageData } = require('canvas');
const { JSDOM } = require('jsdom');

let cv = undefined;

exports.loadOpenCV = function loadOpenCV() {
  if (global.Module && global.Module.onRuntimeInitialized && cv && cv.imread) {
    return Promise.resolve(cv);
  }
  return new Promise((resolve) => {
    // installDOM
    if (!global.document) {
      const dom = new JSDOM();
      global.document = dom.window.document;
    }
    global.Image = Image;
    global.ImageData = ImageData;
    global.HTMLCanvasElement = Canvas;
    global.HTMLImageElement = Image;

    global.Module = {
      onRuntimeInitialized() {
        resolve({ cv });
      },
    };
    cv = require('./opencv.js');
  });
};
