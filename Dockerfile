# Użyj oficjalnego obrazu Nginx
FROM nginx:alpine

# Skopiuj zbudowaną aplikację do katalogu Nginx
COPY dist/zpi /usr/share/nginx/html

# Opcjonalne: dodanie niestandardowej konfiguracji Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Eksponuj port 80
EXPOSE 80

# Start serwera Nginx
CMD ["nginx", "-g", "daemon off;"]
