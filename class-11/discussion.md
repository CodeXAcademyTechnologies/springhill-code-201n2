# Audio, Video, Images, Grid

## Audio and Video

1. Explain how the ability to use video and audio on the web has evolved since the early 2000s.

in a professional environment the use of video and audio has increased through meetings and work structure.

User accessibility has grown tremendously since the 2000's where anyone anywhere can create videos and audio and use them as well and aren't as confined to the use cases of them.

the way technology uses video and audio has improved to allow for new solutions to incorporate audio and video and have rendered older technologies such as flash obsolete.

Changes to HTML have made it far easier to incorporate audio and video into your websites. Allowing you to use audio and video without the use of external plugins such as Flash and Silverlight

2. Describe the use of the `src` and `controls` attributes in the `<video>` element.

HDMI, AV, Display-port sources.

the `src` attribute in a `<script>` element is to point to the path to your js file to embed the JS into your source code in your HTML file.

when using the `src` attribute in a `<video>` element it is used to point to the path of your video and embed the video into the source code of your HTML file.

used to control the interface of the video and control how the video works.
play
pause
seeking(fast forward/ rewind)
volume
full-screen mode
captions/subtitles(if available)
Track(is available)

```HTML
<video controls>
  <source src=''>
  Your browser does not support the video tag.
  this is a video about how to create videos in HTML. 
</video>

```

3. Why is it important to have **fallback content** inside the `<video>` element?

some browsers may not support the video tag. fallback content is not required it is heavily suggested that you have it.

4. Write a very short story where `<audio>` and `<video>` are characters.

Once upon a time there were two salesmen called flash and Silverlight. these two salesmen were the only people in the world that sold their product. however they were very reliable. Sometimes they would leave customers house unlocked and sometimes they never deliver their product at all, but on day two new salesmen appeared named audio and video. instead of selling the product they sold the blueprint to make the product. this allowed the buyers(programmers) to create their own product meaning they did not have to run the risks associated with buying from flash or Silverlight such as their house being unlocked(security being compromised) or the product not being delivered at all(accessibility issues). This made the distribution of the product much easier and safer for all users buyers and consumer(programmers and users) to have access to the product.

## The Grid Layout

1. How does Grid layout differ from Flex?

grid is a two dimensional layout system that add onto basic CSS

Grid differs from flexbox because content in grid layout are placed in a grid and only takes up the desired space at a desired position. removing the need for spacing such as margin.

2. Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.

Grid Container: container is the direct parent of all the items inside the grid. it is the grid container

Grid Item: all the children items of the grid container. all the content in the grid

Grid Line: a dividing line that makes up the structure of the grid. it separates the columns and rows

## Responsive Images

1. Besides making a site visually appealing across different screen sizes, why should developers make images responsive?

it helps with accessibility the user may be visually impaired and having responsive images can be helpful.

1. Define the following `<img>` attributes `srcset` and `sizes`. Write an example of how they are used.

`<img>` add an image toa website

`srcset` set of images or multiple sources for images in one element

`adjust` adjust the size of the images universally. 

1. How is `srcset` more helpful for responsive images than CSS or JavaScript?

`srcset` is a direct file path to the image and wouldnt require additional stylings. performance and SEO it can help a browser to pick the right image for a specific size which CSS or JS cant do.

## Additional Questions

1. The Array method of `_______` adds one or more elements to the end of an array.

.push()

1. The Array method of `_______` removes the **last** element from an array.

.pop()

1. The Array method of `_______` removes the **first** element from an array.

.shift()

1. The Array method of `_______` adds one or more elements to the beginning of an array.

.unshift()

1. The Array method of `_______` changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

.splice()
