#si une commande failed on quitte le l'exécution du fichier
set -e 
yarn build 
scp -r -i ~/Desktop/clotildefauchille.pem dist clotilde@annesophiegabriel.fr:
