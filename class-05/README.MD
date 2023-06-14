# lECTURE

## images in html color and text

```HTML
<img src=''>
```

### why

makes a more dynamic page.

give more content for the users brings some more life to the page.

we usually use colors and images to style our page and separate content so that the contents section is more clearly defined.

### what

JPEG(.jpg, .jpeg) joint photographic exports group

PNG (.png) portable network graphics

GIF (.gif) graphics interchange format

### how

#### Advantages

jpeg: it compresses small to large images that use natural light an colors.

png: png uses lossless compression which allows you to compress an image to much smaller sizes without loosing image quality. png supports transparency for images so that they dont collide with a background

gif: uses a similar type of lossless compression. is better for storing simple graphics with sharp edges and basic colors

#### Disadvantages

jpeg: it does not work well with: line drawings, shapes or text.

png: does not support embedding meta data and does not support non-rgb color spaces.

gif: only supports up to 256 different as opposed to a jpeg that supports around 16 million because of this the gif quality when using more than 256 colors is usually diminished due to the lack of available colors.

## how does images relate to you

its important to understand which image type is best to use when displaying content to a user. we want to try to display our content usually in the most efficient and highest quality manner.

## git branching, solving merge conflict and deployment

### Why?

collaborating with other developers on a project
keeping our specific work saved.
fixing a bug.

you have different branches that can be push to your cloud instance but the may not be merged into your deployed instance

a reason to use branching is that we can better timeline management. and allows us to view errors and code that was written on other branches.

### What?

branching off of the main repository onto a seperate branch in order to push code that does not immediately merge into your main branch.

### How?

`git checkout -b <branch-name>`
creates a new branch and then names the branch

`git checkout <branch-name>`
changes to a different branch

`git push origin <branch-name>`
pushes up the branch that you are working on

`git pull origin main`

always want to keep your local main up to date with your cloud instance after changes have been made.