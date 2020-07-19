/* Nuevo componente utilizando clases */
import React from 'react';



class MediaCard extends React.Component {
    render() {
        return(
                <div className="App">
                  <div className="card">
                    <div className="card__profile">
                      <img className="card__image" src={this.props.img} alt=""/>
                      <div className="card__profile-text">
                        <p className="card__profile-name">
                          {this.props.name}
                        </p>
                        <p className="card__profile-date">
                        {this.props.nadateme}
                        </p>
                      </div>
                    </div>
                    <div className="card__text-content">
                      <p>{this.props.text}</p>
                    </div>
                    <div className="card__extra">
                      <p className="read-more">Leer más...</p>
                      <p className="favorite">{this.props.likes} {this.props.heart}</p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default MediaCard;