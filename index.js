import express from 'express';
import { create } from 'ipfs-http-client';
import multer from 'multer';

const app = express();
const port = 3000;
const ipfs = create();

// Configuración de multer para manejar la subida de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta para subir archivos al IPFS
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        console.log('Archivo recibido:', file); // Verificar qué se recibe del cliente
        if (!file) {
            return res.status(400).send('Ningún archivo seleccionado');
        }
        
        const { cid } = await ipfs.add(file.buffer);
        console.log('Archivo subido al IPFS con CID:', cid); // Verificar si se subió correctamente
        res.send(`Archivo subido al IPFS con CID: ${cid}`);
    } catch (error) {
        console.error('Error al subir archivo al IPFS:', error);
        res.status(500).send('Error al subir archivo');
    }
});

// Manejo de errores globales
app.use((err, req, res, next) => {
    console.error('Error global:', err);
    res.status(500).send('Error inesperado');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});
