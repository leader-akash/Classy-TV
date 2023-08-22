import React, { useEffect } from 'react'
import "./History.css"
import { useHistory } from 'contexts/history-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard';
import Sidebar from 'components/sidebar/Sidebar';

const History = () => {

  const { historyData, handleClearAllHistory } = useHistory();
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  return (
    <div>
      <Sidebar />

      <h2 className='side-pages-style'><u> Your Watch History</u></h2>
    {
      historyData.length > 0 ? 
    
    <div>

      <button className='clear-history' onClick={handleClearAllHistory}>
         Clear All History
      </button>

      <div className='history-container'>
        {
          historyData.map((el) => {
            return (
              <HorizontalCard
                details={el}
                fromPage={'history'}
              />
            )
          })
        }
      </div>
      </div>
    
    : 
    <div className='empty-history'> 
        <p className='timer'>
        ⏳
        </p>
    Your watch histoy is empty </div> 



    }
    
    </div>
  )
}

export default History                                                              