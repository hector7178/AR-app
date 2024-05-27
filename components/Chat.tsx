import { BackdropBlur, Canvas, Fill, FitBox,  Path, rect } from '@shopify/react-native-skia'
import React, {  useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Animated, Button, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import {botMsj,getPrices,picturestMsj,productsMsj,tablestMsj,windowstMsj,supportMsj, getOrders} from '../constants/Bot'
import { router } from 'expo-router'

interface prop{
    open:boolean,
    setOpen:(e:boolean)=>void,
    toggle:()=>void
}

interface DataType {
  user: string;
  data: {
    textType: string;
    text: string;
  };
}

function Chat({open, setOpen,toggle}:prop) {
const [text, setText] = useState('');
const [chatContext, setchatContext] = useState(botMsj);
const flatListRef = useRef<FlatList<DataType>>(null);
const reverseIcon= "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" 

const xIcon= "M6 18 18 6M6 6l12 12";

const questionsIcon="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z";

const sendIcon="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5";

const botIcon="M9.75199 8.20236C10.552 8.20236 11.2 8.85036 11.2 9.65036V10.2016H11.196C11.1688 10.8256 10.9976 11.6072 10.2976 12.2456C9.53279 12.944 8.21199 13.4 5.99999 13.4C3.78719 13.4 2.46719 12.944 1.70239 12.2456C1.00239 11.6072 0.831188 10.8248 0.803988 10.2016H0.799988V9.64956C0.799988 8.85036 1.44799 8.20236 2.24799 8.20236H9.75199ZM3.19999 1.39996C2.88173 1.39996 2.5765 1.52639 2.35146 1.75143C2.12642 1.97647 1.99999 2.2817 1.99999 2.59996V5.79996C1.99999 6.11822 2.12642 6.42344 2.35146 6.64849C2.5765 6.87353 2.88173 6.99996 3.19999 6.99996H8.79999C9.11825 6.99996 9.42347 6.87353 9.64852 6.64849C9.87356 6.42344 9.99999 6.11822 9.99999 5.79996V2.59996C9.99999 2.2817 9.87356 1.97647 9.64852 1.75143C9.42347 1.52639 9.11825 1.39996 8.79999 1.39996H6.39999V0.999958C6.40225 0.946825 6.39345 0.893801 6.37415 0.844246C6.35485 0.794691 6.32547 0.749685 6.28786 0.71208C6.25026 0.674476 6.20525 0.645092 6.1557 0.625791C6.10614 0.60649 6.05312 0.597693 5.99999 0.599958C5.77919 0.599958 5.59999 0.783958 5.59999 0.999958V1.39996H3.19999ZM3.59999 4.19996C3.59999 3.98778 3.68427 3.7843 3.8343 3.63427C3.98433 3.48424 4.18781 3.39996 4.39999 3.39996C4.61216 3.39996 4.81564 3.48424 4.96567 3.63427C5.1157 3.7843 5.19999 3.98778 5.19999 4.19996C5.19999 4.41213 5.1157 4.61561 4.96567 4.76564C4.81564 4.91567 4.61216 4.99996 4.39999 4.99996C4.18781 4.99996 3.98433 4.91567 3.8343 4.76564C3.68427 4.61561 3.59999 4.41213 3.59999 4.19996ZM6.79999 4.19996C6.79999 3.98778 6.88427 3.7843 7.0343 3.63427C7.18433 3.48424 7.38781 3.39996 7.59999 3.39996C7.81216 3.39996 8.01564 3.48424 8.16567 3.63427C8.3157 3.7843 8.39999 3.98778 8.39999 4.19996C8.39999 4.41213 8.3157 4.61561 8.16567 4.76564C8.01564 4.91567 7.81216 4.99996 7.59999 4.99996C7.38781 4.99996 7.18433 4.91567 7.0343 4.76564C6.88427 4.61561 6.79999 4.41213 6.79999 4.19996Z";

const animatedValues=React.useRef(new Animated.Value(600)).current;

const scaleValues=React.useRef(new Animated.Value(0.8)).current;

const translateInterpolation= animatedValues.interpolate({
    inputRange:[0,600],
    outputRange:[30,600]
})

const scaleInterpolation= scaleValues.interpolate({
  inputRange:[0,1],
  outputRange:[0.8,1.2]
})
const StartAnimationOpen=()=>{
    Animated.spring(animatedValues, {
        useNativeDriver:true,
        toValue:5
    }).start()
}
const StartAnimationClose=()=>{
    Animated.spring(animatedValues, {
        useNativeDriver:true,
        toValue:600
    }).start()
    Animated.spring(scaleValues, {
      useNativeDriver:true,
      toValue:0.8
  }).start()
}

const scale=()=>{
  Animated.spring(scaleValues, {
      useNativeDriver:true,
      toValue:1.2
  }).start()
}
const animatedStyle={
    transform:[
        {
            translateY:translateInterpolation
        }
    ]
}
const AnimatedScale={
  transform:[
    {
      scale: scaleInterpolation
    }
  ]
  
}

useEffect(() => {
  if (flatListRef.current) {
    flatListRef.current.scrollToEnd({ animated: true });
  }
}, [chatContext]);

  return (
    <>
    <Animated.View style={[styles.chatOpen,animatedStyle]} >
              <View  style={{position:'relative',width:'100%',height:600,paddingBottom:0,display:'flex', flexDirection:'column', alignItems:'center' }}>
                <Canvas style={{
                  position:'absolute',
                  height:'100%', 
                  width:'100%',  
                  borderWidth: 5,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  flex:1}} >
                  
                <BackdropBlur blur={4} >
                  <Fill color="rgba(255, 255, 255, 0.4)" />
                </BackdropBlur>
                  
          
                </Canvas>
                <View style={{position:'relative', flex:0.1, top:20 , display:'flex' ,flexDirection:'row', width:'100%',padding:20,justifyContent:'center', height:80}}>
                  <View style={{ display:'flex' ,flexDirection:'row', gap:5,position:'relative',flex:0.9}}>
                
                        <Canvas style={{ width: 30, height: 30 }}>
                        <FitBox src={rect(0, 0, 24, 24)} dst={rect(0, 0, 30, 30)}>
                        <Path 
                        path={"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"} 
                        color="#ffffff"
                        strokeCap="round"
                        strokeJoin="round"
                        style="stroke"
                        strokeWidth={1.8}/>
                        </FitBox>
                      </Canvas>
                    <Text style={{color:'white', fontSize:20}}>
                  Chat</Text>
                  </View>  
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={{padding:8, borderRadius:10}}
                    onPress={() =>{ 
                        StartAnimationClose()
                        setOpen(false)}}> 
                    
                      <Canvas style={{ width: 30, height: 30 }}>
                        <FitBox src={rect(0, 0, 24, 24)} dst={rect(0, 0, 30, 30)}>
                        <Path 
                        path={xIcon} 
                        color="#ffffff"
                        strokeCap="round"
                        strokeJoin="round"
                        style="stroke"
                        strokeWidth={3}/>
                        </FitBox>
                      </Canvas>
                  </TouchableHighlight>
                </View>
                <FlatList
                  ref={flatListRef}
                  style={{position:'relative', display:'flex' ,flexDirection:'column', width:'100%',padding:15 , flex:0.7,paddingBottom:30}}
                      data={chatContext}
                      renderItem={({item,index}) => {
                        
                          if( item.data.text === 'loading...'){
                            return item?.user !== 'bot' ? 
                            <View style={styles.msj} key={index}>
                             <ActivityIndicator size="small" color="#0000ff"  />
                            </View>
                            : <View style={styles.msjBot} key={index}>
                              <ActivityIndicator size="small" color="#0000ff"  />
                            </View>
                            }else{
                              return  item?.user !== 'bot' ? 
                              <View style={styles.msj} key={index}> 
                                <View style={{backgroundColor:'black', opacity:0.2, width:'100%', height:'100%', position:'absolute',padding:15, borderRadius:10}}></View>        
                                <Text style={{fontSize:16,color:'white', fontWeight:'600',padding:15}}>{item.data.text}</Text>
                              </View>
                              :
                              <TouchableWithoutFeedback  key={index} onPress={()=>{
                                  if(item.data.textType==='button'){
                                    setchatContext((e)=>{
                                      return[ ...e, {user:'user',data: {textType:'tittle', text:item.data.text}}]
                                    });
                                    setText('');
                                    setTimeout(()=>{
                                    
                                        setchatContext((e)=>{
                                          if(item.data.text === 'What are our best-selling products?'){
                                            return e.concat(productsMsj)
                                          }else if(item.data.text === 'How long will it take to get my order?'){
                                            return e.concat(getOrders)
                                          }else if (item.data.text === 'How can I know the price of the products?'){
                                            return e.concat(getPrices)
                                          }else if (item.data.text === '1) Windows'){
                                            return e.concat(windowstMsj)
                                          }else if (item.data.text === '2) Tables'){
                                            return e.concat(tablestMsj)
                                          }else if (item.data.text === '3) Pictures'){
                                            return e.concat(picturestMsj)
                                          }else{
                                            return e.concat(supportMsj)
                                          }
                                          
                                        });
                                    }, 500)
                              
                                  }else{
                                    return null
                                  }
                                }}>
                                <View style={styles.msjBot}>
                                  <View style={{backgroundColor:'black', opacity:0.2, width:'100%', height:'100%', position:'absolute',padding:15, borderRadius:10}}></View>        
                                  <View style={{padding:15,flex:0.4,borderRadius:15, width:'100%',display:'flex',flexDirection:'row',gap:4, alignItems:'center'}}>
                                  {item.data.textType!=='button'?
                                  <Canvas style={{ width: 30, height: 35, }}>
                                    <FitBox src={rect(0, 0, 24, 20)} dst={rect(0, 0, 40, 40)}>
                                    <Path 
                                    path={botIcon} 
                                    color="#ffffff"
                                    strokeCap="round"
                                    strokeJoin="round"
                                    style="stroke"
                                    strokeWidth={1}/>
                                    </FitBox>
                                  </Canvas>
                                  :
                                  <Canvas style={{ width: 30, height: 35 }}>
                                  <FitBox src={rect(0, 0, 24, 20)} dst={rect(0, 0, 30, 30)}>
                                  <Path 
                                  path={questionsIcon} 
                                  color="#ffffff"
                                  strokeCap="round"
                                  strokeJoin="round"
                                  style="stroke"
                                  strokeWidth={1}/>
                                  </FitBox>
                                  </Canvas>}
                                  <Text style={{fontSize:16,width:'90%', color:'white'}}>{item.data.text}</Text>
                                  </View>
                                </View>
                              </TouchableWithoutFeedback>;
                          }
                        
                       
                      }}
                />
                <View style={{alignItems:'flex-start',gap:4 ,position:'relative',display:'flex' ,flexDirection:'row', width:'100%',padding:20,justifyContent:'center', backgroundColor:'#454545', opacity:0.55,flex:0.2 }}>
                  <View style={{ display:'flex' ,flexDirection:'row', gap:5,position:'relative',flex:1 , width:200, height:50, backgroundColor:'white', padding:10, borderRadius:10}}>
                      <TextInput
                          style={{height: 25 , width:180}}
                          placeholder="Type here!"
                          onChangeText={newText => setText(newText)}
                          defaultValue={text}
                          onSubmitEditing={()=>{
                            if(text!== '' && text){
                              setchatContext((e)=>{
                              return[ ...e, {user:'user',data: {textType:'tittle', text:text}}]
                              });
                              setText('');
                              setchatContext((e)=>{
                                if(text.includes('/products')){
                                  return e.concat(productsMsj)
                                }else if(text.includes('/supports')){
                                  return e.concat(supportMsj)
                                }else if (text.includes('/price')){
                                  return e.concat(getPrices)
                                }else if (text === '/Windows'){
                                  return e.concat(windowstMsj)
                                }else if (text === '/Tables'){
                                  return e.concat(tablestMsj)
                                }else if (text === '/Pictures'){
                                  return e.concat(picturestMsj)
                                }else{
                                  return e
                                }
                                
                              });
                            }
                          }}
                        />
                  </View>  
                  <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    style={{padding:4, borderRadius:10, height:40, width:40}}
                    onPress={() =>{ 
                      if(text!== '' && text){
                        setchatContext((e)=>{
                        return[ ...e, {user:'user',data: {textType:'tittle', text:text}}]
                        });
                        setText('');
                        setchatContext((e)=>{
                          if(text.includes('/products')){
                            return e.concat(productsMsj)
                          }else if(text.includes('/supports')){
                            return e.concat(supportMsj)
                          }else if (text.includes('/price')){
                            return e.concat(getPrices)
                          }else if (text.includes('/windows')){
                            return e.concat(windowstMsj)
                          }else if (text.includes('/tables')){
                            return e.concat(tablestMsj)
                          }else if (text.includes('/pictures')){
                            return e.concat(picturestMsj)
                          }else{
                            return e
                          }
                          
                        });
                      }
                      }}> 
                    
                      <Canvas style={{ width: 30, height: 25 }}>
                        <FitBox src={rect(0, 0, 20, 24)} dst={rect(0, 0, 28, 28)}>
                        <Path 
                        path={sendIcon} 
                        color="#ffffff"
                        strokeCap="round"
                        strokeJoin="round"
                        style="stroke"
                        strokeWidth={2}/>
                        </FitBox>
                      </Canvas>
                  </TouchableHighlight>
                </View>
                
              </View>
    </Animated.View> 
    <TouchableWithoutFeedback
    onPress={()=>{
        scale()
        StartAnimationOpen()
        setOpen(true)}}  >
        <Animated.View  style={[styles.button,AnimatedScale, open?{display:'none'}:null]} >
            <Canvas style={{width:32,height:32 , display:'flex', alignItems:'center', justifyContent:'center' }}>
                <FitBox src={rect(0, 0, 20, 20)} dst={rect(0, 0, 28, 28)}>
                    <Path 
                    path={"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"} 
                    color="#ffffff"
                    strokeCap="round"
                    strokeJoin="round"
                    style="stroke"
                    strokeWidth={1.8}/>
                </FitBox>
            </Canvas>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={()=>{
        toggle()}}  >
        <Animated.View  style={[styles.button2,AnimatedScale, open?{display:'none'}:null]} >
            <Canvas style={{width:32,height:32 , display:'flex', alignItems:'center', justifyContent:'center' }}>
                <FitBox src={rect(0, 0, 20, 20)} dst={rect(0, 0, 28, 28)}>
                    <Path 
                    path={reverseIcon} 
                    color="#ffffff"
                    strokeCap="round"
                    strokeJoin="round"
                    style="stroke"
                    strokeWidth={1.8}/>
                </FitBox>
            </Canvas>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback
    onPress={()=>{
      router.push("/(tabs)/")}}  >
       

        <Animated.View  style={[styles.buttonBack,AnimatedScale]} >
            <Canvas style={{width:22,height:22 , display:'flex', alignItems:'center', justifyContent:'center' }}>
                <FitBox src={rect(0, 0, 20, 20)} dst={rect(0, 0, 20, 20)}>
                    <Path 
                    path={"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"} 
                    color="#ffffff"
                    strokeCap="round"
                    strokeJoin="round"
                    style="stroke"
                    strokeWidth={1.8}/>
                </FitBox>
            </Canvas>
        </Animated.View>
    </TouchableWithoutFeedback>
    </>
  )
}
const styles = StyleSheet.create({
    chatOpen:{
        position: 'absolute',
        width:'100%',
        height:600,
        bottom:0,
        paddingBottom:0,
        display:'flex',
        flexDirection:'column',
        borderRadius:4,
        zIndex:20
        
      },
      button:{
        position:'absolute', 
        bottom:20, 
        right:20,
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        opacity:0.8,
        zIndex:10
      },
      button2:{
        position:'absolute', 
        bottom:20, 
        left:20,
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        opacity:0.8,
        zIndex:10
      },
      buttonBack:{
        position:'absolute', 
        top:40, 
        left:20,
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        opacity:0.8,
        zIndex:10
      },
      msj:{
        position:'relative',
        flex:0.4,
        borderRadius:15,
        width:'80%',
        marginBottom:20,
        marginLeft:'20%'

      },
      msjBot:{
        
        flex:0.4,
        width:'80%',
        marginBottom:20,
      
        

      }


})
export default Chat