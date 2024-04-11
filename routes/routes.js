import express from "express";
const router = express.Router();
import path from "path";
const __dirname = import.meta.dirname;
import { getRutinas, agregarRutinas } from "../controllers/consultas.js";

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

//
router.get("/rutinas", async (req, res) => {
  const rutina = await getRutinas();
  res.json(rutina);
});

//ruta para enviar data
router.post("/enviar", async (req, res) => {
  const datos = Object.values(req.body);
  const rutina = await agregarRutinas(datos);
  console.log(rutina)
  res.redirect('/')
});

export default router;
