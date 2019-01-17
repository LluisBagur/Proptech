import React, { Component } from 'react';
import {Banner} from './components/Banner/Banner';
import {Article} from './components/Article/Article';
import {HeaderTitle} from './components/HeaderTitle/HeaderTitle'
import './App.css';

class App extends Component {
state={
  article1:{
    img:"puzzle.svg",
    title:"Understand your client better",
    text:"Know your client inmediatly through their financial data: what is their income, what do they spend money on, what are their consumption habits.",
    link:"www.google.es"
  },
  article2:{
    img:"security-lock.svg",
    title:"Regulatory compliance and exposure",
    text:"Our trusted 3rd party partners are fully compliant so you don't have to be. Let a third party hold funds securely for you and manage them with our APIs.",
    link:"www.google.es"
  },
  article3:{
    img:"account-multiple.svg",
    title:"Automatic AML and identity checks",
    text:"Protect yourself from fraud by easily verifying costumers' identity, and checking them against the world's most extensive anti-money laundrering databases.",
    link:"www.google.es"
  },
  article4:{
    img:"alert.svg",
    title:"Better risk analysis",
    text:"With acces to your costumer's account data, you can make better risk assessments and therefore better decisicons.",
    link:"www.google.es"
  },
  article5:{
    img:"cogs.svg",
    title:"Automation opportunities",
    text:"Fully automate money movement precedures, identuty checks, and account readings, reducing the need for human input.",
    link:"www.google.es"
  },
  header:"How open banking technology can help your business",
  url: "www.google.es"
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Banner url={this.state.url}/>
        <HeaderTitle header={this.state.header} />
        </header>
        <div className="App-body">

        <Article article={this.state.article1}/>
        <Article article={this.state.article2}/>
        <Article article={this.state.article3}/>
        <Article article={this.state.article4}/>
        <Article article={this.state.article5}/>
        
        </div>
      </div>
    );
  }
}

export default App;
