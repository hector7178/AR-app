import {  Button, ImageBackground, ScrollView, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { BackdropBlur, Canvas, Fill, Shadow,Image, Blur, useImage, Path, FitBox, rect } from '@shopify/react-native-skia';
import { useState } from 'react';
import Chat from '../../components/Chat';
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import View3D from '../../components/View3D';


export default function TabChatScreen() {
  const [open,setOpen]=useState(false)
  const image = useImage(require("../../assets/images/gradient-bg.png"));
  const [type, setType] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <>
      <Canvas style={{position:'relative',width:'100%', height:'100%',flex:1}}>
        <Image image={image} fit="cover" width={1000}  height={1000}/>
      </Canvas> 
      
        <View style={{borderRadius:15 ,display:'flex',top:'40%', gap:10, flexDirection:'column', alignItems:'center', justifyContent:'center',position:'absolute', width:'80%',left:'10%', height:'20%' , backgroundColor:'white'}}>
          <Text style={{ textAlign: 'center',color:'black' }}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="Grant permission" />
          <TouchableOpacity style={{backgroundColor:'#454545', padding:10, borderRadius:10}} onPress={()=> router.push("/(tabs)/")}><Text style={{color:'white', fontSize:10, fontWeight:'600'}}>Back to home</Text></TouchableOpacity>
        </View>
      
      </>
    );
  }
  
  function toggleCameraType() {
    setType(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
     
    <CameraView style={styles.camera} facing={type}/>
  <View3D/>
    <Chat open={open} setOpen={setOpen} toggle={toggleCameraType}/>
               
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#454554',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative',
    flexDirection:'column'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  
  xIcon:{
    position:'relative',
    width:25,
    height:25,
    flex:0.10,
    alignItems:'flex-end',
    justifyContent:'flex-end'
  },
  camera: {
    position:'relative',
    width:'100%',
    height:'100%',
    flex:1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64, 
    
    
   
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    
    zIndex:20,
    position:'absolute',
    bottom:25
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    
  },
 
});
