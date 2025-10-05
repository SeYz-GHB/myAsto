import { Router } from "express";
import { uploadCategory, getCategory, deleteCategory, updateCategory } from "../controllers/category.controller.js";
import { uploadSingle } from "../middleware/uploadImage.js";
import { authenticate } from "../middleware/autheticate.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";


const router = Router();

router.post( "/upload-category",authenticate,authorizeRoles('admin', 'seller'), uploadSingle,  uploadCategory);

router.get("/view-all-categories", getCategory);

router.delete("/delete-categories/:id",authenticate,authorizeRoles('admin', 'seller'),  deleteCategory);

router.patch('/update-category/:id',authenticate,authorizeRoles('admin', 'seller'),  uploadSingle, updateCategory);

export default router;
