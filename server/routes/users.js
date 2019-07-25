var express = require("express");
var router = express.Router();
var userCtrlRouter = require("../controllers/userCtrl");

/* GET users listing. */
router.get("/", userCtrlRouter.getDataUser);
router.get("/:id", userCtrlRouter.getDataUserById);
router.post("/", userCtrlRouter.postDataUser);
router.delete("/:id", userCtrlRouter.deleteDataUser);
router.put("/:id", userCtrlRouter.updateDataUser);
module.exports = router;
