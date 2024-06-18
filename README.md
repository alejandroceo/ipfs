README.md

Instala Node.js y npm:

comandos:

sudo apt install nodejs npm

Verifica la instalación:

node -v
npm -v

Actualizar npm
Si necesitas actualizar npm a la última versión, puedes usar el siguiente comando:

npm install -g npm


/////

Iniciar un nuevo proyecto
Para iniciar un nuevo proyecto en Node.js, debes crear un nuevo directorio y dentro de él inicializar el proyecto con npm:

mkdir nombre-del-proyecto
cd nombre-del-proyecto
npm init

///

Inicializar IPFS
Después de instalar IPFS, necesitas inicializar el nodo IPFS. Esto crea la configuración inicial y el repositorio donde se almacenarán los datos:

ipfs init


Iniciar el daemon de IPFS
Para comenzar a utilizar IPFS, debes iniciar el daemon, que es el proceso de fondo que maneja la comunicación y la distribución de archivos:

ipfs daemon

Cerrar el daemon de IPFS
Para detener el daemon de IPFS, simplemente usa Ctrl + C en la terminal donde está corriendo el daemon.


