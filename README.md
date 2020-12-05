#### Setup project
Run the following commands:
* `npm install --global yarn`
* `yarn install`
#### Running project

Install `expo` app on your android device. Can be found free on the play store.

Run the following command:
* `yarn start`

This will show open a tab on your browser; the browser contains a QR code

This code will be also visible on the terminal where you run the command.

Scan it with your camera and wait until the app fully loads.

#### Technical knowledge

This application was made with `expo-cli` it uses react-native syntax.

Every text MUST be wraped on `<text>` component tags
There are 2 ways of declaring components 

##### pure functions
```javascript
  import * as React from 'react'
  import { Text } from 'react-native'
  function ExamplePureComponent(){
    return <Text>your text here</Text>
  }
  export default ExamplePureComponent;
```
##### component inheritance
```javascript
  import React,{Component} from 'react'
  import { Text } from 'react-native'
  class ComponentInheritance{
    render(){
      return (
        <Text>your text here</Text>
      );
    }
  }
  export default ComponentInheritance;
```


#### Which one should I use?

It really depends, if the component is going to have any complicated state you should use component inheritance.
If the components is fully dummy and only render information from a parent you can use pure function.

#### Extra info.
* You can use states on pure functions look for documentation at `react hooks`
* States on pure functions and component inheritance ARE COMPLETELY DIFFERENT.
* Pure function can receive props `function ExampleComponent({title,decription})`
* Props on component inheritanc are called by the `this.props` object variable.

#### How to pass props?

Let's pass "Hola mundo" to my dummy component

```javascript
  import React,{Component} from 'react'
  import { View } from 'react-native'
  import DummyComponent from 'components/dummyComponent'
  class ComponentInheritance extends Component{
    render(){
      return (
        <View>
          <DummyComponent title="Hola mundo"/>
        </View>
      );
    }
  };
  export default ExampleComponent;
```
```javascript
  // dummyComponent component inheritance
  import React,{Component} from 'react'
  import { View, Text } from 'react-native'

  class DummyComponent extends Component{
    render(){
      // you can use destructuring
      const {title} = this.props
      return (
        <View>
          <Text>{this.props.title}</Text>
          {
            // next line only works with destructuring 
          }
          <Text>{title}</Text>

        </View>
      );
    }
  }
  export default DummyComponent;
  // dummy component pure function
  import * as React from 'react'
  import { View, Text } from 'react-native'
  function ExamplePureComponent({ title }){
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
  export default ExamplePureComponent;
```