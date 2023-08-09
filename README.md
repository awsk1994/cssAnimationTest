# Css Animation Test

## Video Loop
```js
import sample from './sample.mp4';

<video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
```
 - https://stackoverflow.com/questions/36230522/adding-a-background-video-with-react

## Framer Motion
     - https://www.framer.com/motion/

### Basic API Tutorial and Notes
 - https://www.youtube.com/watch?v=o7enGcf8x1s&t=133s

#### Notes
 - add <motion.\<html element>> to add motion attribute to component
 - initial
     - css/framer motion configurations at the start of animation
     - when defining x, the value is relative to where the component is, not where the page is
 - animate
     - css/framer motion configurations at the end of animation
 - transition
     - css/framer motion configurations during the animation
     - examples:
         - type
         - mass (speed of animation)
         - damping
         - delay
         - when (afterChildren, beforeChildren.etc)
         - staggerChildren ()

 - whileHover
     - same as above, but for hover
    
 - Variants
     - allows you to define different classes/styles, and reference them in a cleaner way
     - For example:

Before:
```html
<motion.div animate={{XXX}}/>
```

After:
```js
const variants = {
    classOne: {XXX}
}
<motion.div variants={variants} animate="classOne"/>
```

 - Keyframes
     - Instead of just 1 animation, can set a sequence of animations

Before:
```js
const variants = {
    classOne: { scale: 1.1 }
}
<motion.div variants={variants} animate="classOne"/>
```

After:
```js
const variants = {
    classOne: { scale: [1, 1.1, 1.3, 1, 1.1, 1.3] } // now scale animation is a sequence
}
<motion.div variants={variants} animate="classOne"/>
```

 - Yoyo
     - used to loop animations

Before:
```js
const variants = {
    classOne: { scale: 1.1 }
}
<motion.div variants={variants} animate="classOne"/>
```

After:
```js
const variants = {
    classOne: { 
        scale: 1.1,
        transition: {
            yoyo: Infinity // TODO: this will loop scale animation FOREVER. Use number to set exact number of keyframes.
        }
    }
}
<motion.div variants={variants} animate="classOne"/>
```



 - AnimatePresence + exit attribute
     - Used when we want to provide exit animation
     - can also be used to do configure exit animation when leaving a particular route (using onExitComplete attribute)

Before:
```js
const [show, setShow] = useState(true);
setTimeout(() => {
    setShow(false)
}, 4000) // after 4 seconds, show = false

return (
    { show && <h2>Title</h2>} // Show Title for 4 seconds, and then dont show
)
```

After: 
```js
const [show, setShow] = useState(true);
setTimeout(() => {
    setShow(false)
}, 4000) // after 4 seconds, show = false

return (
    <AnimatePrescence>
        { show && 
            <motion.h2
                exit={{XXX}}    // exit animation defined here
            >
                Title
            </motion.h2>
        } 
        // Show Title for 4 seconds, and then dont show with exit animation
     </AnimatePrescence>
)
```

 - Animating Paths
     - making animation work based on routing
     - bit complicated to explain in words, should re-watch this video: https://www.youtube.com/watch?v=Imyi2V7WgGU&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=12

 - Animating SVG
    - can set pathLength and animation on svg
    - see video: https://www.youtube.com/watch?v=ILxNdOtKbNQ&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=15

 - loader
     - https://www.youtube.com/watch?v=uxjMjXNZV_4&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=16

 - cycleLoader
     - almost like useState, but used for cycling between animations

### Parallax Tutorial

 - https://www.youtube.com/watch?v=29UWA-GdA7k
 - tutorial github: https://github.com/TomIsLoading/framer-parallax
 - my implementation: /parallax
