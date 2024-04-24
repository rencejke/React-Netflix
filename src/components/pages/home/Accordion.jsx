import React from 'react'
import { GoPlus } from 'react-icons/go'
import FormSubscribe from './FormSubscribe';

const Accordion = ({item}) => {

    const [active, setActive] = React.useState(false)

    const body = item.answer;

    const handleActive = () => setActive(!active)
    console.log(active);


  return (
    <>    <div className="accordion p-4 bg-stone-800 hover:bg-stone-700 mb-3">

        
    <div className='flex justify-between items-center py-3 cursor-pointer' onClick={handleActive}>
        <h4 className='text-2xl font-bold question '> {item.question}</h4>
        <GoPlus className={`text-5xl transition-all ${active ? "rotate-45" : "rotate-0"}`} />
    </div>
    <div className={`${active ? "max-h-[500px]" : "max-h-[0]"} overflow-hidden transition-all h-full answer`}>
        <div className="mt-5" dangerouslySetInnerHTML={{ __html: body }}>
            
        </div>
    </div>
</div>

</>
  )
} 

export default Accordion