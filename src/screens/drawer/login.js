
import React, { Component } from "react";
import { Container, View, Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon } from "native-base";


import {
  StyleSheet,
} from 'react-native';



class Login extends Component {
  render(){
  return (
    <>
    
       <Container>
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered style= {misEstilos.arribaTexto}>
              <Text style = {misEstilos.textCenter} >Iniciar Sesión</Text>
            </CardItem>
            <CardItem bordered style= {misEstilos.abajoDatos}>
              <Body style = {misEstilos.body}>
                  <Item floatingLabel>
                      <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
                      <Label> Username</Label>
                    <Input/>
                  </Item>
                  <Text></Text>
                  <Item lineLabel>
                    <Icon type = 'Ionicons' name = 'ios-lock'></Icon>
                    
                    <Input placeholder = 'Constraseña'/>
                  </Item>

              </Body>
            </CardItem>
            <CardItem footer bordered style = { misEstilos.pie}>
            <Button danger style = { misEstilos.centrar} ><Text> Iniciar Sesión </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
     
      
    </>
  );
}
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8875A'
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'white'
  },

  pie: {
    justifyContent: 'center',
    backgroundColor: '#090C2A'
  },

  centrar: {
    flex: 1,
    marginLeft: '50%',
    justifyContent: 'center'
  },

  body: {
    paddingVertical: 35,
  },

  arribaTexto: {
    backgroundColor: '#090C2A'
  },

  abajoDatos: {
    backgroundColor: '#A0A8C4'
  }
});

export default Login;