import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { isPad } from 'react-native-layout-constants'

export default class DetailHeader extends React.Component {
  render() {
    const { color, labelColor } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {/* LeftComponent  */}
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={[styles.title, { color }]}>{this.props.title}</Text>
          <Text style={[styles.description, { color: labelColor }]}>{this.props.description}</Text>
          {Boolean(this.props.label) && <Text style={[styles.label, { color }]}>{this.props.label}</Text>}
        </View>
      </View>
    )
  }
}

DetailHeader.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  labelColor: PropTypes.string,
}

DetailHeader.defaultProps = {
  color: '#000',
  labelColor: '#a1a1a1',
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: isPad ? 10 : 20,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
  },
})
