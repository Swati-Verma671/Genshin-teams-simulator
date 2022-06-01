

import React, { Component, useState, useEffect } from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      value:[""],
      count:0,
    }
  }
  
  
  
  
  anemo=()=>{
    const items=["Venti","Jean","Sucrose","Kaedehara Kazuha","Xiao","Traveller(Anemo)"]
    var item0= items[Math.floor(Math.random()*items.length)]
    this.setState({item0})
    const count = this.state.count;
    this.setState({count:count+1})
  }

  geo=()=>{
    const items=["Noelle","Ningguang","Zhongli","Yunjin","Albedo","Arataki Itto","Traveller(Geo)","Gorou"]
    var item1= items[Math.floor(Math.random()*items.length)];
    this.setState({item1})
    const count = this.state.count;
    this.setState({count:count+1})
  }
  
  electro=()=>{
    const items=["Lisa","Beidou","Razor","Raiden Shogun","Yae miko","Keqing","Traveller(Electro)","Kujou Sara","Fischl von luftschloss narfidort","Kuki Shinobu"]
    var item2 = items[Math.floor(Math.random()*items.length)];
    this.setState({item2})
    const count = this.state.count;
    this.setState({count:count+1})
  }

  pyro=()=>{
    const items=["Klee","Diluc","Amber","Xinyan","Yanfei","Xiangling","Hu tao","Thoma","Yoimiya","Bennett"]
    var item3 = items[Math.floor(Math.random()*items.length)];
    this.setState({item3})
    const count = this.state.count;
    this.setState({count:count+1})
  }

  cryo=()=>{
    const items=["Diona","Aloy","Chongyun","Qiqi","Eula","Ganyu","Rosaria","Shenhe","Kaeya","Kamisato Ayaka"]
    var item4 = items[Math.floor(Math.random()*items.length)];
    this.setState({item4})
    const count = this.state.count;
    this.setState({count:count+1})
  }

  hydro=()=>{
    const items=["Kokomi","Mona","Tartaglia","Barbara","Xingqiu","Kamisato Ayato","Yelan"]
    var item5 = items[Math.floor(Math.random()*items.length)];
    this.setState({item5})
    const count = this.state.count;
    this.setState({count:count+1})
  }

  nota=()=>{
    
    const items=["Venti","Jean","Sucrose","Kaedehara Kazuha","Xiao","Traveller(Anemo)","Noelle","Ningguang","Zhongli","Yunjin","Albedo","Arataki Itto","Traveller(Geo)","Gorou","Lisa","Beidou","Razor","Raiden Shogun","Yae miko","Keqing","Traveller(Electro)","Kujou Sara","Fischl von luftschloss narfidort","Klee","Diluc","Amber","Xinyan","Yanfei","Xiangling","Hu tao","Thoma","Yoimiya","Bennett","Diona","Aloy","Chongyun","Qiqi","Eula","Ganyu","Rosaria","Shenhe","Kaeya","Kamisato Ayaka","Kokomi","Mona","Tartaglia","Barbara","Xingqiu","Kamisato Ayato","Yelan"]
    var item6 = items[Math.floor(Math.random()*items.length)];
    this.setState({item6})

    
    var item7 = items[Math.floor(Math.random()*items.length)];
    this.setState({item7})

    
    var item8 = items[Math.floor(Math.random()*items.length)];
    this.setState({item8})

   
    var item9 = items[Math.floor(Math.random()*items.length)];
    this.setState({item9})
    
    
    const count = this.state.count;
    this.setState({count:count+4})
  }

  reset=()=>{
    this.setState({count:0})
    this.setState({item0:""})
    this.setState({item1:""})
    this.setState({item2:""})
    this.setState({item3:""})
    this.setState({item4:""})
    this.setState({item5:""})
    this.setState({item6:""})
    this.setState({item7:""})
    this.setState({item8:""})
    this.setState({item9:""})
  }

    
      render(){
        return (
    
          <div className='Dashboard'>
            
            <div className='welcome'>Welcome to Genshin Impact teams generator. <br />This app will pick out a random team for you based on the elements you pick.</div>
            <div className='choose'>Choose an element: (If you want it to random then pick Surprise). Click reset to make a new team.</div>
            <div className='elements'>
              <button className="anemo" onClick={this.anemo}>Anemo</button>
              <button className='geo' onClick={this.geo}>Geo</button>
              <button className='electro' onClick={this.electro}>Electro</button>
              <button className='pyro' onClick={this.pyro} >Pyro</button>
              <button className='cryo' onClick={this.cryo} >Cryo</button>
              <button className='hydro' onClick={this.hydro} >Hydro</button>
              <button className='nota' onClick={this.nota} disabled={this.state.count!==0}>Surprise</button>
              <button className='reset' onClick={this.reset} disabled={this.state.count<4}>Reset</button>
              
            </div>
            <p>{this.state.item0}</p>
            <p>{this.state.item1}</p>
            <p>{this.state.item2}</p>
            <p>{this.state.item3}</p>
            <p>{this.state.item4}</p>
            <p>{this.state.item5}</p>
            <p>{this.state.item6}</p>
            <p>{this.state.item7}</p>
            <p>{this.state.item8}</p>
            <p>{this.state.item9}</p>
            <div className='navbar'>
              <div className='who'><a href="https://swativerma.herokuapp.com/">Meet the creator</a></div>
              <div className='where'><a href="https://genshin.hoyoverse.com/en/home">Official game site</a></div>
            </div>
            <div className='disclaimer'>
              I created this Genshin teams simulator for fun and practice. I would keep adding new characters as they are officially announced.
            </div>
            </div>
          
        );
      }
    
  
}

export default App;
