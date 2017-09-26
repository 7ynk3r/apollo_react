import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const Component = (props) => (
  <View style={styles.container}>
    <Text>
      { JSON.stringify(props.data, null, '  ') }
    </Text>
  </View>
);

export const withContainer = graphql(gql`query { hello }`);

export default withContainer(Component);
