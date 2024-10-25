FROM nginx:stable-alpine

ARG TARGETOS
ARG TARGETARCH

RUN set -x \
	&& apk add --update ca-certificates curl

# Set workdir to the NGINX default dir.
WORKDIR /usr/share/nginx/html

# Copy HTML from previous build into the Workdir.
COPY public .

# Expose port 80
EXPOSE 80/tcp
