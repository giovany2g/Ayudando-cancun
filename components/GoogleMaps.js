import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import CustomBox from './GoogleMapsBox';
import CustomMapType from '../assets/customMap.json';
import Api from '../services/api';
class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      region: {
        latitude: 21.1531298596434,
        longitude: -86.86675054952502,
        latitudeDelta: 0.09218046041064909,
        longitudeDelta: 0.05054321140052309,
      },
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  onRegionChange(region) {
    this.setState({ region });
  }

  async findCategoryID(category){
    const { data: { data } } = await Api.Categories.getAll();
    let categories = data;
    return categories.find(value=>value.categoryName == category)._id;
  }
  async componentDidMount() {
    try {
      const { route: { params: { category } } } = this.props;
      const idCategory = await this.findCategoryID(category);
      const { data: { data: productsInCategory }} = await Api.Product.getAll({category:idCategory});
      let markers = [];
      for(let i=0;i<productsInCategory.length;i++){
        const { data: { data: address } } = await Api.Address.get({ user: productsInCategory[i].user });
        let productFormated = productsInCategory[i]
        productFormated.latlng = address[0].region;
        markers.push(productFormated)
      }
      let { coords } = await Location.getCurrentPositionAsync({});
      const location = {
        longitude: coords.longitude,
        latitude: coords.latitude,
      }
      this.setState({ location, markers });
    } catch (e) {
      console.log("Possible permission error", e);
    }
  }
  render() {
    const { markers, region, location } = this.state;
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          onRegionChange={this.onRegionChange}
          style={styles.mapStyle}
          customMapStyle={CustomMapType}
        >
          {
            location && (
              <Marker
                title={"Tu ubicación"}
                coordinate={location}
                pinColor={"#00EF99"}
                radius={10}
              />
            )
          }
          {
            markers.map(marker => (
              <Marker
                key={marker._id}
                coordinate={marker.latlng}
              >
                <CustomBox {...marker}{...this.props} />
              </Marker>
            ))
          }
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default GoogleMaps;