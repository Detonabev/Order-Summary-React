import React, { useState } from 'react'
import hero from './illustration-hero.svg'
import Description from './Description'
import icon from './icon-music.svg'
import Payment from './Payment'

const Home = () => {
  const [plan, setyearPlan] = useState(
    {
      year: 'Annual Plan',
      amount: 59.99
    }

  )
  function handleChange() {
    if (plan.year === 'Annual Plan' && plan.amount === 59.99) {
      setyearPlan({ year: 'Monthly plan', amount: 4.99 })
    } else {
      setyearPlan({ year: 'Annual Plan', amount: 59.99 })
    }

  }
  function cancelOrder() {
    setyearPlan([])
  }

  return (
    <div className='home'>
      <img src={hero} className='hero' alt="" />
      <Description />
      <div className='plan'>
        <img src={icon} className='icon' alt="" />

        <div className='sub-plan'>
          <h4>{plan.year}</h4>
          <p>${plan.amount}/year</p>
          
        </div>
        <span style={{ position:'relative', right: 29 }} onClick={handleChange} >Change</span>
      </div>
      <Payment />
      <span  style={{textDecoration: 'none', fontSize: 15, fontWeight: 'bolder', color: 'gray',   }}  onClick={cancelOrder} >Cancel Order</span>
    </div>
    
    
  )
}

export default Home