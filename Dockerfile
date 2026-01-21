#Indica la imagen base
FROM nginx

#copiar mi proyecto a la imagen
COPY . /usr/share/nginx/html

