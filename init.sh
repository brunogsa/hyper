#!/bin/bash

# Download it
wget https://github.com/zeit/hyper/releases/download/1.0.0/hyper-1.0.0-x86_64-linux.AppImage
sudo chmod +x hyper-1.0.0-x86_64-linux.AppImage
sudo ln -s ~/hyper/hyper-1.0.0-x86_64-linux.AppImage /usr/bin/hyper

# Font
sudo apt-get install -y fonts-inconsolata

# Use my configs
sudo rm -f ~/.hyper.js
sudo ln -s ~/hyper/.hyper.js ~/

echo "Done"
