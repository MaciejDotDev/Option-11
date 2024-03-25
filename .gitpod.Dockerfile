# .gitpod.Dockerfile

FROM gitpod/workspace-full

USER gitpod

# Install PHP extensions
RUN sudo apt-get update \
    && sudo apt-get install -y php-cli php-xml php-mbstring

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Node.js and NPM
RUN nvm install --lts \
    && npm install -g npm

WORKDIR /workspace
