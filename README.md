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