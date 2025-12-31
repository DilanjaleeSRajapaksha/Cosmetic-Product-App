import express from "express";
import { deleteProduct, getProducts, saveProduct } from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post("/", saveProduct);
//Postman eke URL ekema delete krna prdct eke productId eka ghla delt krnna pulwn wenna tmai mehma "/:productId" kyla denne..nttham "/productId" mehema dunnoth Postman eke URL eketh Id ek nodi 'productId' kyla name ekai denne...;
//Normal me wge project wla withrai mehma delete krnne..nttham loku projects wla nm mehma delte krnne nh..ewadi krnne, 'isAvailable' wge 'deleted' kyla hdala aka 'true or false' danwa...

productRouter.delete("/:productId", deleteProduct);

export default productRouter;
