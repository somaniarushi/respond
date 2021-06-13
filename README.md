# Respond

The React clone. 

## The Core of React
```
const element = {
    type: 'div',
    props: {
        id: 'container',
        children: [
            {type: 'a', props: {href: '/bar', children: []}}
        ]
    }
}
```
Describes this DOM
```
<div id="container">
    <a href="/bar"></a>
</div>
```

## RESPOND Design Details
1. Everything must have a type.
2. The "children" of a node must be a series of zero or more objects. 
3. All event listeners added using Respond must be preceeded with "get". Example: getClick == click, getPress = press, etc

### TextNode
In the standard DOM, text is wrapped in a TextNode, which is then put into another node of any sort (`h1`, `p` etc). We must to copy this, in part for cleanliness, and in part to stay true to Rule 2 of Respond's Design Details.
```
const textElement = {
    type="plain-text"
    props: {
        value: "This is a text element",
        children: []
    }
}
```

#### Inspired by [React](https://github.com/facebook/react) and [Didact](https://github.com/pomber/didact).