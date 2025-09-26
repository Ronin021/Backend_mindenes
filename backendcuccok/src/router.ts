import {Router} from "express"
import { getALLData, run,  } from  "./controller"


const router: Router = Router()
router.get("/apik", getALLData);
router.get("/apik", run);
export default router;