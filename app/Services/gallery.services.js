"use strict";
var DataBase_1 = require("./../dataBase/DataBase");
var GalleryService = (function () {
    function GalleryService() {
    }
    GalleryService.prototype.getGallery = function () {
        return Promise.resolve(DataBase_1.GALLERIES);
        // return GALLERIES // zwrot synchroniczny 
    };
    return GalleryService;
}());
exports.GalleryService = GalleryService;
//# sourceMappingURL=gallery.services.js.map