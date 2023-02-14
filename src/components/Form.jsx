import React from 'react';
import './Form.css'
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'
import Logo from './Logo_Zeus_Comp.png';

class Formulario extends React.Component {
  state = {
    localidad: '',
    fechaEvento: '',
    horaComienzo: '',
    nombre: '',
    apodo: '',
    cancionEntrada: '',
    valsPreferido: '',
    cancionInicioFiesta: '',
    musicaNoPuedeFaltar: '',
    musicaNoDebeEstar: '',
    cancionesCorteTorta: '',
    momentoEspecial: '',
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { localidad, fechaEvento, horaComienzo, nombre, apodo, cancionEntrada, valsPreferido, cancionInicioFiesta, musicaNoPuedeFaltar, musicaNoDebeEstar, cancionesCorteTorta, momentoEspecial } = this.state;

    const doc = new jsPDF();

    autoTable(doc, { html: '#my-table' });
    doc.save(`Formulario_ZEUS_${this.state.nombre}.pdf`);
    window.location.href = `https://api.whatsapp.com/send?phone=59898595425&text=Hola,%20este%20es%20mi%20formulario%20de%20fiesta!%20%0ASoy%20${this.state.nombre}`;
  }

  render() {
    return (
        <div className='bg-dark container-fluid h-100 p-4'>
            <div className='bg-primary bg-gradient container row p-3 border border border-primary rounded '>
                <div className='col-2 align-items-center justify-content-center'>
                    <div className='mt-4 '>
                        <img className='Logo' src={Logo} alt="NO IMAGE" />
                    </div>
                </div>
                <div className='col-10 p-3'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row w-100">
                            <div className='col-12'>
                                <label htmlFor="localidad">Localidad:</label>
                                <input type="text" name="localidad" id="localidad" value={this.state.localidad} onChange={this.handleInputChange} />
                        
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="form-group col-sm-6">
                                <label htmlFor="fechaEvento">Fecha de el Evento:</label>
                                <input type="date" name="fechaEvento" id="fechaEvento" value={this.state.fechaEvento} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="horaComienzo">Hora de Comienzo:</label>
                                <input type="time" name="horaComienzo" id="horaComienzo" value={this.state.horaComienzo} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="form-group col-sm-6">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" value={this.state.nombre} onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="apodo">Apodo:</label>
                                <input type="text" name="apodo" id="apodo" value={this.state.apodo} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className='col-12'>
                                <label htmlFor="cancionEntrada">¿Con que cancion te gustaria entrar?</label>
                                <input type="text" name="cancionEntrada" id="cancionEntrada" value={this.state.cancionEntrada} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="valsPreferido">¿Que vals prefieres?</label>
                                <input type="text" name="valsPreferido" id="valsPreferido" value={this.state.valsPreferido} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="cancionInicioFiesta">¿Con que cancion te gustaria comenzar tu fiesta?</label>
                                <input type="text" name="cancionInicioFiesta" id="cancionInicioFiesta" value={this.state.cancionInicioFiesta} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="musicaNoPuedeFaltar">¿Que musica o cancion no puede faltar en tu fiesta?</label>
                                <input type="text" name="musicaNoPuedeFaltar" id="musicaNoPuedeFaltar" value={this.state.musicaNoPuedeFaltar} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="musicaNoDebeEstar">¿Que musica o cancion no debe estar en tu fiesta?</label>
                                <input type="text" name="musicaNoDebeEstar" id="musicaNoDebeEstar" value={this.state.musicaNoDebeEstar} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="cancionesCorteTorta">¿Que canciones prefieres para el corte de la torta?</label>
                                <input type="text" name="cancionesCorteTorta" id="cancionesCorteTorta" value={this.state.cancionesCorteTorta} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-12'>
                                <label htmlFor="momentoEspecial">Si hay algun momento especial en tu fiesta, queremos que lo aclares aqui:</label>
                                <textarea name="momentoEspecial" id="momentoEspecial" value={this.state.momentoEspecial} onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className='row w-100'>
                            <div className='col-6'>
                                <button type="submit">Descargar y enviar formulario en PDF</button>
                            </div>
                        </div>
                    </form>

                    <table id="my-table" style={{ display: 'none' }}>
                            <tbody>
                                <tr>
                                    <td>Localidad:</td>
                                    <td>{this.state.localidad}</td>
                                </tr>
                                <tr>
                                    <td>Fecha de el Evento:</td>
                                    <td>{this.state.fechaEvento}</td>
                                </tr>
                                <tr>
                                    <td>Hora de Comienzo:</td>
                                    <td>{this.state.horaComienzo}</td>
                                </tr>
                                <tr>
                                    <td>Nombre:</td>
                                    <td>{this.state.nombre}</td>
                                </tr>
                                <tr>
                                    <td>Apodo:</td>
                                    <td>{this.state.apodo}</td>
                                </tr>
                                <tr>
                                    <td>¿Con que cancion te gustaria entrar?</td>
                                    <td>{this.state.cancionEntrada}</td>
                                </tr>
                                <tr>
                                    <td>¿Que vals prefieres?</td>
                                    <td>{this.state.valsPreferido}</td>
                                </tr>
                                <tr>
                                    <td>¿Con que cancion te gustaria comenzar tu fiesta?</td>
                                    <td>{this.state.cancionInicioFiesta}</td>
                                </tr>
                                <tr>
                                    <td>¿Que musica o cancion no puede faltar en tu fiesta?</td>
                                    <td>{this.state.musicaNoPuedeFaltar}</td>
                                </tr>
                                <tr>
                                    <td>¿Que musica o cancion no debe estar en tu fiesta?</td>
                                    <td>{this.state.musicaNoDebeEstar}</td>
                                </tr>
                                <tr>
                                    <td>¿Que canciones prefieres para el corte de la torta?</td>
                                    <td>{this.state.cancionesCorteTorta}</td>
                                </tr>
                                <tr>
                                    <td>Si hay algun momento especial en tu fiesta, queremos que lo aclares aqui:</td>
                                    <td>{this.state.momentoEspecial}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}



export default Formulario;
