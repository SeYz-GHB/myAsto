import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";


const videoStorage = new CloudinaryStorage({
    cloudinary,
    params : async (req,file) =>({
        folder : 'product_videos',
        resource_type : 'video',
        format : undefined,
        transformation : [{quality : 'auto'}]
    }),
});

const fileFilter =  (req,file,cb) => {
    const ok = [
        'video/mp4',
        'video/webm',
        'video/ogg',
        'video/mpeg',
        'video/quicktime',
        'video/avi'
    ].includes(file.mimetype);

    if(ok) cb(null, true);
    else cb(new Error("Invalid file type"), false);
};

export const uploadSingleVideo = multer ({
    storage : videoStorage,
    limits : {fileSize : 100 * 1024 * 1024},
    fileFilter,

}).single('video');

export const uploadMultipleVideos = multer ({
    storage : videoStorage,
    limits : {files : 3, fileSize : 100 * 1024 * 1024},
    fileFilter,

}).array('videos',3);