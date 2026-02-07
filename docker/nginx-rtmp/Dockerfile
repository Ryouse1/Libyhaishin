FROM nginx:alpine

# Install runtime dependencies and RTMP module
RUN apk add --no-cache \
    gettext \
    nginx-mod-rtmp

# Create necessary directories
RUN mkdir -p /var/cache/nginx/client_temp \
    /var/cache/nginx/proxy_temp \
    /var/cache/nginx/fastcgi_temp \
    /var/cache/nginx/uwsgi_temp \
    /var/cache/nginx/scgi_temp \
    /var/www/html/hls \
    /var/www/html/dash

# Set permissions
RUN chown -R nginx:nginx /var/www/html/hls /var/www/html/dash

# Copy nginx config template
COPY docker/nginx-rtmp/nginx.conf.template /etc/nginx/nginx.conf.template

# Create entrypoint script
RUN echo '#!/bin/sh' > /docker-entrypoint.sh && \
    echo 'envsubst "\$DOMAIN" < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf' >> /docker-entrypoint.sh && \
    echo 'exec nginx -g "daemon off;"' >> /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

EXPOSE 80 1935 8080

CMD ["/docker-entrypoint.sh"]
