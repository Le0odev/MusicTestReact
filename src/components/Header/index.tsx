import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import styles from  './styles.module.scss';

import axios from 'axios';


const api = 'https://deezerdevs-deezer.p.rapidapi.com/'


export default function Header () {
    

        
        
    
   
    


    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    } )
    

    return (
        <header  className={styles.headerContainer} >
            <img src="/logo.png"  alt="Music"  />

            <p>Sua melhor opção para ouvir músicas.</p>
            
            <span>{currentDate}</span>
            
            
                
         
            
       
        </header>

        

    )

}