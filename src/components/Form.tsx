import React from "react";

export default function Form() {
    return (
        <section id="form">
            <form action="">
                <h3>Quero Estudar na Rocket!</h3>

                <div className="form-group">
                    <input className="input-control" placeholder="Nome" />

                    <input
                        type="email"
                        className="input-control"
                        placeholder="Email"
                    />
                </div>

                <div className="form-group">
                    <input className="input-control" placeholder="Empresa" />
                </div>

                <div className="form-group">
                    <input className="input-control" placeholder="Endereco" />
                </div>

                <div className="form-group">
                    <input
                        className="input-control"
                        placeholder="Cidade"
                        style={{ flex: 3 }}
                    />
                    <input
                        className="input-control"
                        placeholder="Estado"
                        style={{ flex: 1 }}
                    />
                    <input
                        className="input-control"
                        placeholder="CEP"
                        style={{ flex: 1 }}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="button">
                        Save
                    </button>
                </div>
            </form>
        </section>
    );
}
