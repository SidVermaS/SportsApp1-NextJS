import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from '../components/widgets/Search'
import styles from '../styles/Home.module.css'
import {cities} from '../public/assets/data'
export default function Home() {
  const [city,setCity]=useState(cities[0])
  const [searchOptions,]=useState(['Soccer coach', 'Badminton clubs in Pune', 'Academics in India'])
  return (
    <>
      <Head>
        <title>SPOLTO</title>
        <meta name="description" content="spoto app to find caches, clubs & academies near you" />
      </Head>

      <main>
          <div className={styles.first}>
            <div className={styles.firstContent}>
              <div className={styles.title}>
                <div className={styles.leftTitle}>SEARCH, CHOOSE & CONTACT &nbsp;</div>
                <div>
                  <span className={styles.coach}>COACHES</span><br/>
                  <span>ACADEMIES</span>
                </div>
              </div>
              <div className={styles.searchParent}>
                <Dropdown>
                  <Dropdown.Toggle className={styles.citiesDropdown} id="dropdown-basic">
                    {city.title}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                   {cities.map((cityItem)=><Dropdown.Item onClick={()=>setCity(cityItem)} key={cityItem.id}>{cityItem.title}</Dropdown.Item>)}
                  </Dropdown.Menu>
                </Dropdown>
                <div>
                  <div className='d-flex'>
                    <Search searchInputClassName={styles.searchInput} />
                    <div className={styles.searchBtn}><div style={{height: '20px',width: '20px'}}><FontAwesomeIcon size='sm' color='#fff' icon={faSearch} /></div>&nbsp;<div>SEARCH</div></div>
                  </div>
                  <div className={styles.searchOptions}>
                    {searchOptions.map((searchOptionItem)=><div className={styles.searchOptionItem} key={searchOptionItem}>{searchOptionItem}</div>)}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </main> 
    </>
  )
}
