#!/usr/bin/env sh
set -e

# 1) build
npm run build

# 2) copy CNAME (and any other root-level static assets)
cp CNAME dist/CNAME
# If you have favicon or og-image, do likewise:
# cp favicon.ico dist/favicon.ico
# cp og-image.png dist/og-image.png

# 3) go into the build output directory
cd dist

# 4) ensure .nojekyll so pages with dots (e.g. js.map) work
touch .nojekyll

# 5) commit to gh-pages
if [ -z "$(git config --get remote.origin.url)" ]; then
  git init
  git checkout -b main
  git add -A
  git commit -m 'deploy'
  git remote add origin https://github.com/nicholasfalconi/medlink-project.git
else
  git add -A
  git commit -m 'deploy' || true
fi

# 6) force-push to gh-pages branch
git push -f origin main:gh-pages

# 7) back to root
cd -
