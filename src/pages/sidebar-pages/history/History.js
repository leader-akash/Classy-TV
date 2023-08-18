import React from 'react'
import "./History.css"
import { useHistory } from 'contexts/history-context'
import HorizontalCard from 'components/horizontalCard/HorizontalCard';

const History = () => {

  const { historyData, handleClearAllHistory } = useHistory();

  return (
    <div>
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