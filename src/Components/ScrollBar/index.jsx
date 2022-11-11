import React, { useEffect, useState } from 'react'
import { ScrollBarVertical, ScrollBarVerticalYellow } from './ScrollBarStyles'

const ScrollBar = () => {

  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const scrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if(scrollHeight) {
        const numberScroll = Number((currentProgress / scrollHeight).toFixed(2)) * 40
        setCompletion(numberScroll)
        if(numberScroll === 0) {
          setCompletion(0)
        } else {
          setCompletion(numberScroll)
        }
      }
    }
    window.addEventListener('scroll', scrollCompletion)
    return () => {
      window.removeEventListener('scroll', scrollCompletion)
    }
  }, [])

  return (
    <ScrollBarVertical>
        <ScrollBarVerticalYellow startScroll={completion} />
    </ScrollBarVertical>
  )
}

export default ScrollBar