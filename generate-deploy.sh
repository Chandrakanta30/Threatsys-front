#!/bin/bash

echo "🧹 Cleaning up..."
rm -rf deploy .next

echo "🏗️ Building..."
npm run build

echo "📂 Structuring for CloudLinux..."
mkdir -p deploy

# Copy standalone files BUT EXCLUDE node_modules
# We use rsync to easily exclude the folder
rsync -av --exclude='node_modules' .next/standalone/ deploy/

# Copy static assets as usual
echo "🖼️ Copying assets..."
mkdir -p deploy/.next/static
cp -r .next/static/. deploy/.next/static/
cp -r public/. deploy/public/

echo "✅ Ready! Ensure 'deploy' folder has NO node_modules before zipping."