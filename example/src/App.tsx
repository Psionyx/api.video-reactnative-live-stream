/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
import {
  LivestreamView,
  ReactNativeLivestreamMethods,
} from '@api.video/react-native-livestream';

export default function App() {
  const ref = React.useRef<ReactNativeLivestreamMethods | null>(null);
  const [streaming, setStreaming] = React.useState(false);
  const [audioMuted, setAudioMuted] = React.useState(false);
  const [res, setRes] = React.useState<'360p' | '720p'>('360p');
  const [camera, setCamera] = React.useState<'front' | 'back'>('back');
  const [orientation, setOrientation] = React.useState<
    'landscape' | 'portrait'
  >('landscape');

  return (
    <View style={styles.container}>
      <LivestreamView
        style={{ flex: 1, backgroundColor: 'black', alignSelf: 'stretch' }}
        ref={ref}
        video={{
          fps: 30,
          resolution: res,
          camera,
          orientation,
          bitrate: 100000,
        }}
        liveStreamKey={'re_5436591_290fd6ac9eeb8b614fa9'}
        rtmpServerUrl={'rtmp://live.restream.io/live/'}
        audio={{
          muted: audioMuted,
        }}
        onConnectionSuccess={() => {
          console.log('Received onConnectionSuccess');
        }}
        onConnectionFailed={(e) => {
          console.log('Received onConnectionFailed', e);
        }}
        onDisconnect={() => {
          console.log('Received onDisconnect');
        }}
      />
      <View style={{ position: 'absolute', bottom: 40 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: streaming ? 'red' : 'white',
            width: 50,
            height: 50,
          }}
          onPress={() => {
            if (streaming) {
              ref.current?.stopStreaming();
              setStreaming(false);
            } else {
              ref.current?.startStreaming();
              setStreaming(true);
            }
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 40, right: 20 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: 'blue',
            width: 50,
            height: 50,
          }}
          onPress={() => {
            if (audioMuted) {
              setAudioMuted(false);
            } else {
              setAudioMuted(true);
            }
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 40, left: 20 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: 'yellow',
            width: 50,
            height: 50,
          }}
          onPress={() => {
            ref.current?.changeBitRate(5000000);
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 110 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: 'green',
            width: 50,
            height: 50,
          }}
          onPress={() => {
            if (camera === 'back') {
              setCamera('front');
            } else {
              setCamera('back');
            }
          }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 110, left: 20 }}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            backgroundColor: 'purple',
            width: 50,
            height: 50,
          }}
          onPress={() => {
            if (orientation === 'portrait') {
              setOrientation('landscape');
            } else {
              setOrientation('portrait');
            }
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 40,
          right: 20,
          padding: 8,
          backgroundColor: '#00000050',
        }}
      >
        <Text style={{ color: 'white' }}>{`Current Settings:`}</Text>
        <Text style={{ color: 'white' }}>{`FPS: ${30}`}</Text>
        <Text style={{ color: 'white' }}>{`Resolution: ${res}`}</Text>
        <Text style={{ color: 'white' }}>{`Camera: ${camera}`}</Text>
        <Text style={{ color: 'white' }}>{`Orientation: ${orientation}`}</Text>
        <Text style={{ color: 'white' }}>{`Muted: ${audioMuted}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  box: {
    flex: 1,
    backgroundColor: 'green',
  },
});
