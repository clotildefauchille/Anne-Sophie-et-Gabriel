import React from 'react';
import './style.scss';
import travel from 'src/assets/svg/travel.svg';

const Questions = () => (
  <>
    <div className="questions__container-header">
      <h2 className="questions__title">Foires aux questions</h2>
      <img className="questions__illustration" src={travel} alt="travelling" />
    </div>

    <p className="questions__paragraph">
      <div className="questions__question">
        Quels moyens de transport puis - je utiliser pour me rendre au mariage ?
      </div>
      <br />
      La mairie et l’église de Thionville se situent en plein centre à quelques
      mètres l'une de l'autre. L'abbaye est également dans l'hypercentre de Pont
      - à - Mousson. En train: la ligne TGV du Grand - Est vous permettra
      d'arriver directement à Thionville depuis Paris. Il est aussi possible de
      rejoindre Pont - à - Mousson de Thionville via la ligne Metrolor.Chaque
      lieu se situe à 5 minutes à pied de la gare. En voiture: Il existe de
      nombreux parkings à proximité de chaque lieu.Pour se rendre à l'Abbaye, il
      faudra compter 40 minutes en voiture depuis le centre-ville de Thionville.
      N’hésitez pas à vous coordonner entre invités pour covoiturer ! <br />
      <div className="questions__question">
        Comment optimiser mon trajet si je viens de loin ?
      </div>
      <br /> Le mieux est d’arriver directement à Thionville pour les cérémonies
      civiles et religieuses autour de 13h30 le samedi.Choisissez un logement
      sur Pont - à - Mousson, après la cérémonie religieuse, vous aurez le temps
      d’y déposer vos affaires et vous préparer pour le cocktail.De plus, loger
      sur Pont - à - Mousson vous préservera de devoir rentrer fatigués et
      avinés en voiture! <br />
      <div className="questions__question">
        Quelles activités faire si je prolonge mon séjour ?
      </div>
      <br /> <strong className="questions__strong">Nancy :</strong> n'hésitez
      pas à visiter Nancy et sa sublime Place Stanislas, une des plus belles
      places d'Europe. Sa vieille ville est également très agréable pour s'y
      balader ainsi que le parc de la Pépinière (petit parc animalier, jardin
      botanique) <br /> <strong className="questions__strong">Metz:</strong> la
      Cathédrale Saint - Etienne de Metz datant du XVIème siècle habillée par
      ses vitraux de Chagall est un lieu de visite incontournable.Il sera
      également agréable de vous promener dans le centre - ville piéton de Metz.{' '}
      <br /> <strong className="questions__strong">Alsace:</strong> pour les
      adeptes de vin, de villages typiques et de traditions alsaciennes,
      aventurez - vous sur la route des vins et ses nombreuses caves, afin de
      déguster un petit Gewurztraminer accompagné d'une succulente choucroute ou
      d'une flammenküche. Gérardmer: cette ville située au coeur des Vosges
      offre un magnifique lac si vous souhaitez faire une belle randonnée(à 1h30
      de Pont - à - Mousson) <br />{' '}
      <strong className="questions__strong">Luxembourg:</strong> le Luxembourg
      regorge de magnifique châteaux situés aux quatres coins du pays(Vianden,
      Clervaux, Palais Grand - Ducal).Le centre - ville de Luxembourg - ville
      est également magnifique et inscrit au patrimoine de l'Unesco, notamment
      grâce aux casemates situés dans le Grund. <br />{' '}
      <strong className="questions__strong">Trèves:</strong> située en
      Allemagne(à une heure de Thionville), elle fait partie des plus vieilles
      villes allemandes, datant de l'ère romaine avec son théâtre romain et la
      Porta Nigra.
    </p>
  </>
);

export default Questions;
