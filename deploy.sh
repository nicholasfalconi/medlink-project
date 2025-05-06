
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# create a .nojekyll file to bypass GitHub Pages' default behavior
touch .nojekyll

# initialize git repository if not already present
if [ -z "$(git config --get remote.origin.url)" ]; then
  git init
  git checkout -b main
  git add -A
  git commit -m 'deploy'
  git remote add origin https://github.com/nicholasfalconi/medlink-project.git
else
  git add -A
  git commit -m 'deploy'
fi

# push to the gh-pages branch
git push -f origin main:gh-pages

cd -
