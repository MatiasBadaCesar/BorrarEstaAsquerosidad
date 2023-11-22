import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { FacebookIcon } from './FacebookIcon.js';
import { GithubAltIcon } from './GithubAltIcon.js';
import { InstagramIcon } from './InstagramIcon.js';
import { PerfilIcon } from './PerfilIcon.js';
import classes from './Portafolio.module.css';
import { TwitterIcon } from './TwitterIcon.js';
import { YoutubeIcon } from './YoutubeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 319:2 */
export const Portafolio: FC<Props> = memo(function Portafolio(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes.horario}>
        <div className={classes.Argentina}>(Argentina)</div>
        <div className={classes.horario2}>14:00 a 20:00</div>
        <div className={classes.atencion}>Horaríos:</div>
      </div>
      <div className={classes.numero}>
        <div className={classes.SoloMensajes}>(Solo mensajes)</div>
        <div className={classes.numero2}>+54 9 154 909090</div>
        <div className={classes.whatshapp}>Whatshapp:</div>
      </div>
      <div className={classes.contacto}>Contacto</div>
      <div className={classes.fondo}></div>
      <div className={classes.espacio}>Espacio</div>
      <div className={classes.luna}>Luna</div>
      <div className={classes.imagen}></div>
      <div className={classes.victoriaAustralia}>Victoria (Australia)</div>
      <div className={classes.granja}>Granja</div>
      <div className={classes.imagen2}></div>
      <div className={classes.navarraEspana}>Navarra (España)</div>
      <div className={classes.turismo}>
        <div className={classes.textBlock}>Turismo</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.imagen3}></div>
      <div className={classes.berlinAlemania}>Berlin (Alemania)</div>
      <div className={classes.abogado}>Abogado</div>
      <div className={classes.imagen4}></div>
      <div className={classes.alaskaEEUU}>Alaska (EE. UU)</div>
      <div className={classes.acampar}>Acampar</div>
      <div className={classes.imagen5}></div>
      <div className={classes.cDeMexicoMexico}>C. de Mexico (Mexico)</div>
      <div className={classes.festival}>Festival</div>
      <div className={classes.imagen6}></div>
      <div className={classes.miCasaArgentina}>Mi Casa (Argentina)</div>
      <div className={classes.maria}>Maria</div>
      <div className={classes.imagen7}></div>
      <div className={classes.virginiaEEUU}>Virginia (EE.UU.)</div>
      <div className={classes.boda}>Boda</div>
      <div className={classes.imagen8}></div>
      <div className={classes.trabajos}>Trabajos</div>
      <div className={classes.imagen9}></div>
      <div className={classes.color}></div>
      <div className={classes.fotografoProfesional}>Fotógrafo profesional</div>
      <div className={classes.rodrigoPalacio}>Rodrigo Palacio</div>
      <div className={classes.cuadro}></div>
      <div className={classes.contacto2}>Contacto</div>
      <div className={classes.trabajos2}>Trabajos</div>
      <div className={classes.acercaDe}>
        <a href='https://ds' target='_blank' rel='noreferrer' className={classes.textBlock3}>
          Acerca de{' '}
        </a>
      </div>
      <div className={classes.capturandoMomentosInolvidables}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Capturando momentos </span>
          <span className={classes.label2}>inolvidables</span>
          <span className={classes.label3}>
            {' '}
            con el arte de la luz: transformo tus historias en imágenes que perduran para{' '}
          </span>
          <span className={classes.label4}>siempre</span>
          <span className={classes.label5}>.</span>
        </p>
      </div>
      <div className={classes.acercaDe2}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label6}>Acerca de</span>
          <span className={classes.label7}> </span>
        </p>
      </div>
      <div className={classes.perfil}>
        <PerfilIcon className={classes.icon} />
      </div>
    </div>
  );
});
