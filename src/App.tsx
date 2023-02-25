import React from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <CardList />
            <Form />
        </div>
    );
}

export default App;
