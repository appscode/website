FROM nginx:stable-alpine

ARG TARGETOS
ARG TARGETARCH

# https://stackoverflow.com/a/47656569
# https://itnext.io/nginx-docker-and-environment-variables-9753dfb5d41
COPY default.conf /etc/nginx/conf.d/default.conf

RUN set -x \
	&& apk add --update ca-certificates curl

# Set workdir to the NGINX default dir.
WORKDIR /usr/share/nginx/html

# Copy HTML from previous build into the Workdir.
COPY public .

# https://www.rockyourcode.com/run-docker-nginx-as-non-root-user/
# https://docs.openshift.com/container-platform/4.17/openshift_images/create-images.html#use-uid_create-images
## add permissions
RUN chown -R nginx:root /usr/share/nginx/html \
  && chmod -R 775 /usr/share/nginx/html \
  && chown -R nginx:root /var/cache/nginx \
  && chmod -R g=u /var/cache/nginx \
  && chown -R nginx:root /var/log/nginx \
  && chmod -R g=u /var/log/nginx \
  && chown -R nginx:root /etc/nginx/conf.d \
  && chmod -R g=u /etc/nginx/conf.d

RUN touch /var/run/nginx.pid \
  && chown -R nginx:root /var/run/nginx.pid \
  && chmod -R g=u /var/run/nginx.pid

## switch to non-root user nginx
USER 101

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
