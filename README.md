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

## Respond Design Details
All event listeners added using Respond must be preceeded with "get". Example: getClick == click, getPress = press, etc