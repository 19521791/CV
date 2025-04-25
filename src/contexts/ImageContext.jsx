/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { createConsumer } from '@rails/actioncable'
import { fetchSignedUrlAPI } from '@/apis'

export const ImageContext = createContext()

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState({})
  // const cable = createConsumer(`${import.meta.env.VITE_WSS_PROTOCOL}://${import.meta.env.VITE_WSS}`)

  const updateImageUrl = (key, newUrl) => {
    setImages((prevImages) => ({
      ...prevImages,
      [key]: newUrl
    }))
  }

  useEffect(() => {
    fetchSignedUrlAPI()
      .then((data) => {
        if (data.records) {
          data.records.forEach((item) => {
            updateImageUrl(item.key, item.signed_url)
          })
        }
      })

    // const subscription = cable.subscriptions.create('SignedUrlChannel', {
    //   received: (data) => {
    //     if (data.key && data.signed_url && data.type === 'SIGNED_URLS_UPDATE') {
    //       updateImageUrl(data.key, data.signed_url)
    //     }
    //   }
    // })

    // return () => {
    //   subscription.unsubscribe()
    // }
  }, [])

  return (
    <ImageContext.Provider value={{ images, updateImageUrl }}>
      {children}
    </ImageContext.Provider>
  )
}

